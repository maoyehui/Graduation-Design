package book_rec.step8;

import java.io.IOException;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.conf.Configured;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.LongWritable;
import org.apache.hadoop.io.NullWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.Mapper;
import org.apache.hadoop.mapreduce.Reducer;
import org.apache.hadoop.mapreduce.lib.db.DBConfiguration;
import org.apache.hadoop.mapreduce.lib.db.DBOutputFormat;
import org.apache.hadoop.mapreduce.lib.input.TextInputFormat;
import org.apache.hadoop.util.Tool;
import org.apache.hadoop.util.ToolRunner;

/**
 * 将前5推荐书籍写入数据库
 * 
 * @author robbin
 * 
 *         yarn jar target/BookRecommendation-0.0.1-SNAPSHOT.jar
 *         book_rec.step8.FiltrateTest
 *         -Dinput=/BookRec/step7
 *         -libjars /opt/maven/repository/mysql/mysql-connector-java/5.1.38/mysql-connector-java-5.1.38.jar
 *
 */

public class FiltrateTest extends Configured implements Tool {

	public static class FiltrateMapper extends Mapper<LongWritable, Text, KeyPair, ValueTuple> {
		private KeyPair k = new KeyPair();
		private ValueTuple v = new ValueTuple();
		
		@Override
		protected void map(LongWritable key, Text value,
				Mapper<LongWritable, Text, KeyPair, ValueTuple>.Context context)
				throws IOException, InterruptedException {
			String[] split = value.toString().split("\t");
			k.setId(split[0].trim());
			k.setRef(Double.valueOf(split[2].trim()));
			v.setBook_id(split[1].trim());
			v.setPref(Double.valueOf(split[2].trim()));
			context.write(k, v);
		}
	}
	
	public static class FiltrateReducer extends Reducer<KeyPair, ValueTuple, RecommendationDB, NullWritable> {
		private RecommendationDB k = new RecommendationDB();

		@Override
		protected void reduce(
				KeyPair key,
				Iterable<ValueTuple> values,
				Reducer<KeyPair, ValueTuple, book_rec.step8.RecommendationDB, NullWritable>.Context context)
				throws IOException, InterruptedException {
			int count = 0;
			for (ValueTuple value : values) {
				if (count < 5) {
					k.setId(key.getId());
					k.setBook_id(value.getBook_id());
					k.setPreference(value.getPref());
					context.write(k, NullWritable.get());
					count++;
				}
				else
					break;
			}
		}
	}
	
	@Override
	public int run(String[] args) throws Exception {
		Configuration conf = getConf();
		Path input = new Path(conf.get("input"));
		
		Job job = Job.getInstance(conf);
		job.setJarByClass(this.getClass());
		job.setJobName("Filtrate & Wirte to DB Test");
		
		job.setMapperClass(FiltrateMapper.class);
		job.setMapOutputKeyClass(KeyPair.class);
		job.setMapOutputValueClass(ValueTuple.class);
		
		job.setReducerClass(FiltrateReducer.class);
		job.setOutputKeyClass(RecommendationDB.class);
		job.setOutputValueClass(NullWritable.class);

		job.setInputFormatClass(TextInputFormat.class);
		job.setOutputFormatClass(DBOutputFormat.class);
		
		TextInputFormat.addInputPath(job, input);
		
		DBConfiguration.configureDB(job.getConfiguration(), "com.mysql.jdbc.Driver",
				"jdbc:mysql://192.168.56.1:3306/brs", "root", "123456");
		DBOutputFormat.setOutput(job, "recommendation_books", "rec_day", "id", "book_id", "rec_degree");
		
		job.setPartitionerClass(KeyPairPartitioner.class);
		job.setSortComparatorClass(KeyPairComparator.class);
		job.setGroupingComparatorClass(KeyPairGroupComparator.class);
		
		return job.waitForCompletion(true) ? 0 : 1;
	}
	
	public static void main(String[] args) throws Exception {
		System.exit(ToolRunner.run(new FiltrateTest(), args));
	}

}

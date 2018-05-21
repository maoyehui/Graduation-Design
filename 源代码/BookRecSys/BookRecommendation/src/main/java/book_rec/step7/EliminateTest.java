package book_rec.step7;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.conf.Configured;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.LongWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.Mapper;
import org.apache.hadoop.mapreduce.Reducer;
import org.apache.hadoop.mapreduce.lib.input.MultipleInputs;
import org.apache.hadoop.mapreduce.lib.input.TextInputFormat;
import org.apache.hadoop.mapreduce.lib.output.TextOutputFormat;
import org.apache.hadoop.util.Tool;
import org.apache.hadoop.util.ToolRunner;

import book_rec.step5.KeyTuple;
import book_rec.step5.KeyTupleGroupComparator;
import book_rec.step5.KeyTuplePartitioner;

/**
 * 去除用户已经收藏的书籍
 * 
 * @author robbin
 * 
 *         yarn jar target/BookRecommendation-0.0.1-SNAPSHOT.jar
 *         book_rec.step7.EliminateTest
 *         -Dorigin=/user/maoyh/collection_books
 *         -Dmatrix=/BookRec/step6
 *         -Doutput=/BookRec/step7
 *
 */

public class EliminateTest extends Configured implements Tool {

	public static class JoinOriginMapper extends Mapper<LongWritable, Text, KeyTuple, Text>{
		private KeyTuple k = new KeyTuple();
		private Text v = new Text();
		
		@Override
		protected void map(LongWritable key, Text value,
				Mapper<LongWritable, Text, KeyTuple, Text>.Context context)
				throws IOException, InterruptedException {
			String[] split = value.toString().split("\t");
			k.setId(split[0].trim() + "\t" + split[1].trim());
			k.setTag("1");
			v.set(split[6].trim());
			context.write(k, v);
		} 
	}
	
	public static class JoinMatrixMapper extends Mapper<LongWritable, Text, KeyTuple, Text>{
		private KeyTuple k = new KeyTuple();
		private Text v = new Text();
		
		@Override
		protected void map(LongWritable key, Text value,
				Mapper<LongWritable, Text, KeyTuple, Text>.Context context)
				throws IOException, InterruptedException {
			String[] split = value.toString().split(":");
			k.setId(split[0].trim());
			k.setTag("1");
			v.set(split[1].trim());
			context.write(k, v);
		}
	}
	
	public static class EliminateReducer extends Reducer<KeyTuple, Text, Text, Text>{
		private List<Text> l = new ArrayList<Text>();
		
		@Override
		protected void reduce(KeyTuple key, Iterable<Text> values,
				Reducer<KeyTuple, Text, Text, Text>.Context context)
				throws IOException, InterruptedException {
			int count = 0;
			for (Text v : values) {
				count++;
				l.add(v);
			}
			if(count == 1){
				context.write(key.getId(), l.get(0));
			}
		}
		
	}

	@Override
	public int run(String[] args) throws Exception {
		Configuration conf = getConf();
		Path origin = new Path(conf.get("origin"));
		Path matrix = new Path(conf.get("matrix"));
		Path output = new Path(conf.get("output"));
		
		Job job = Job.getInstance(conf);
		job.setJarByClass(this.getClass());
		job.setJobName("Eliminate Matrix");
		
		job.setMapperClass(JoinOriginMapper.class);
		job.setMapperClass(JoinMatrixMapper.class);
		job.setReducerClass(EliminateReducer.class);
		
		MultipleInputs.addInputPath(job, origin, TextInputFormat.class, JoinOriginMapper.class);
		MultipleInputs.addInputPath(job, matrix, TextInputFormat.class, JoinMatrixMapper.class);
		job.setMapOutputKeyClass(KeyTuple.class);
		job.setMapOutputValueClass(Text.class);
		
		job.setOutputFormatClass(TextOutputFormat.class);
		job.setOutputKeyClass(Text.class);
		job.setOutputValueClass(Text.class);
		
		TextOutputFormat.setOutputPath(job, output);
		
		job.setPartitionerClass(KeyTuplePartitioner.class);
		job.setGroupingComparatorClass(KeyTupleGroupComparator.class);
		
		return job.waitForCompletion(true) ? 0 : 1;
	}

	public static void main(String[] args) throws Exception {
		System.exit(ToolRunner.run(new EliminateTest(), args));
	}
	
}

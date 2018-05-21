package book_rec.step3;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.conf.Configured;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.lib.input.KeyValueLineRecordReader;
import org.apache.hadoop.mapreduce.lib.input.KeyValueTextInputFormat;
import org.apache.hadoop.mapreduce.lib.output.TextOutputFormat;
import org.apache.hadoop.util.Tool;
import org.apache.hadoop.util.ToolRunner;

/**
 * 输出商品矩阵--已处理
 * 
 * @author robbin
 * 
 * 			mvn clean install
 *
 *         yarn jar target/BookRecommendation-0.0.1-SNAPSHOT.jar
 *         book_rec.step3.FinalCoMatrixTest
 *         -Dinput=/BookRec/step2/part-r-00000
 *         -Doutput=/BookRec/step3
 *
 */

public class FinalCoMatrixTest extends Configured implements Tool {

	public static void main(String[] args) throws Exception {
		System.exit(ToolRunner.run(new FinalCoMatrixTest(), args));
	}

	@Override
	public int run(String[] args) throws Exception {
		
		Configuration conf = getConf();
		Path input = new Path(conf.get("input"));
		Path output = new Path(conf.get("output"));
		
		Job job = Job.getInstance(conf);
		job.setJarByClass(this.getClass());
		job.setJobName("Final Co Matrix Test");
		
		job.setMapperClass(FinalCoMatrixMapper.class);
		job.setMapOutputKeyClass(Text.class);
		job.setMapOutputValueClass(BookVector.class);
		
		job.setReducerClass(FinalCoMatrixReducer.class);
		job.setOutputKeyClass(Text.class);
		job.setOutputValueClass(Text.class);
		
		job.setInputFormatClass(KeyValueTextInputFormat.class);
		job.getConfiguration().set(KeyValueLineRecordReader.KEY_VALUE_SEPERATOR, "\t");
		job.setOutputFormatClass(TextOutputFormat.class);
		
		KeyValueTextInputFormat.addInputPath(job, input);
		TextOutputFormat.setOutputPath(job, output);
		
		return job.waitForCompletion(true) ? 0 : 1;
	}

}

package book_rec.step1;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.conf.Configured;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.lib.input.TextInputFormat;
import org.apache.hadoop.mapreduce.lib.output.TextOutputFormat;
import org.apache.hadoop.util.Tool;
import org.apache.hadoop.util.ToolRunner;

/**
 * 用户收藏书籍列表
 * 
 * @author robbin
 * 
 * 		mvn clean install
 * 
 *         yarn jar target/BookRecommendation-0.0.1-SNAPSHOT.jar
 *         book_rec.step1.BookRecTest
 *         -Dinput=/user/maoyh/collection_books
 *         -Doutput=/BookRec/step1
 *         
 */

public class BookRecTest extends Configured implements Tool {

	public static void main(String[] args) throws Exception{
		System.exit(ToolRunner.run(new BookRecTest(), args));
	}
	
	@Override
	public int run(String[] args) throws Exception {
		
		Configuration conf = getConf();
		Path input = new Path(conf.get("input"));
		Path output = new Path(conf.get("output"));
		
		Job job = Job.getInstance(conf);
		job.setJarByClass(this.getClass());
		job.setJobName("BookRecTest");
		
		job.setInputFormatClass(TextInputFormat.class);
		job.setOutputFormatClass(TextOutputFormat.class);
		
		job.setMapperClass(BookRecMapper.class);
		job.setMapOutputKeyClass(IntWritable.class);
		job.setMapOutputValueClass(IntWritable.class);
		
		job.setReducerClass(BookRecReducer.class);
		job.setOutputKeyClass(IntWritable.class);
		job.setOutputValueClass(Text.class);
		
		TextInputFormat.addInputPath(job, input);
		TextOutputFormat.setOutputPath(job, output);
		
		return job.waitForCompletion(true) ? 0 : 1;
	}

}

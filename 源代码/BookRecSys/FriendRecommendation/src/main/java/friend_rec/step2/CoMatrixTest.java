package friend_rec.step2;

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
 * 关注共现列表--未合并
 * 
 * @author robbin
 * 
 * 			mvn clean install
 * 
 *         yarn jar target/FriendRecommendation-0.0.1-SNAPSHOT.jar
 *         friend_rec.step2.CoMatrixTest
 *         -Dinput=/FriendRec/step1
 *         -Doutput=/FriendRec/step2
 *
 */
public class CoMatrixTest extends Configured implements Tool {

	public static void main(String[] args) throws Exception {
	System.exit(ToolRunner.run(new CoMatrixTest(), args));
	}

	@Override
	public int run(String[] args) throws Exception {
		Configuration conf = getConf();
		Path input = new Path(conf.get("input"));
		Path output = new Path(conf.get("output"));
		
		Job job = Job.getInstance(conf);
		job.setJarByClass(this.getClass());
		job.setJobName("Co-Matrix");
		
		job.setInputFormatClass(TextInputFormat.class);
		job.setOutputFormatClass(TextOutputFormat.class);
		
		job.setMapperClass(CoMatrixMapper.class);
		job.setMapOutputKeyClass(Text.class);
		job.setMapOutputValueClass(IntWritable.class);
		
		job.setReducerClass(CoMatrixReducer.class);
		job.setOutputKeyClass(Text.class);
		job.setOutputValueClass(IntWritable.class);
		
		TextInputFormat.addInputPath(job, input);
		TextOutputFormat.setOutputPath(job, output);
		
		return job.waitForCompletion(true) ? 0 : 1;
	}

}

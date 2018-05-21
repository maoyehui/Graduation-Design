package friend_rec.step6;

import java.io.IOException;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.conf.Configured;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.LongWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.Mapper;
import org.apache.hadoop.mapreduce.Reducer;
import org.apache.hadoop.mapreduce.lib.input.TextInputFormat;
import org.apache.hadoop.mapreduce.lib.output.TextOutputFormat;
import org.apache.hadoop.util.Tool;
import org.apache.hadoop.util.ToolRunner;

/**
 * 推荐矩阵值合并，累加相同键
 * 
 * @author robbin
 * 
 *         yarn jar target/FriendRecommendation-0.0.1-SNAPSHOT.jar
 *         friend_rec.step6.MergeTest
 *         -Dinput=/FriendRec/step5
 *         -Doutput=/FriendRec/step6
 *
 */

public class MergeTest extends Configured implements Tool {

	public static class MergeMapper extends Mapper<LongWritable, Text, Text, Text>{
		private Text k = new Text();
		private Text v = new Text();
		@Override
		protected void map(LongWritable key, Text value,
				Mapper<LongWritable, Text, Text, Text>.Context context)
				throws IOException, InterruptedException {
			String[] split = value.toString().split("\t");
			String[] token = split[1].split(":");
			k.set(split[0].trim() + "\t" + token[0].trim());
			v.set(token[1].trim());
			context.write(k, v);
		}
	}
	
	public static class MergeReudcer extends Reducer<Text, Text, Text, Text> {
		private Text k = new Text();
		private Text v = new Text();
		
		@Override
		protected void reduce(Text key, Iterable<Text> values,
				Reducer<Text, Text, Text, Text>.Context context)
				throws IOException, InterruptedException {
			double sum = 0.0;
			for (Text v : values) {
				sum += Double.parseDouble(v.toString());
			}
			String[] split = key.toString().split("\t");
			k.set(split[0].trim());
			v.set(split[1].trim() + ":" + sum);
			context.write(k, v);
		}
	}

	@Override
	public int run(String[] args) throws Exception {
		Configuration conf = getConf();
		Path input = new Path(conf.get("input"));
		Path output = new Path(conf.get("output"));

		Job job = Job.getInstance(conf);
		job.setJarByClass(this.getClass());
		job.setJobName("merge test");
		
		job.setMapperClass(MergeMapper.class);
		job.setMapOutputKeyClass(Text.class);
		job.setMapOutputValueClass(Text.class);
		
		job.setReducerClass(MergeReudcer.class);
		job.setOutputKeyClass(Text.class);
		job.setOutputValueClass(Text.class);
		
		job.setInputFormatClass(TextInputFormat.class);
		job.setOutputFormatClass(TextOutputFormat.class);
		
		TextInputFormat.addInputPath(job, input);
		TextOutputFormat.setOutputPath(job, output);
		
		return job.waitForCompletion(true) ? 0 : 1;
	}

	public static void main(String[] args) throws Exception {
		System.exit(ToolRunner.run(new MergeTest(), args));
	}
	
}

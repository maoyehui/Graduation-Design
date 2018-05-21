package friend_rec.step5;

import java.io.IOException;
import java.util.Iterator;
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

import friend_rec.step4.Preference;

/**
 * 推荐矩阵
 * 
 * @author robbin
 * 
 * 			mvn clean install
 * 
 *         yarn jar target/FriendRecommendation-0.0.1-SNAPSHOT.jar
 *         friend_rec.step5.ReduceJoinTest
 *
 */

public class ReduceJoinTest extends Configured implements Tool {
	
	public static class JoinCoMatrixMapper extends Mapper<LongWritable, Text, KeyTuple, VectorWritable> {
		private KeyTuple k = new KeyTuple();
		private VectorWritable v = new VectorWritable();
		private VectorParser parser = new VectorParser();
		
		@Override
		protected void map(
				LongWritable key,
				Text value,
				Mapper<LongWritable, Text, KeyTuple, VectorWritable>.Context context)
				throws IOException, InterruptedException {
			String[] split = value.toString().split("\t");
			v.clear();
			if(split != null && split.length == 2){
				k.setId(split[0].trim());
				k.setTag("1");
				parser.parse(split[1]);
				if(parser.isValid()){
					v = parser.getVector();
					context.write(k, v);
				}
			}
		}
	}
	
	public static class JoinReferenceMatrixMapper extends Mapper<LongWritable, Text, KeyTuple, VectorWritable> {
		private KeyTuple k = new KeyTuple();
		private VectorWritable v = new VectorWritable();
		private VectorParser parser = new VectorParser();
		
		@Override
		protected void map(
				LongWritable key,
				Text value,
				Mapper<LongWritable, Text, KeyTuple, VectorWritable>.Context context)
				throws IOException, InterruptedException {
			String[] split = value.toString().split("\t");
			v.clear();
			if(split != null && split.length == 2){
				k.setId(split[0]);
				k.setTag("0");
				parser.parse(split[1]);
				if(parser.isValid()){
					v = parser.getVector();
					context.write(k, v);
				}
			}
		}
	}
	
	public static class JoinReducer extends Reducer<KeyTuple, VectorWritable, Text, Preference> {
		private Text k = new Text();
		private Preference v = new Preference();
		List<Preference> refMatrix;
		List<Preference> coMatrix;
		
		@Override
		protected void reduce(KeyTuple key, Iterable<VectorWritable> values,
				Reducer<KeyTuple, VectorWritable, Text, Preference>.Context context)
				throws IOException, InterruptedException {
			Iterator<VectorWritable> iterator = values.iterator();
			refMatrix = iterator.next().toList();
			coMatrix = iterator.next().toList();
			for(Preference r : refMatrix){
				k.set(r.getId().toString());
				for(Preference c : coMatrix){
					v.setId(c.getId());
					v.setPref(c.getPref().get() * r.getPref().get());
					context.write(k, v);
				}
			}
		}
	}

	@Override
	public int run(String[] args) throws Exception {
		Configuration conf = new Configuration();
		Path coMatrix = new Path("/FriendRec/step3");
		Path refMatrix = new Path("/FriendRec/step4");
		Path output = new Path("/FriendRec/step5");
		
		Job job = Job.getInstance(conf);
		job.setJarByClass(this.getClass());
		job.setJobName("reduce join");
		
		job.setMapperClass(JoinCoMatrixMapper.class);
		job.setMapperClass(JoinReferenceMatrixMapper.class);
		
		MultipleInputs.addInputPath(job, coMatrix, TextInputFormat.class, JoinCoMatrixMapper.class);
		MultipleInputs.addInputPath(job, refMatrix, TextInputFormat.class, JoinReferenceMatrixMapper.class);
		job.setMapOutputKeyClass(KeyTuple.class);
		job.setMapOutputValueClass(VectorWritable.class);
		
		job.setOutputFormatClass(TextOutputFormat.class);
		job.setOutputKeyClass(Text.class);
		job.setOutputValueClass(Preference.class);
		
		TextOutputFormat.setOutputPath(job, output);
		
		job.setPartitionerClass(KeyTuplePartitioner.class);
		job.setGroupingComparatorClass(KeyTupleGroupComparator.class);
		
		job.setReducerClass(JoinReducer.class);
		
		return job.waitForCompletion(true) ? 0 : 1;
	}

	public static void main(String[] args) throws Exception {
		System.exit(ToolRunner.run(new ReduceJoinTest(), args));
	}

}

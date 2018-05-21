package book_rec.step2;

import java.io.IOException;

import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.LongWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Mapper;

public class CoMatrixMapper extends Mapper<LongWritable, Text, Text, IntWritable>{
	
	private Text k = new Text();
	private IntWritable v = new IntWritable(1);
	
	@Override
	protected void map(LongWritable key, Text value,
			Mapper<LongWritable, Text, Text, IntWritable>.Context context)
			throws IOException, InterruptedException {
		String[] token = value.toString().split("\t");
		String[] splits = token[1].substring(0, token[1].length()-1).split(",");
		for(int i = 0; i < splits.length; i++){
			for(int j = 0; j < splits.length; j++){
				k.set(splits[i].trim() + "\t" + splits[j].trim());
				context.write(k, v);
			}
		}
	}
	
}

package book_rec.step1;

import java.io.IOException;

import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Reducer;

public class BookRecReducer extends Reducer<IntWritable, IntWritable, IntWritable, Text> {

	@Override
	protected void reduce(
			IntWritable key,
			Iterable<IntWritable> values,
			Reducer<IntWritable, IntWritable, IntWritable, Text>.Context context)
			throws IOException, InterruptedException {
		String s = "";
		for(IntWritable v : values){
			s = s + v.toString() + ","; 
		}
		context.write(key, new Text(s));
	}

}

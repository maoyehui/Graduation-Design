package book_rec.step1;

import java.io.IOException;

import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.LongWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Mapper;

public class BookRecMapper extends Mapper<LongWritable, Text, IntWritable, IntWritable> {

	@Override
	protected void map(LongWritable key, Text value,
			Mapper<LongWritable, Text, IntWritable, IntWritable>.Context context)
			throws IOException, InterruptedException {
		
		Parser parser = new Parser();
		IntWritable k = null;
		IntWritable v = null;
		
		if(parser.parse(value.toString())){
			k = new IntWritable(parser.getId().get());
			v = new IntWritable(parser.getBook_id().get());
			context.write(k, v);
		}
		
	}

}

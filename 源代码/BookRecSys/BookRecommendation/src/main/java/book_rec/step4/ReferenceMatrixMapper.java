package book_rec.step4;

import java.io.IOException;

import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.LongWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Mapper;

import book_rec.step1.Parser;

public class ReferenceMatrixMapper extends Mapper<LongWritable, Text, IntWritable, Preference>{
	
	private IntWritable k = new IntWritable();
	private Preference v = new Preference();
	Parser parser = new Parser();

	@Override
	protected void map(LongWritable key, Text value,
			Mapper<LongWritable, Text, IntWritable, Preference>.Context context)
			throws IOException, InterruptedException {
		
		parser.parse(value.toString());
		
		k.set(parser.getBook_id().get());
		v.setId(parser.getId().get());
		v.setPref(parser.getRecommendation_level());
		
		context.write(k,v);
		
	}

}

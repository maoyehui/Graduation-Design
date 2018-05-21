package book_rec.step4;

import java.io.IOException;
import java.util.Set;
import java.util.TreeSet;

import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Reducer;

public class ReferenceMatrixReducer extends Reducer<IntWritable, Preference, Text, Text>{

	private Set<String> l = new TreeSet<String>();
	private Text value = new Text();
	
	@Override
	protected void reduce(IntWritable key, Iterable<Preference> values,
			Reducer<IntWritable, Preference, Text, Text>.Context context)
			throws IOException, InterruptedException {
		l.clear();
		for(Preference v : values){
			l.add(new Preference(v).toString());
		}
		value.set(l.toString());
		context.write(new Text(key.toString()), value);
	}

}

package book_rec.step3;

import java.io.IOException;
import java.util.Set;
import java.util.TreeSet;

import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Reducer;

public class FinalCoMatrixReducer extends Reducer<Text, BookVector, Text, Text>{
	
	private Set<String> set = new TreeSet<String>();

	@Override
	protected void reduce(Text key, Iterable<BookVector> values,
			Reducer<Text, BookVector, Text, Text>.Context context)
			throws IOException, InterruptedException {
		set.clear();
		for(BookVector v : values){
			set.add((new BookVector(v)).toString());
		}
		context.write(key, new Text(set.toString()));
	}

}

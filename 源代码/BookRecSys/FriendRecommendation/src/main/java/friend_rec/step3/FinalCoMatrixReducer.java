package friend_rec.step3;

import java.io.IOException;
import java.util.Set;
import java.util.TreeSet;

import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Reducer;

public class FinalCoMatrixReducer extends Reducer<Text, FriendVector, Text, Text> {

	private Set<String> set = new TreeSet<String>();

	@Override
	protected void reduce(Text key, Iterable<FriendVector> values,
			Reducer<Text, FriendVector, Text, Text>.Context context)
			throws IOException, InterruptedException {
		set.clear();
		for(FriendVector v : values){
			set.add((new FriendVector(v)).toString());
		}
		context.write(key, new Text(set.toString()));
	}
	
}

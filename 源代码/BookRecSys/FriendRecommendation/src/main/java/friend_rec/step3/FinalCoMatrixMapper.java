package friend_rec.step3;

import java.io.IOException;

import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Mapper;

public class FinalCoMatrixMapper extends Mapper<Text, Text, Text, FriendVector> {

	private FriendVector v = new FriendVector();

	@Override
	protected void map(Text key, Text value,
			Mapper<Text, Text, Text, FriendVector>.Context context)
			throws IOException, InterruptedException {
		String[] split = value.toString().split("\t");
		v.setFriend_id(Integer.valueOf(split[0].trim()));
		v.setCount(Double.valueOf(split[1].trim()));
		context.write(key, v);
	}
	
}

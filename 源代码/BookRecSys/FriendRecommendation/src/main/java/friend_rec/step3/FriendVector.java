package friend_rec.step3;

import java.io.DataInput;
import java.io.DataOutput;
import java.io.IOException;

import org.apache.hadoop.io.DoubleWritable;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Writable;

public class FriendVector implements Writable {
	
	private IntWritable friend_id;
	private DoubleWritable count;
	
	public FriendVector() {
		super();
		friend_id = new IntWritable();
		count = new DoubleWritable();
	}
	
	public FriendVector(IntWritable friend_id, DoubleWritable count) {
		this();
		this.friend_id = friend_id;
		this.count = count;
	}
	
	public FriendVector(FriendVector friendVector){
		this();
		setFriend_id(friendVector.getFriend_id());
		setCount(friendVector.getCount());
	}

	public IntWritable getFriend_id() {
		return friend_id;
	}

	public void setFriend_id(IntWritable friend_id) {
		this.friend_id = friend_id;
	}
	
	public void setFriend_id(int friend_id) {
		this.friend_id.set(friend_id);
	}

	public DoubleWritable getCount() {
		return count;
	}

	public void setCount(DoubleWritable count) {
		this.count = count;
	}
	
	public void setCount(double count) {
		this.count.set(count);
	}

	@Override
	public void write(DataOutput out) throws IOException {
		friend_id.write(out);
		count.write(out);
		
	}
	@Override
	public void readFields(DataInput in) throws IOException {
		friend_id.readFields(in);
		count.readFields(in);
	}

	@Override
	public String toString() {
		return friend_id + ":" + count;
	}
	
}

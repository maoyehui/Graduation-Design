package friend_rec.step1;

import org.apache.hadoop.io.DoubleWritable;
import org.apache.hadoop.io.IntWritable;

public class Parser {

	private IntWritable id;
	private IntWritable friend_id;
	private DoubleWritable degree;
	
	public Parser() {
		super();
		id = new IntWritable();
		friend_id = new IntWritable();
		degree = new DoubleWritable();
	}

	public Parser(IntWritable id, IntWritable friend_id, DoubleWritable degree) {
		super();
		this.id = id;
		this.friend_id = friend_id;
		this.degree = degree;
	}
	
	public boolean parse(String line){
		String[] split = line.split("\t");
		if(split.length == 3){
			setId(Integer.valueOf(split[0].trim()));
			setFriend_id(Integer.valueOf(split[1].trim()));
			setDegree(Double.valueOf(split[2].trim().equals("null") ? "50" : split[2].trim()));
			return true;
		}
		return false;
	}

	public IntWritable getId() {
		return id;
	}

	public void setId(IntWritable id) {
		this.id = id;
	}
	
	public void setId(int id) {
		this.id.set(id);
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
	
	public DoubleWritable getDegree() {
		return degree;
	}

	public void setDegree(DoubleWritable degree) {
		this.degree = degree;
	}
	
	public void setDegree(double degree) {
		this.degree.set(degree);
	}

	@Override
	public String toString() {
		return "Parser [id=" + id + ", friend_id=" + friend_id + ", degree="
				+ degree + "]";
	}
	
}

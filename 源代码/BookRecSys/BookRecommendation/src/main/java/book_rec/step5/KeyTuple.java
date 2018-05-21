package book_rec.step5;

import java.io.DataInput;
import java.io.DataOutput;
import java.io.IOException;

import org.apache.hadoop.io.Text;
import org.apache.hadoop.io.WritableComparable;

public class KeyTuple implements WritableComparable<KeyTuple>{

	private Text id;
	private Text tag;
	
	public KeyTuple() {
		super();
		id = new Text();
		tag = new Text();
	}

	public KeyTuple(Text id, Text tag) {
		super();
		setId(id);
		setTag(tag);
	}
	
	public KeyTuple(KeyTuple kt){
		setId(kt.getId());
		setTag(kt.getTag());
	}

	public Text getId() {
		return id;
	}

	public void setId(Text id) {
		this.id.set(id.toString());
	}
	
	public void setId(String id){
		this.id.set(id);
	}

	public Text getTag() {
		return tag;
	}

	public void setTag(Text tag) {
		this.tag.set(tag.toString());
	}
	
	public void setTag(String tag) {
		this.tag.set(tag);
	}

	@Override
	public void write(DataOutput out) throws IOException {
		id.write(out);
		tag.write(out);
	}

	@Override
	public void readFields(DataInput in) throws IOException {
		id.readFields(in);
		tag.readFields(in);
	}

	@Override
	public int compareTo(KeyTuple o) {
		return id.compareTo(o.getId()) != 0 ? id.compareTo(o.getId()) : tag.compareTo(o.getTag());
	}
	
}

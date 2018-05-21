package friend_rec.step4;

import java.io.DataInput;
import java.io.DataOutput;
import java.io.IOException;

import org.apache.hadoop.io.DoubleWritable;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.WritableComparable;

public class Preference implements WritableComparable<Preference> {

	private IntWritable id ;
	private DoubleWritable pref;
	
	public Preference() {
		super();
		id = new IntWritable();
		pref = new DoubleWritable();
	}

	public Preference(IntWritable id, DoubleWritable pref) {
		super();
		setId(id);
		setPref(pref);
	}

	public Preference(int id, double pref) {
		super();
		setId(id);
		setPref(pref);
	}
	
	public Preference(Preference p){
		id = new IntWritable(p.getId().get());
		pref = new DoubleWritable(p.getPref().get());
	}
	
	public IntWritable getId() {
		return id;
	}

	public void setId(IntWritable id) {
		this.id.set(id.get());
	}
	
	public void setId(int id) {
		this.id.set(id);
	}

	public DoubleWritable getPref() {
		return pref;
	}

	public void setPref(DoubleWritable pref) {
		this.pref.set(pref.get());
	}
	
	public void setPref(double pref) {
		this.pref.set(pref);
	}

	@Override
	public String toString() {
		return getId() + ":" + getPref();
	}

	@Override
	public void write(DataOutput out) throws IOException {
		id.write(out);
		pref.write(out);
	}

	@Override
	public void readFields(DataInput in) throws IOException {
		id.readFields(in);
		pref.readFields(in);
	}

	@Override
	public int compareTo(Preference o) {
		return this.id.compareTo(o.id);
	}
	
}

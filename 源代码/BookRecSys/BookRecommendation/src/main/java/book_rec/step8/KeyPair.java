package book_rec.step8;

import java.io.DataInput;
import java.io.DataOutput;
import java.io.IOException;

import org.apache.hadoop.io.DoubleWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.io.WritableComparable;

public class KeyPair implements WritableComparable<KeyPair>{
	
	private Text id;
	private DoubleWritable ref;

	public KeyPair() {
		super();
		id = new Text();
		ref = new DoubleWritable();
	}

	public KeyPair(Text id, DoubleWritable ref) {
		super();
		setId(id);
		setRef(ref);
	}
	
	public KeyPair(KeyPair kp) {
		super();
		setId(kp.getId());
		setRef(kp.getRef());
	}

	public Text getId() {
		return id;
	}

	public void setId(Text id) {
		this.id.set(id.toString());
	}
	
	public void setId(String id) {
		this.id.set(id);
	}

	public DoubleWritable getRef() {
		return ref;
	}

	public void setRef(DoubleWritable ref) {
		this.ref.set(ref.get());
	}
	
	public void setRef(double ref) {
		this.ref.set(ref);
	}

	@Override
	public void write(DataOutput out) throws IOException {
		id.write(out);
		ref.write(out);
	}

	@Override
	public void readFields(DataInput in) throws IOException {
		id.readFields(in);
		ref.readFields(in);
	}

	@Override
	public int compareTo(KeyPair o) {
		return getId().compareTo(o.getId()) != 0 ? getId().compareTo(o.getId()) : getRef().compareTo(o.getRef());
	}

}

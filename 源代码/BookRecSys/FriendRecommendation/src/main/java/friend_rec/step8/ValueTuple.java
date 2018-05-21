package friend_rec.step8;

import java.io.DataInput;
import java.io.DataOutput;
import java.io.IOException;

import org.apache.hadoop.io.DoubleWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.io.WritableComparable;

public class ValueTuple implements WritableComparable<ValueTuple> {

	private Text book_id;
	private DoubleWritable pref;

	public ValueTuple() {
		book_id = new Text();
		pref = new DoubleWritable();
	}

	public ValueTuple(Text book_id, DoubleWritable pref) {
		this();
		setBook_id(book_id);
		setPref(pref);
	}

	public ValueTuple(ValueTuple vt) {
		this();
		setBook_id(vt.getBook_id());
		setPref(vt.getPref());
	}

	public Text getBook_id() {
		return book_id;
	}

	public void setBook_id(Text book_id) {
		this.book_id.set(book_id.toString());
	}

	public void setBook_id(String book_id) {
		this.book_id.set(book_id);
		;
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
	public void write(DataOutput out) throws IOException {
		book_id.write(out);
		pref.write(out);
	}

	@Override
	public void readFields(DataInput in) throws IOException {
		book_id.readFields(in);
		pref.readFields(in);
	}

	@Override
	public int compareTo(ValueTuple o) {
		return pref.compareTo(o.getPref()) != 0 ? pref.compareTo(o.getPref())
				: book_id.compareTo(o.getBook_id());
	}

}

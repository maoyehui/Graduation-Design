package book_rec.step3;

import java.io.DataInput;
import java.io.DataOutput;
import java.io.IOException;

import org.apache.hadoop.io.DoubleWritable;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Writable;

public class BookVector implements Writable {
	
	private IntWritable book_id;
	private DoubleWritable count;
	
	public BookVector() {
		super();
		book_id = new IntWritable();
		count = new DoubleWritable();
	}
	
	public BookVector(IntWritable book_id, DoubleWritable count) {
		this();
		this.book_id = book_id;
		this.count = count;
	}
	
	public BookVector(BookVector bookVector){
		this();
		setBook_id(bookVector.getBook_id());
		setCount(bookVector.getCount());
	}

	public IntWritable getBook_id() {
		return book_id;
	}

	public void setBook_id(IntWritable book_id) {
		this.book_id.set(book_id.get());
	}
	
	public void setBook_id(int book_id) {
		this.book_id.set(book_id);
	}

	public DoubleWritable getCount() {
		return count;
	}

	public void setCount(DoubleWritable count) {
		this.count.set(count.get());
	}
	
	public void setCount(double count) {
		this.count.set(count);
	}

	@Override
	public void write(DataOutput out) throws IOException {
		book_id.write(out);
		count.write(out);
	}

	@Override
	public void readFields(DataInput in) throws IOException {
		book_id.readFields(in);
		count.readFields(in);
	}

	@Override
	public String toString() {
		return book_id + ":" + count;
	}
	
}

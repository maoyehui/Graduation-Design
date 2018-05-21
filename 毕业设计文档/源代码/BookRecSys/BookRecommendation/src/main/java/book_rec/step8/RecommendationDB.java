package book_rec.step8;

import java.io.DataInput;
import java.io.DataOutput;
import java.io.IOException;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.apache.hadoop.io.DoubleWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.io.WritableComparable;
import org.apache.hadoop.mapreduce.lib.db.DBWritable;

public class RecommendationDB implements DBWritable,
		WritableComparable<RecommendationDB> {

	// private Text rec_date;
	private Text id;
	private Text book_id;
	private DoubleWritable preference;

	public RecommendationDB() {
		// rec_date = new Text();
		id = new Text();
		book_id = new Text();
		preference = new DoubleWritable();
	}

	public RecommendationDB(Text id, Text book_id, DoubleWritable preference) {
		this();
		// this.rec_date = rec_date;
		this.id = id;
		this.book_id = book_id;
		this.preference = preference;
	}

	// public Text getRec_date() {
	// return rec_date;
	// }
	//
	// public void setRec_date(Text rec_date) {
	// this.rec_date.set(rec_date.toString());
	// }
	//
	// public void setRec_date(String rec_date) {
	// this.rec_date.set(rec_date);
	// }

	public Text getId() {
		return id;
	}

	public void setId(Text id) {
		this.id.set(id.toString());
	}

	public void setId(String id) {
		this.id.set(id);
	}

	public Text getBook_id() {
		return book_id;
	}

	public void setBook_id(Text book_id) {
		this.book_id.set(book_id.toString());
	}

	public void setBook_id(String book_id) {
		this.book_id.set(book_id);
	}

	public DoubleWritable getPreference() {
		return preference;
	}

	public void setPreference(DoubleWritable preference) {
		this.preference.set(preference.get());
	}

	public void setPreference(double preference) {
		this.preference.set(preference);
	}

	@Override
	public void write(DataOutput out) throws IOException {
		// rec_date.write(out);
		id.write(out);
		book_id.write(out);
		preference.write(out);
	}

	@Override
	public void readFields(DataInput in) throws IOException {
		// rec_date.readFields(in);
		id.readFields(in);
		book_id.readFields(in);
		preference.readFields(in);
	}

	// @Override
	// public int compareTo(RecommendationDB o) {
	// return id.compareTo(o.getId()) != 0 ? id.compareTo(o.getId())
	// : rec_date.compareTo(o.getRec_date()) != 0 ? rec_date
	// .compareTo(o.getRec_date()) : preference.compareTo(o
	// .getPreference()) != 0 ? preference.compareTo(o
	// .getPreference()) : book_id.compareTo(o.getBook_id());
	// }

	@Override
	public int compareTo(RecommendationDB o) {
		return id.compareTo(o.getId()) != 0 ? id.compareTo(o.getId())
				: preference.compareTo(o.getPreference()) != 0 ? preference
						.compareTo(o.getPreference()) : book_id.compareTo(o
						.getBook_id());
	}

	@Override
	public void write(PreparedStatement statement) throws SQLException {
		// statement.setString(1, getRec_date().toString());
		statement.setDate(1, new Date(System.currentTimeMillis()));
		statement.setString(2, getId().toString());
		statement.setString(3, getBook_id().toString());
		statement.setDouble(4, getPreference().get());
	}

	@Override
	public void readFields(ResultSet resultSet) throws SQLException {
		setId(resultSet.getString(1));
		setBook_id(resultSet.getString(2));
		setPreference(resultSet.getDouble(3));
	}

}

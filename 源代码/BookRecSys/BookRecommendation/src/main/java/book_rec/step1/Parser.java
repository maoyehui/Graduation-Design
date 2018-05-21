package book_rec.step1;

import org.apache.hadoop.io.DoubleWritable;
import org.apache.hadoop.io.IntWritable;

public class Parser {

	private IntWritable id;
	private IntWritable book_id;
	private DoubleWritable recommendation_level;

	public Parser() {
		super();
		id = new IntWritable();
		book_id = new IntWritable();
		recommendation_level = new DoubleWritable();
	}

	public Parser(IntWritable id, IntWritable book_id,
			DoubleWritable recommendation_level) {
		super();
		this.id = id;
		this.book_id = book_id;
		this.recommendation_level = recommendation_level;
	}

	public boolean parse(String line) {
		String[] split = line.split("\t");
		if (split.length >= 7) {
			setId(Integer.parseInt(split[0].trim()));
			setBook_id(Integer.parseInt(split[1].trim()));
			setRecommendation_level(Double.parseDouble(split[6].trim().equals("null") ? "3" : split[6].trim()));
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

	public IntWritable getBook_id() {
		return book_id;
	}

	public void setBook_id(IntWritable book_id) {
		this.book_id = book_id;
	}

	public void setBook_id(int book_id) {
		this.book_id.set(book_id);
	}

	public DoubleWritable getRecommendation_level() {
		return recommendation_level;
	}

	public void setRecommendation_level(DoubleWritable recommendation_level) {
		this.recommendation_level = recommendation_level;
	}

	public void setRecommendation_level(double recommendation_level) {
		this.recommendation_level.set(recommendation_level);
	}

//	public static void main(String[] args) {
//		Parser p = new Parser();
//		p.parse("1	35	null	null	null	0	92");
//		System.out.println(new IntWritable(p.getId().get()));
//		System.out.println(p.getBook_id().get());
//	}

}

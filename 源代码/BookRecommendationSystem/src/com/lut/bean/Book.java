package com.lut.bean;

import java.util.Date;

public class Book {
	private int book_id;
	private String title;
	private int writer_id;
	private String isbn;
	private String press;
	private Date publish_date;
	private Date op_date;
	private int if_free;
	private double price;
	private double evaluation_level;
	private String category;
	private int num_of_words;
	private String context;
	private String brief_introduction;
	private String picture;
	private Writer writer;
	
	public Book() {
		super();
	}

	public Book(int book_id, String title, int writer_id, String isbn,
			String press, Date publish_date, Date op_date, int if_free,
			double price, double evaluation_level, String category,
			int num_of_words, String context, String brief_introduction,
			String picture, Writer writer) {
		super();
		this.book_id = book_id;
		this.title = title;
		this.writer_id = writer_id;
		this.isbn = isbn;
		this.press = press;
		this.publish_date = publish_date;
		this.op_date = op_date;
		this.if_free = if_free;
		this.price = price;
		this.evaluation_level = evaluation_level;
		this.category = category;
		this.num_of_words = num_of_words;
		this.context = context;
		this.brief_introduction = brief_introduction;
		this.picture = picture;
		this.writer = writer;
	}

	public Book(String title, int writer_id, String isbn,
			String press, Date publish_date, Date op_date, int if_free,
			double price, double evaluation_level, String category,
			int num_of_words, String context, String brief_introduction,
			String picture, Writer writer) {
		super();
		this.title = title;
		this.writer_id = writer_id;
		this.isbn = isbn;
		this.press = press;
		this.publish_date = publish_date;
		this.op_date = op_date;
		this.if_free = if_free;
		this.price = price;
		this.evaluation_level = evaluation_level;
		this.category = category;
		this.num_of_words = num_of_words;
		this.context = context;
		this.brief_introduction = brief_introduction;
		this.picture = picture;
		this.writer = writer;
	}

	public int getBook_id() {
		return book_id;
	}

	public void setBook_id(int book_id) {
		this.book_id = book_id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public int getWriter_id() {
		return writer_id;
	}

	public void setWriter_id(int writer_id) {
		this.writer_id = writer_id;
	}

	public String getIsbn() {
		return isbn;
	}

	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}

	public String getPress() {
		return press;
	}

	public void setPress(String press) {
		this.press = press;
	}

	public Date getPublish_date() {
		return publish_date;
	}

	public void setPublish_date(Date publish_date) {
		this.publish_date = publish_date;
	}

	public Date getOp_date() {
		return op_date;
	}

	public void setOp_date(Date op_date) {
		this.op_date = op_date;
	}

	public int getIf_free() {
		return if_free;
	}

	public void setIf_free(int if_free) {
		this.if_free = if_free;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public double getEvaluation_level() {
		return evaluation_level;
	}

	public void setEvaluation_level(double evaluation_level) {
		this.evaluation_level = evaluation_level;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public int getNum_of_words() {
		return num_of_words;
	}

	public void setNum_of_words(int num_of_words) {
		this.num_of_words = num_of_words;
	}

	public String getContext() {
		return context;
	}

	public void setContext(String context) {
		this.context = context;
	}

	public String getBrief_introduction() {
		return brief_introduction;
	}

	public void setBrief_introduction(String brief_introduction) {
		this.brief_introduction = brief_introduction;
	}

	public String getPicture() {
		return picture;
	}

	public void setPicture(String picture) {
		this.picture = picture;
	}

	public Writer getWriter() {
		return writer;
	}

	public void setWriter(Writer writer) {
		this.writer = writer;
	}

	@Override
	public String toString() {
		return "Book [book_id=" + book_id + ", title=" + title + ", writer_id="
				+ writer_id + ", isbn=" + isbn + ", press=" + press
				+ ", publish_date=" + publish_date + ", op_date=" + op_date
				+ ", if_free=" + if_free + ", price=" + price
				+ ", evaluation_level=" + evaluation_level + ", category="
				+ category + ", num_of_words=" + num_of_words + ", context="
				+ context + ", brief_introduction=" + brief_introduction
				+ ", picture=" + picture + ", writer=" + writer + "]";
	}
	
}

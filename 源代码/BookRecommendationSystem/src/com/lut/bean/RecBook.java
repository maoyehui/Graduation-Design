package com.lut.bean;

import java.util.Date;

public class RecBook {
	private Date rec_day;
	private int id;
	private int book_id;
	private int rec_degree;
	private Book book;
	
	public RecBook() {
		super();
	}

	public RecBook(Date rec_day, int id, int book_id, int rec_degree, Book book) {
		super();
		this.rec_day = rec_day;
		this.id = id;
		this.book_id = book_id;
		this.rec_degree = rec_degree;
		this.book = book;
	}

	public Date getRec_day() {
		return rec_day;
	}

	public void setRec_day(Date rec_day) {
		this.rec_day = rec_day;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getBook_id() {
		return book_id;
	}

	public void setBook_id(int book_id) {
		this.book_id = book_id;
	}

	public int getRec_degree() {
		return rec_degree;
	}

	public void setRec_degree(int rec_degree) {
		this.rec_degree = rec_degree;
	}

	public Book getBook() {
		return book;
	}

	public void setBook(Book book) {
		this.book = book;
	}

	@Override
	public String toString() {
		return "RecBook [rec_day=" + rec_day + ", id=" + id + ", book_id="
				+ book_id + ", rec_degree=" + rec_degree + ", book=" + book
				+ "]";
	}

}

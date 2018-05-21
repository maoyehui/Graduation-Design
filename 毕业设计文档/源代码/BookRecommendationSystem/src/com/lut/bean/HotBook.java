package com.lut.bean;

import java.util.Date;

public class HotBook {
	private Date rec_day;
	private int book_id;
	private double hot_degree;
	private Book book;
	
	public HotBook() {
		super();
	}

	public HotBook(Date rec_day, int book_id, double hot_degree, Book book) {
		super();
		this.rec_day = rec_day;
		this.book_id = book_id;
		this.hot_degree = hot_degree;
		this.book = book;
	}

	public Date getRec_day() {
		return rec_day;
	}

	public void setRec_day(Date rec_day) {
		this.rec_day = rec_day;
	}

	public int getBook_id() {
		return book_id;
	}

	public void setBook_id(int book_id) {
		this.book_id = book_id;
	}

	public double getHot_degree() {
		return hot_degree;
	}

	public void setHot_degree(double hot_degree) {
		this.hot_degree = hot_degree;
	}

	public Book getBook() {
		return book;
	}

	public void setBook(Book book) {
		this.book = book;
	}

	@Override
	public String toString() {
		return "HotBook [rec_day=" + rec_day + ", book_id=" + book_id
				+ ", hot_degree=" + hot_degree + ", book=" + book + "]";
	}
	
}

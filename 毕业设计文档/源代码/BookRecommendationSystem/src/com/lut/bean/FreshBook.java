package com.lut.bean;

import java.util.Date;

public class FreshBook {
	private Date rec_day;
	private int book_id;
	private int writer_id;
	private double fresh_degree;
	private Book book;
	
	public FreshBook() {
		super();
	}

	public FreshBook(Date rec_day, int book_id, int writer_id,
			double fresh_degree, Book book) {
		super();
		this.rec_day = rec_day;
		this.book_id = book_id;
		this.writer_id = writer_id;
		this.fresh_degree = fresh_degree;
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

	public int getWriter_id() {
		return writer_id;
	}

	public void setWriter_id(int writer_id) {
		this.writer_id = writer_id;
	}

	public double getFresh_degree() {
		return fresh_degree;
	}

	public void setFresh_degree(double fresh_degree) {
		this.fresh_degree = fresh_degree;
	}

	public Book getBook() {
		return book;
	}

	public void setBook(Book book) {
		this.book = book;
	}

	@Override
	public String toString() {
		return "FreshBook [rec_day=" + rec_day + ", book_id=" + book_id
				+ ", writer_id=" + writer_id + ", fresh_degree=" + fresh_degree
				+ ", book=" + book + "]";
	}
	
}

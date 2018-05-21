package com.lut.bean;

import java.util.Date;

public class HotWriter {
	private Date rec_day;
	private int write_id;
	private int hot_book_id;
	private double hot_degree;
	private Writer writer;
	
	public HotWriter() {
		super();
	}

	public HotWriter(Date rec_day, int write_id, int hot_book_id,
			double hot_degree, Writer writer) {
		super();
		this.rec_day = rec_day;
		this.write_id = write_id;
		this.hot_book_id = hot_book_id;
		this.hot_degree = hot_degree;
		this.writer = writer;
	}

	public Date getRec_day() {
		return rec_day;
	}

	public void setRec_day(Date rec_day) {
		this.rec_day = rec_day;
	}

	public int getWrite_id() {
		return write_id;
	}

	public void setWrite_id(int write_id) {
		this.write_id = write_id;
	}

	public int getHot_book_id() {
		return hot_book_id;
	}

	public void setHot_book_id(int hot_book_id) {
		this.hot_book_id = hot_book_id;
	}

	public double getHot_degree() {
		return hot_degree;
	}

	public void setHot_degree(double hot_degree) {
		this.hot_degree = hot_degree;
	}

	public Writer getWriter() {
		return writer;
	}

	public void setWriter(Writer writer) {
		this.writer = writer;
	}

	@Override
	public String toString() {
		return "HotWriter [rec_day=" + rec_day + ", write_id=" + write_id
				+ ", hot_book_id=" + hot_book_id + ", hot_degree=" + hot_degree
				+ ", writer=" + writer + "]";
	}
	
}

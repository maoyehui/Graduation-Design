package com.lut.bean;

public class UserCollectBook {
	private int id;
	private int book_id;
	
	public UserCollectBook() {
		super();
	}

	public UserCollectBook(int id, int book_id) {
		super();
		this.id = id;
		this.book_id = book_id;
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

	@Override
	public String toString() {
		return "UserCollectBook [id=" + id + ", book_id=" + book_id + "]";
	}
	
}

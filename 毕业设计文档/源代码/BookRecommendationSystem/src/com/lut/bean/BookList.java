package com.lut.bean;

import java.util.List;

public class BookList {
	private int booklist_id;
	private String booklist_name;
	private String booklist_synopsis;
	private int creater_id;
	private String name;
	private String picture;
	private List<Book> book;
	
	public BookList() {
		super();
	}

	public BookList(int booklist_id, String booklist_name,
			String booklist_synopsis, int creater_id, String name,
			String picture, List<Book> book) {
		super();
		this.booklist_id = booklist_id;
		this.booklist_name = booklist_name;
		this.booklist_synopsis = booklist_synopsis;
		this.creater_id = creater_id;
		this.name = name;
		this.picture = picture;
		this.book = book;
	}

	public int getBooklist_id() {
		return booklist_id;
	}

	public void setBooklist_id(int booklist_id) {
		this.booklist_id = booklist_id;
	}

	public String getBooklist_name() {
		return booklist_name;
	}

	public void setBooklist_name(String booklist_name) {
		this.booklist_name = booklist_name;
	}

	public String getBooklist_synopsis() {
		return booklist_synopsis;
	}

	public void setBooklist_synopsis(String booklist_synopsis) {
		this.booklist_synopsis = booklist_synopsis;
	}

	public int getCreater_id() {
		return creater_id;
	}

	public void setCreater_id(int creater_id) {
		this.creater_id = creater_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPicture() {
		return picture;
	}

	public void setPicture(String picture) {
		this.picture = picture;
	}

	public List<Book> getBook() {
		return book;
	}

	public void setBook(List<Book> book) {
		this.book = book;
	}

	@Override
	public String toString() {
		return "BookList [booklist_id=" + booklist_id + ", booklist_name="
				+ booklist_name + ", booklist_synopsis=" + booklist_synopsis
				+ ", creater_id=" + creater_id + ", name=" + name
				+ ", picture=" + picture + ", book=" + book + "]";
	}

}

package com.lut.bean;

import java.io.Serializable;
import java.util.Date;

public class Writer implements Serializable{
	private static final long serialVersionUID = 1L;
	private int writer_id;
	private String writer_name;
	private String picture;
	private Date birthday;
	private String nation;
	private String brief_introduction;
	private double hot_degree;
	private int if_contract;
	private String identity_lable;
	
	public Writer() {
		super();
	}

	public Writer(int writer_id, String writer_name, String picture,
			Date birthday, String nation, String brief_introduction,
			double hot_degree, int if_contract, String identity_lable) {
		super();
		this.writer_id = writer_id;
		this.writer_name = writer_name;
		this.picture = picture;
		this.birthday = birthday;
		this.nation = nation;
		this.brief_introduction = brief_introduction;
		this.hot_degree = hot_degree;
		this.if_contract = if_contract;
		this.identity_lable = identity_lable;
	}
	
	public Writer(String writer_name, String picture,
			Date birthday, String nation, String brief_introduction,
			double hot_degree, int if_contract, String identity_lable) {
		super();
		this.writer_name = writer_name;
		this.picture = picture;
		this.birthday = birthday;
		this.nation = nation;
		this.brief_introduction = brief_introduction;
		this.hot_degree = hot_degree;
		this.if_contract = if_contract;
		this.identity_lable = identity_lable;
	}

	public int getWriter_id() {
		return writer_id;
	}

	public void setWriter_id(int writer_id) {
		this.writer_id = writer_id;
	}

	public String getWriter_name() {
		return writer_name;
	}

	public void setWriter_name(String writer_name) {
		this.writer_name = writer_name;
	}

	public String getPicture() {
		return picture;
	}

	public void setPicture(String picture) {
		this.picture = picture;
	}

	public Date getBirthday() {
		return birthday;
	}

	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}

	public String getNation() {
		return nation;
	}

	public void setNation(String nation) {
		this.nation = nation;
	}

	public String getBrief_introduction() {
		return brief_introduction;
	}

	public void setBrief_introduction(String brief_introduction) {
		this.brief_introduction = brief_introduction;
	}

	public double getHot_degree() {
		return hot_degree;
	}

	public void setHot_degree(double hot_degree) {
		this.hot_degree = hot_degree;
	}

	public int getIf_contract() {
		return if_contract;
	}

	public void setIf_contract(int if_contract) {
		this.if_contract = if_contract;
	}

	public String getIdentity_lable() {
		return identity_lable;
	}

	public void setIdentity_lable(String identity_lable) {
		this.identity_lable = identity_lable;
	}

	@Override
	public String toString() {
		return "Writer [writer_id=" + writer_id + ", writer_name="
				+ writer_name + ", picture=" + picture + ", birthday="
				+ birthday + ", nation=" + nation + ", brief_introduction="
				+ brief_introduction + ", hot_degree=" + hot_degree
				+ ", if_contract=" + if_contract + ", identity_lable="
				+ identity_lable + "]";
	}
	
}

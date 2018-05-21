package com.lut.bean;

import java.util.Date;

public class RecFriend {
	private Date rec_day;
	private int id;
	private int friend_id;
	private int rec_degree;
	private UserInfo userInfo;
	
	public RecFriend() {
		super();
	}

	public RecFriend(Date rec_day, int id, int friend_id, int rec_degree,
			UserInfo userInfo) {
		super();
		this.rec_day = rec_day;
		this.id = id;
		this.friend_id = friend_id;
		this.rec_degree = rec_degree;
		this.userInfo = userInfo;
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

	public int getFriend_id() {
		return friend_id;
	}

	public void setFriend_id(int friend_id) {
		this.friend_id = friend_id;
	}

	public int getRec_degree() {
		return rec_degree;
	}

	public void setRec_degree(int rec_degree) {
		this.rec_degree = rec_degree;
	}

	public UserInfo getUserInfo() {
		return userInfo;
	}

	public void setUserInfo(UserInfo userInfo) {
		this.userInfo = userInfo;
	}

	@Override
	public String toString() {
		return "RecFriend [rec_day=" + rec_day + ", id=" + id + ", friend_id="
				+ friend_id + ", rec_degree=" + rec_degree + ", userInfo="
				+ userInfo + "]";
	}
	
}

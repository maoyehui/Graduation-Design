package com.lut.bean;

public class UserAttention {
	private int id;
	private int friend_id;
	
	public UserAttention() {
		super();
	}

	public UserAttention(int id, int friend_id) {
		super();
		this.id = id;
		this.friend_id = friend_id;
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

	@Override
	public String toString() {
		return "UserAttention [id=" + id + ", friend_id=" + friend_id + "]";
	}
	
}

package com.lut.bean;

public class FollowFans {
	private int id;
	private int friend_id;
	private String friend_name;
	private String friend_picture;
	private int friend_reaction;
	private int friend_follow;
	private int friend_fans;
	private int tag;
	
	public FollowFans() {
		super();
	}

	public FollowFans(int id, int friend_id, String friend_name,
			String friend_picture, int friend_reaction, int friend_follow,
			int friend_fans, int tag) {
		super();
		this.id = id;
		this.friend_id = friend_id;
		this.friend_name = friend_name;
		this.friend_picture = friend_picture;
		this.friend_reaction = friend_reaction;
		this.friend_follow = friend_follow;
		this.friend_fans = friend_fans;
		this.tag = tag;
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

	public String getFriend_name() {
		return friend_name;
	}

	public void setFriend_name(String friend_name) {
		this.friend_name = friend_name;
	}

	public String getFriend_picture() {
		return friend_picture;
	}

	public void setFriend_picture(String friend_picture) {
		this.friend_picture = friend_picture;
	}

	public int getFriend_reaction() {
		return friend_reaction;
	}

	public void setFriend_reaction(int friend_reaction) {
		this.friend_reaction = friend_reaction;
	}

	public int getFriend_follow() {
		return friend_follow;
	}

	public void setFriend_follow(int friend_follow) {
		this.friend_follow = friend_follow;
	}

	public int getFriend_fans() {
		return friend_fans;
	}

	public void setFriend_fans(int friend_fans) {
		this.friend_fans = friend_fans;
	}

	public int getTag() {
		return tag;
	}

	public void setTag(int tag) {
		this.tag = tag;
	}

	@Override
	public String toString() {
		return "FollowFans [id=" + id + ", friend_id=" + friend_id
				+ ", friend_name=" + friend_name + ", friend_picture="
				+ friend_picture + ", friend_reaction=" + friend_reaction
				+ ", friend_follow=" + friend_follow + ", friend_fans="
				+ friend_fans + ", tag=" + tag + "]";
	}

}

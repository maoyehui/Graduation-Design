package com.lut.bean;

import java.util.List;

public class Friend {
	private UserInfo userInfo;
	private List<UserInfo> friend;
	private double degree;
	
	public Friend() {
		super();
	}

	public Friend(UserInfo userInfo, List<UserInfo> friend, double degree) {
		super();
		this.userInfo = userInfo;
		this.friend = friend;
		this.degree = degree;
	}

	public UserInfo getUserInfo() {
		return userInfo;
	}

	public void setUserInfo(UserInfo userInfo) {
		this.userInfo = userInfo;
	}

	public List<UserInfo> getFriend() {
		return friend;
	}

	public void setFriend(List<UserInfo> friend) {
		this.friend = friend;
	}

	public double getDegree() {
		return degree;
	}

	public void setDegree(double degree) {
		this.degree = degree;
	}

	@Override
	public String toString() {
		return "Friend [userInfo=" + userInfo + ", friend=" + friend
				+ ", degree=" + degree + "]";
	}
	
}

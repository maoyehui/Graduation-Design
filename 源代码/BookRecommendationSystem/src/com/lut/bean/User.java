package com.lut.bean;

import java.sql.Timestamp;

public class User {
	private int id;
	private String account;
	private String password;
	private String power;
	private Timestamp last_login_time;
	
	public User() {
		super();
	}

	public User(int id, String account, String password, String power,
			Timestamp last_login_time) {
		super();
		this.id = id;
		this.account = account;
		this.password = password;
		this.power = power;
		this.last_login_time = last_login_time;
	}
	
	public User(String account, String password, String power,
			Timestamp last_login_time) {
		super();
		this.account = account;
		this.password = password;
		this.power = power;
		this.last_login_time = last_login_time;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getAccount() {
		return account;
	}

	public void setAccount(String account) {
		this.account = account;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPower() {
		return power;
	}

	public void setPower(String power) {
		this.power = power;
	}

	public Timestamp getLast_login_time() {
		return last_login_time;
	}

	public void setLast_login_time(Timestamp last_login_time) {
		this.last_login_time = last_login_time;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", account=" + account + ", password="
				+ password + ", power=" + power + ", last_login_time="
				+ last_login_time + "]";
	}
	
}

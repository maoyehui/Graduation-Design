package com.lut.bean;

public class UserInfo {
	private int id;
	private String name;
	private String signature;
	private String gender;
	private String career;
	private String picture;
	private String birthday;
	private String province;
	private String city;
	private String cellphone;
	private String wechat;
	private String qq;
	private String level;
	private int if_vip;
	private String vip_level;
	private double balance;
	
	public UserInfo() {
		super();
	}

	public UserInfo(int id, String name, String signature, String gender,
			String career, String picture, String birthday, String province,
			String city, String cellphone, String wechat, String qq,
			String level, int if_vip, String vip_level, double balance) {
		super();
		this.id = id;
		this.name = name;
		this.signature = signature;
		this.gender = gender;
		this.career = career;
		this.picture = picture;
		this.birthday = birthday;
		this.province = province;
		this.city = city;
		this.cellphone = cellphone;
		this.wechat = wechat;
		this.qq = qq;
		this.level = level;
		this.if_vip = if_vip;
		this.vip_level = vip_level;
		this.balance = balance;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSignature() {
		return signature;
	}

	public void setSignature(String signature) {
		this.signature = signature;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getCareer() {
		return career;
	}

	public void setCareer(String career) {
		this.career = career;
	}

	public String getPicture() {
		return picture;
	}

	public void setPicture(String picture) {
		this.picture = picture;
	}

	public String getBirthday() {
		return birthday;
	}

	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}

	public String getProvince() {
		return province;
	}

	public void setProvince(String province) {
		this.province = province;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCellphone() {
		return cellphone;
	}

	public void setCellphone(String cellphone) {
		this.cellphone = cellphone;
	}

	public String getWechat() {
		return wechat;
	}

	public void setWechat(String wechat) {
		this.wechat = wechat;
	}

	public String getQq() {
		return qq;
	}

	public void setQq(String qq) {
		this.qq = qq;
	}

	public String getLevel() {
		return level;
	}

	public void setLevel(String level) {
		this.level = level;
	}

	public int getIf_vip() {
		return if_vip;
	}

	public void setIf_vip(int if_vip) {
		this.if_vip = if_vip;
	}

	public String getVip_level() {
		return vip_level;
	}

	public void setVip_level(String vip_level) {
		this.vip_level = vip_level;
	}

	public double getBalance() {
		return balance;
	}

	public void setBalance(double balance) {
		this.balance = balance;
	}

	@Override
	public String toString() {
		return "UserInfo [id=" + id + ", name=" + name + ", signature="
				+ signature + ", gender=" + gender + ", career=" + career
				+ ", picture=" + picture + ", birthday=" + birthday
				+ ", province=" + province + ", city=" + city + ", cellphone="
				+ cellphone + ", wechat=" + wechat + ", qq=" + qq + ", level="
				+ level + ", if_vip=" + if_vip + ", vip_level=" + vip_level
				+ ", balance=" + balance + "]";
	}

}

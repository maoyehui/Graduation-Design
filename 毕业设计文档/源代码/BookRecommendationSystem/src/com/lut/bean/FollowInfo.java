package com.lut.bean;

public class FollowInfo {
	private int id;
	private int friend_id;
	private String name;
	private String gender;
	private String career;
	private String city;
	
	public FollowInfo() {
		super();
	}

	public FollowInfo(int id, int friend_id, String name, String gender,
			String career, String city) {
		super();
		this.id = id;
		this.friend_id = friend_id;
		this.name = name;
		this.gender = gender;
		this.career = career;
		this.city = city;
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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	@Override
	public String toString() {
		return "FollowInfo [id=" + id + ", friend_id=" + friend_id + ", name="
				+ name + ", gender=" + gender + ", career=" + career
				+ ", city=" + city + "]";
	}

}

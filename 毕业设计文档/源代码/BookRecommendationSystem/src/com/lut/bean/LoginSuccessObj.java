package com.lut.bean;

import java.util.List;

public class LoginSuccessObj {
	private List<RecBook> recBook;
	private UserInfo userInfo;
	private Integer reactionNumById;
	private Integer attentionNumById;
	private Integer beConcernedNumById;
	
	public LoginSuccessObj() {
		super();
	}

	public LoginSuccessObj(List<RecBook> recBook, UserInfo userInfo,
			Integer reactionNumById, Integer attentionNumById,
			Integer beConcernedNumById) {
		super();
		this.recBook = recBook;
		this.userInfo = userInfo;
		this.reactionNumById = reactionNumById;
		this.attentionNumById = attentionNumById;
		this.beConcernedNumById = beConcernedNumById;
	}

	public List<RecBook> getRecBook() {
		return recBook;
	}

	public void setRecBook(List<RecBook> recBook) {
		this.recBook = recBook;
	}

	public UserInfo getUserInfo() {
		return userInfo;
	}

	public void setUserInfo(UserInfo userInfo) {
		this.userInfo = userInfo;
	}

	public Integer getReactionNumById() {
		return reactionNumById;
	}

	public void setReactionNumById(Integer reactionNumById) {
		this.reactionNumById = reactionNumById;
	}

	public Integer getAttentionNumById() {
		return attentionNumById;
	}

	public void setAttentionNumById(Integer attentionNumById) {
		this.attentionNumById = attentionNumById;
	}

	public Integer getBeConcernedNumById() {
		return beConcernedNumById;
	}

	public void setBeConcernedNumById(Integer beConcernedNumById) {
		this.beConcernedNumById = beConcernedNumById;
	}

	@Override
	public String toString() {
		return "LoginSuccessObj [recBook=" + recBook + ", userInfo=" + userInfo
				+ ", reactionNumById=" + reactionNumById
				+ ", attentionNumById=" + attentionNumById
				+ ", beConcernedNumById=" + beConcernedNumById + "]";
	}

}

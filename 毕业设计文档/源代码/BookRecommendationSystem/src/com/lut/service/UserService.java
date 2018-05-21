package com.lut.service;

import java.util.List;

import com.lut.bean.FollowFans;
import com.lut.bean.FollowInfo;
import com.lut.bean.RecFriend;
import com.lut.bean.User;
import com.lut.bean.UserAttention;
import com.lut.bean.UserCollectBook;
import com.lut.bean.UserInfo;

public interface UserService {
	public User selectUserByAccount(User user);
	
	public UserInfo selectUserInfoById(int id);
	
	public Integer selectAttentionNumById(int id);
	
	public Integer selectBeConcernedNumById(int id);
	
	public Integer selectReactionNumById(int id);
	
	public int insertUserAccount(User user);
	
	public int insertUserInfo(UserInfo userInfo);
	
	public int insertUserExt(UserInfo userInfo);
	
	public int insertCollectionBookById(UserCollectBook userCollectBook);
	
	public int deleteCollectionBookById(UserCollectBook userCollectBook);
	
	public List<FollowFans> selectFollowee(int id);
	
	public List<FollowFans> selectFans(int id);
	
	public int insertAttentionById(UserAttention userAttention);
	
	public int deleteAttentionById(UserAttention userAttention);
	
	public User AccountIfExists(String account);
	
	public List<FollowInfo> selectFollowInfo(int id);
	
	public List<RecFriend> selectRecFriend(int id);
}

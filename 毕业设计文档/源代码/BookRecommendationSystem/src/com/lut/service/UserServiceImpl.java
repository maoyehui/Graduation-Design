package com.lut.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lut.bean.FollowFans;
import com.lut.bean.FollowInfo;
import com.lut.bean.RecFriend;
import com.lut.bean.User;
import com.lut.bean.UserAttention;
import com.lut.bean.UserCollectBook;
import com.lut.bean.UserInfo;
import com.lut.dao.UserDao;

@Service("UserService")
public class UserServiceImpl implements UserService{
	@Autowired
	private UserDao userDao;
	
	@Override
	public User selectUserByAccount(User user) {
		User userByAccount = userDao.selectUserByAccount(user);
		return userByAccount;
	}

	@Override
	public UserInfo selectUserInfoById(int id) {
		UserInfo userInfoById = userDao.selectUserInfoById(id);
		return userInfoById;
	}

	@Override
	public Integer selectAttentionNumById(int id) {
		Integer attentionNumById = userDao.selectAttentionNumById(id);
		return attentionNumById;
	}

	@Override
	public Integer selectBeConcernedNumById(int id) {
		Integer beConcernedNumById = userDao.selectBeConcernedNumById(id);
		return beConcernedNumById;
	}

	@Override
	public Integer selectReactionNumById(int id) {
		Integer reactionNumById = userDao.selectReactionNumById(id);
		return reactionNumById;
	}

	@Override
	public int insertUserAccount(User user) {
		int result = userDao.insertUserAccount(user);
		return result;
	}

	@Override
	public int insertUserInfo(UserInfo userInfo) {
		int result = userDao.insertUserInfo(userInfo);
		return result;
	}

	@Override
	public int insertUserExt(UserInfo userInfo) {
		int result = userDao.insertUserExt(userInfo);
		return result;
	}

	@Override
	public int insertCollectionBookById(UserCollectBook userCollectBook) {
		int result = userDao.insertCollectionBookById(userCollectBook);
		return result;
	}

	@Override
	public int deleteCollectionBookById(UserCollectBook userCollectBook) {
		int result = userDao.deleteCollectionBookById(userCollectBook);
		return result;
	}

	@Override
	public List<FollowFans> selectFollowee(int id) {
		List<FollowFans> followee = userDao.selectFollowee(id);
		return followee;
	}

	@Override
	public List<FollowFans> selectFans(int id) {
		List<FollowFans> fans = userDao.selectFans(id);
		return fans;
	}

	@Override
	public int insertAttentionById(UserAttention userAttention) {
		int attentionById = 0;
		if(userAttention.getId() != 0 && userAttention.getFriend_id() != 0){
			attentionById = userDao.insertAttentionById(userAttention);
		}
		return attentionById;
	}

	@Override
	public int deleteAttentionById(UserAttention userAttention) {
		int attentionById = 0;
		if(userAttention.getId() != 0 && userAttention.getFriend_id() != 0){
			attentionById = userDao.deleteAttentionById(userAttention);
		}
		return attentionById;
	}

	@Override
	public User AccountIfExists(String account) {
		User accountIfExists = userDao.AccountIfExists(account);
		return accountIfExists;
	}

	@Override
	public List<FollowInfo> selectFollowInfo(int id) {
		List<FollowInfo> followInfo = userDao.selectFollowInfo(id);
		return followInfo;
	}

	@Override
	public List<RecFriend> selectRecFriend(int id) {
		List<RecFriend> recFriend = userDao.selectRecFriend(id);
		return recFriend;
	}

}

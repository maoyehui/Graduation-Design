package com.lut.web.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.google.gson.Gson;
import com.lut.bean.Book;
import com.lut.bean.BookList;
import com.lut.bean.FollowFans;
import com.lut.bean.FollowInfo;
import com.lut.bean.RecFriend;
import com.lut.bean.UserAttention;
import com.lut.bean.UserCollectBook;
import com.lut.bean.UserInfo;
import com.lut.service.BookService;
import com.lut.service.UserService;

@Controller
@RequestMapping("/user")
public class UserController {
	@Autowired
	private UserService userService;
	@Autowired
	private BookService bookService;
	
	@RequestMapping(value="/my")
	public String my(){
		return "my";
	}
	
	@RequestMapping(value="/friend")
	public String friend(){
		return "friend";
	}
	
	@RequestMapping(value="/home")
	public String home(){
		return "home";
	}
	
	@RequestMapping(value="/follow")
	public String follow(){
		return "follow";
	}
	
	@RequestMapping(value="/fans")
	public String fans(){
		return "fans";
	}
	
	//用户收藏书籍列表
	@RequestMapping("/collectionBook")
	public void selectCollectionBookById(HttpServletRequest request,HttpServletResponse response){
		int id = (int) request.getSession().getAttribute("userId");
		List<Book> collectionBookById = bookService.selectCollectionBookById(id);
//		for(Book b:collectionBookById){
//			System.out.println(b);
//		}
		try {
			responseJson(response, collectionBookById);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	//用户收藏书单列表
	@RequestMapping("/bookListById")
	public void selectBookListById(HttpServletRequest request,HttpServletResponse response){
		try {
			int id = (int) request.getSession().getAttribute("userId");
			List<BookList> bookListById = bookService.selectBookListById(id);
			for(BookList b : bookListById){
				System.out.println(b);
			}
			responseJson(response, bookListById);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	//用户创建书单列表
	@RequestMapping("/createListById")
	public void selectCreateListById(HttpServletRequest request,HttpServletResponse response){
		try {
			int id = (int) request.getSession().getAttribute("userId");
			List<BookList> createListById = bookService.selectCreateListById(id);
			for(BookList c : createListById){
				System.out.println(c);
			}
			responseJson(response, createListById);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	//我的书架个人信息
	@RequestMapping("/myInfoById")
	public void selectMyInfoById(HttpServletRequest request,HttpServletResponse response){
		try {
			int id = (int) request.getSession().getAttribute("userId");
			UserInfo userInfoById = userService.selectUserInfoById(id);
			
			responseJson(response, userInfoById);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	//用户个人主页
	@RequestMapping("/userHome")
	public void userHome(HttpServletRequest request,HttpServletResponse response){
		Object obj = request.getSession().getAttribute("userId");
		
		if(obj != null){
				int id = (int) obj;
				UserInfo userInfoById = userService.selectUserInfoById(id);
				Integer attentionNumById = userService.selectAttentionNumById(id);
				Integer beConcernedNumById = userService.selectBeConcernedNumById(id);
				Integer reactionNumById = userService.selectReactionNumById(id);
				List<Object> list = new ArrayList<Object>();
				list.add(userInfoById);
				list.add(attentionNumById);
				list.add(beConcernedNumById);
				list.add(reactionNumById);
				try {
					responseJson(response,list);
				} catch (Exception e) {
					e.printStackTrace();
				}
			
		}else{
			try {
				responseJson(response,0);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}
	
	//用户添加收藏书籍
	@RequestMapping("/insertCollectionBookById")
	public void insertCollectionBookById(HttpServletRequest request,HttpServletResponse response){
		Object obj = request.getSession().getAttribute("userId");
		String book = request.getParameter("book_id");
		int result = 0;
		try {
			if(obj != null && book != null){
				int id = (int) obj;
				int book_id = Integer.valueOf(book);
				UserCollectBook userCollectBook = new UserCollectBook();
				userCollectBook.setId(id);
				userCollectBook.setBook_id(book_id);
				result = userService.insertCollectionBookById(userCollectBook);
			}
			responseJson(response,result);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	//用户删除收藏书籍
	@RequestMapping("/deleteCollectionBookById")
	public void deleteCollectionBookById(HttpServletRequest request,HttpServletResponse response){
		Object obj = request.getSession().getAttribute("userId");
		String book = request.getParameter("book_id");
		if(obj != null && book != null){
			int id = (int) obj;
			int book_id = Integer.parseInt(book.toString().trim());
			UserCollectBook userCollectBook = new UserCollectBook();
			userCollectBook.setId(id);
			userCollectBook.setBook_id(book_id);
			int result = userService.deleteCollectionBookById(userCollectBook);
			try {
				responseJson(response, result);
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
	
	//查找关注人信息
	@RequestMapping("/selectFollowee")
	public void selectFollowee(HttpServletRequest request,HttpServletResponse response){
		Object obj = request.getSession().getAttribute("userId");
		if(obj != null){
			int id = (int) obj;
			List<FollowFans> followee = userService.selectFollowee(id);
			try {
				responseJson(response, followee);
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
	
	//查找粉丝信息
	@RequestMapping("/selectFans")
	public void selectFans(HttpServletRequest request,HttpServletResponse response){
		Object obj = request.getSession().getAttribute("userId");
		if(obj != null){
			int id = (int) obj;
			List<FollowFans> fans = userService.selectFans(id);
			try {
				responseJson(response, fans);
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
	
	//添加关注人
	@RequestMapping("/insertAttentionById")
	public void insertAttentionById(HttpServletRequest request, HttpServletResponse response){
		Object obj = request.getSession().getAttribute("userId");
		String friend = request.getParameter("friend_id");
		int result = 0;
		UserAttention userAttention = new UserAttention();
		if(obj != null && friend != null){
			userAttention.setId((int) obj);
			userAttention.setFriend_id(Integer.valueOf(friend));
			result = userService.insertAttentionById(userAttention);
			try {
				responseJson(response, result);
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
	
	//取消关注
	@RequestMapping("/deleteAttentionById")
	public void deleteAttentionById(HttpServletRequest request, HttpServletResponse response){
		Object obj = request.getSession().getAttribute("userId");
		String friend = request.getParameter("friend_id");
		System.out.println(obj != null && friend != null);
		int result = 0;
		UserAttention userAttention = new UserAttention();
		if(obj != null && friend != null){
			userAttention.setId((int) obj);
			userAttention.setFriend_id(Integer.valueOf(friend));
			System.out.println(userAttention);
			result = userService.deleteAttentionById(userAttention);
			System.out.println(result);
			try {
				responseJson(response, result);
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
	
	//关注列表
	@RequestMapping("/followInfo")
	public void selectFollowInfo(HttpServletRequest request, HttpServletResponse response){
		Object obj = request.getSession().getAttribute("userId");
		if(obj != null){
			int id = (int) obj;
			List<FollowInfo> followInfo = userService.selectFollowInfo(id);
			System.out.println(followInfo);
			try {
				responseJson(response, followInfo);
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
	
	//个性化好友推荐
	@RequestMapping("/recFollow")
	public void selectRecFollow(HttpServletRequest request, HttpServletResponse response){
		Object obj = request.getSession().getAttribute("userId");
		if(obj != null){
			try {
				int id = (int) obj;
				List<RecFriend> recFriend = userService.selectRecFriend(id);
				for(RecFriend r:recFriend){
					System.out.println("//////" + r);
				}
				responseJson(response,recFriend);
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
	
	//输出json
	private void responseJson(HttpServletResponse response,Object result) throws IOException{
		response.setCharacterEncoding("UTF-8");
		Gson gson=new Gson();
		String resultJson=gson.toJson(result);
		PrintWriter out = response.getWriter();
		out.write(resultJson);
		out.close();
	}
}

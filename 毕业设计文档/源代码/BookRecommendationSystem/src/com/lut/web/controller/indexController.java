package com.lut.web.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.google.gson.Gson;
import com.lut.bean.Book;
import com.lut.bean.FreshBook;
import com.lut.bean.HotBook;
import com.lut.bean.HotWriter;
import com.lut.bean.RecBook;
import com.lut.bean.User;
import com.lut.bean.UserInfo;
import com.lut.bean.Writer;
import com.lut.service.BookService;
import com.lut.service.UserService;
import com.lut.service.WriterService;

@Controller
@RequestMapping("/writer")
public class indexController {
	@Autowired
	private WriterService writerService;
	@Autowired
	private BookService bookService;
	@Autowired
	private UserService userService;
	
	@RequestMapping(value="/index")
	public String index(){
		return "redirect:/index";
	}
	
	@RequestMapping(value="/discover")
	public String discover(){
		return "discover";
	}
	
	//��������
	@RequestMapping(value="/selectWriterOrderByHotdegree")
	public void selectWriterOrderByHotdegree(HttpServletResponse response){
		List<HotWriter> list = null;
		try {
			list = writerService.selectWriterOrderByHotdegree();
			responseJson(response,list);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	//ǩԼ����
	@RequestMapping(value="/selectContractWriter")
	public void selectContractWriter(HttpServletResponse response){
		List<Writer> list = null;
		try {
			list = writerService.selectContractWriter();
			responseJson(response,list);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	//�����Ƽ�
	@RequestMapping(value="/selectBookByHotdegree")
	public void selectBookByHotdegree(HttpServletResponse response){
		List<HotBook> bookByHotdegree = null;
		
		try {
			bookByHotdegree = bookService.selectBookByHotdegree();
			responseJson(response,bookByHotdegree);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	//�����Ƽ���ѧ
	@RequestMapping(value="/selectHotBookByLiterature")
	public void selectHotBookByLiterature(HttpServletResponse response){
		List<HotBook> hotBookByLiterature = null;
		
		try {
			hotBookByLiterature = bookService.selectHotBookByLiterature();
			responseJson(response,hotBookByLiterature);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	//�����Ƽ�С˵
	@RequestMapping(value="/selectHotBookByNovel")
	public void selectHotBookByNovel(HttpServletResponse response){
		List<HotBook> hotBookByNovel = null;
		
		try {
			hotBookByNovel = bookService.selectHotBookByNovel();
			responseJson(response,hotBookByNovel);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	//�����Ƽ���ʷ
	@RequestMapping(value="/selectHotBookByHistory")
	public void selectHotBookByHistory(HttpServletResponse response){
		List<HotBook> hotBookByHistory = null;
		
		try {
			hotBookByHistory = bookService.selectHotBookByHistory();
			responseJson(response,hotBookByHistory);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	//�����Ƽ�����
	@RequestMapping(value="/selectHotBookByManagement")
	public void selectHotBookByManagement(HttpServletResponse response){
		List<HotBook> hotBookByManagement = null;
		
		try {
			hotBookByManagement = bookService.selectHotBookByManagement();
			responseJson(response,hotBookByManagement);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	//�����Ƽ���־
	@RequestMapping(value="/selectHotBookByInspiration")
	public void selectHotBookByInspiration(HttpServletResponse response){
		List<HotBook> hotBookByInspiration = null;
		
		try {
			hotBookByInspiration = bookService.selectHotBookByInspiration();
			responseJson(response,hotBookByInspiration);
		} catch (Exception e) {
			e.printStackTrace();
 		}
	}
	
	//�����ϼ�
	@RequestMapping(value="/selectFreshBook")
	public void selectNewBook(HttpServletResponse response){
		List<FreshBook> newBook = null;
		try {
			newBook = bookService.selectFreshBook();
			responseJson(response,newBook);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	//����������
	@RequestMapping(value="/selectFreshBookRank")
	public void selectFreshBookRank(HttpServletResponse response){
		List<Book> freshBookRank = bookService.selectFreshBookRank();
		try {
			responseJson(response, freshBookRank);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	//ͼ�鳩����
	@RequestMapping(value="/selectBestReaderRank")
	public void selectBestReaderRank(HttpServletResponse response){
		List<Book> bestReaderRank = bookService.selectBestReaderRank();
		try {
			responseJson(response, bestReaderRank);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	//ͼ��߷ְ�
	@RequestMapping(value="/selectHightEvaluationRank")
	public void selectHightEvaluationRank(HttpServletResponse response){
		List<Book> hightEvaluationRank = bookService.selectHightEvaluationRank();
		try {
			responseJson(response, hightEvaluationRank);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	//�ж��û��Ƿ��¼
	@RequestMapping(value="/judgeLogin")
	public void judgeLogin(HttpServletRequest request, HttpServletResponse response){
		Object obj = request.getSession().getAttribute("userId");
		if(obj != null){
			try {
				int id = (int) obj;
				List<RecBook> recBookById = bookService.selectRecBookById(id);
				UserInfo userInfoById = userService.selectUserInfoById(id);
				Integer attentionNumById = userService.selectAttentionNumById(id);
				Integer beConcernedNumById = userService.selectBeConcernedNumById(id);
				Integer reactionNumById = userService.selectReactionNumById(id);
				List<Object> list = new ArrayList<Object>();
				list.add(recBookById);
				list.add(userInfoById);
				list.add(attentionNumById);
				list.add(beConcernedNumById);
				list.add(reactionNumById);
				responseJson(response,list);
			} catch (IOException e) {
				e.printStackTrace();
			}
		} else{
			try {
				responseJson(response,null);
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
	
	//��¼����
	@RequestMapping("/login")
	public void login(HttpServletRequest request,HttpServletResponse response){
		User user=new User();
		user.setAccount(request.getParameter("userName"));
		user.setPassword(request.getParameter("password"));
		User userResult=userService.selectUserByAccount(user);
		List<RecBook> recBookById = null;
		try {
			if(userResult!=null){
				int id = userResult.getId();
				recBookById = bookService.selectRecBookById(id);
				request.getSession().setAttribute("userId", id);
				
				UserInfo userInfoById = userService.selectUserInfoById(id);
				Integer attentionNumById = userService.selectAttentionNumById(id);
				Integer beConcernedNumById = userService.selectBeConcernedNumById(id);
				Integer reactionNumById = userService.selectReactionNumById(id);
				//System.out.println(userInfoById);
				//System.out.println(attentionNumById+"---->"+beConcernedNumById+"---->"+reactionNumById);
				List<Object> list = new ArrayList<Object>();
				if(request.getSession().getAttribute("userId") != null){
					list.add(recBookById);
					list.add(userInfoById);
					list.add(attentionNumById);
					list.add(beConcernedNumById);
					list.add(reactionNumById);
				}
//				for(Object o:list){
//					System.out.println(o);
//				}
				responseJson(response,list);
			}else{
				responseJson(response,null);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	//ע���û��˺�
	@RequestMapping("/insertUserInfo")
	public String insertUserInfo(HttpServletRequest request){
		System.out.println("////////////////////////////");
		User user = new User();
		user.setAccount(request.getParameter("account"));
		user.setPassword(request.getParameter("password"));
		user.setPower("�û�");
		user.setLast_login_time(new Timestamp(System.currentTimeMillis()));
		int resultAcc = userService.insertUserAccount(user);
		request.getSession().setAttribute("userId", user.getId());
		
		System.out.println("-----------------------------");
		
		UserInfo userInfo = new UserInfo();
		userInfo.setId((int)request.getSession().getAttribute("userId"));
		userInfo.setName(request.getParameter("name"));
		userInfo.setSignature(request.getParameter("signature"));
		userInfo.setGender(request.getParameter("gender"));
		userInfo.setCareer(request.getParameter("career"));
		userInfo.setPicture("user_picture/������Ƭ.jpg");
		userInfo.setBirthday(request.getParameter("birthday"));
		userInfo.setProvince(request.getParameter("province"));
		userInfo.setCity(request.getParameter("city"));
		int resultInfo = userService.insertUserInfo(userInfo);
		
		userInfo.setCellphone(request.getParameter("cellphone"));
		userInfo.setWechat(request.getParameter("wechat"));
		userInfo.setQq(request.getParameter("qq"));
		userInfo.setLevel("��ͭ1");
		userInfo.setIf_vip(0);
		userInfo.setBalance(0);
		int resultExt = userService.insertUserExt(userInfo);
		//ע��ɹ�
		if(resultAcc == 1 && resultInfo == 1 && resultExt == 1){
			return "inedex";
		}
		
		return "login";
		
	}
	
	//ע����¼
	@RequestMapping("/logout")
	public String logout(HttpServletRequest request){
		request.getSession().removeAttribute("userId");
		return "index";
	}
	
	//�鼮����
	@RequestMapping("/bookpage")
	public ModelAndView selectBookDetailByBookId(HttpServletRequest request, HttpServletResponse response){
		String book_id = request.getParameter("bookId");
		ModelAndView mav=new ModelAndView();
		mav.setViewName("bookpage");
		
		Book bookDetailByBookId = bookService.selectBookDetailByBookId(Integer.valueOf(book_id));
		mav.addObject("bookInfo", bookDetailByBookId);
		return mav;
	}
	
	//�����鼮
	@RequestMapping("/similarBook")
	public void selectSimilarBook(HttpServletRequest request, HttpServletResponse response){
		String book_id = request.getParameter("bookId");
		if(book_id != null && book_id !=""){
			List<Book> similarBook = bookService.selectSimilarBook(Integer.valueOf(book_id));
			try {
				responseJson(response, similarBook);
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		else
			System.out.println("�����鼮��---book_id cannot be null!!!---");
	}
	
	//�˺��Ƿ����
	@RequestMapping("/accountIfExists")
	@ResponseBody
	public String accountIfExists(HttpServletRequest request){
		String account = request.getParameter("account");
		if(account != null && account != ""){
			User acc = userService.AccountIfExists(account);
			if(acc != null){
				return "false";
			}
		}
		return "success";
	}
	
	//���json
	private void responseJson(HttpServletResponse response,Object result) throws IOException{
		response.setCharacterEncoding("UTF-8");
		Gson gson=new Gson();
		String resultJson=gson.toJson(result);
		PrintWriter out = response.getWriter();
		out.write(resultJson);
		out.close();
	}
	
	
}

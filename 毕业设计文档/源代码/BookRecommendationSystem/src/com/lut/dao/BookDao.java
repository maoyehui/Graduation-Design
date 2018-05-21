package com.lut.dao;

import java.util.List;

import com.lut.bean.Book;
import com.lut.bean.BookList;
import com.lut.bean.FreshBook;
import com.lut.bean.HotBook;
import com.lut.bean.RecBook;

public interface BookDao {
	public List<HotBook> selectBookByHotdegree();
	
	public List<HotBook> selectHotBookByLiterature();
	
	public List<HotBook> selectHotBookByNovel();
	
	public List<HotBook> selectHotBookByHistory();
	
	public List<HotBook> selectHotBookByManagement();
	
	public List<HotBook> selectHotBookByInspiration();
	
	public List<FreshBook> selectFreshBook();
	
	public List<RecBook> selectRecBookById(int id);
	
	public List<Book> selectFreshBookRank();
	
	public List<Book> selectBestReaderRank();
	
	public List<Book> selectHightEvaluationRank();
	
	public List<Book> selectCollectionBookById(int id);
	
	public List<BookList> selectBookListById(int id);
	
	public List<BookList> selectCreateListById(int id);
	
	public Book selectBookDetailByBookId(int book_id);
	
	public List<Book> selectSimilarBook(int book_id);
	
}

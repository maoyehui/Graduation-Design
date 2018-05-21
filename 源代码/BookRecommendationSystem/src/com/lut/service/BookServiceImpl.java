package com.lut.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lut.bean.Book;
import com.lut.bean.BookList;
import com.lut.bean.FreshBook;
import com.lut.bean.HotBook;
import com.lut.bean.RecBook;
import com.lut.dao.BookDao;

@Service("BookService")
public class BookServiceImpl implements BookService{

	@Autowired
	private BookDao bookDao;

	@Override
	public List<HotBook> selectBookByHotdegree() {
		List<HotBook> bookByHotdegree = bookDao.selectBookByHotdegree();
		for(HotBook book : bookByHotdegree){
			System.out.println(book);
		}
		return bookByHotdegree;
	}

	@Override
	public List<HotBook> selectHotBookByLiterature() {
		List<HotBook> hotBookByLiterature = bookDao.selectHotBookByLiterature();
		for(HotBook book : hotBookByLiterature){
			System.out.println(book);
		}
		return hotBookByLiterature;
	}

	@Override
	public List<HotBook> selectHotBookByNovel() {
		List<HotBook> hotBookByNovel = bookDao.selectHotBookByNovel();
		for(HotBook book : hotBookByNovel){
			System.out.println(book);
		}
		return hotBookByNovel;
	}

	@Override
	public List<HotBook> selectHotBookByHistory() {
		List<HotBook> hotBookByHistory = bookDao.selectHotBookByHistory();
		for(HotBook book : hotBookByHistory){
			System.out.println(book);
		}
		return hotBookByHistory;
	}

	@Override
	public List<HotBook> selectHotBookByManagement() {
		List<HotBook> hotBookByManagement = bookDao.selectHotBookByManagement();
		for(HotBook book : hotBookByManagement){
			System.out.println(book);
		}
		return hotBookByManagement;
	}

	@Override
	public List<HotBook> selectHotBookByInspiration() {
		List<HotBook> hotBookByInspiration = bookDao.selectHotBookByInspiration();
		for(HotBook book : hotBookByInspiration){
			System.out.println(book);
		}
		return hotBookByInspiration;
	}

	@Override
	public List<FreshBook> selectFreshBook() {
		List<FreshBook> freshBook = bookDao.selectFreshBook();
		return freshBook;
	}

	@Override
	public List<RecBook> selectRecBookById(int id) {
		List<RecBook> recBookById = bookDao.selectRecBookById(id);
		return recBookById;
	}

	@Override
	public List<Book> selectFreshBookRank() {
		List<Book> freshBookRank = bookDao.selectFreshBookRank();
		return freshBookRank;
	}

	@Override
	public List<Book> selectBestReaderRank() {
		List<Book> bestReaderRank = bookDao.selectBestReaderRank();
		return bestReaderRank;
	}

	@Override
	public List<Book> selectHightEvaluationRank() {
		List<Book> hightEvaluationRank = bookDao.selectHightEvaluationRank();
		return hightEvaluationRank;
	}

	@Override
	public List<Book> selectCollectionBookById(int id) {
		List<Book> collectionBookById = bookDao.selectCollectionBookById(id);
		return collectionBookById;
	}

	@Override
	public List<BookList> selectBookListById(int id) {
		List<BookList> bookListById = bookDao.selectBookListById(id);
		return bookListById;
	}

	@Override
	public List<BookList> selectCreateListById(int id) {
		List<BookList> createListById = bookDao.selectCreateListById(id);
		return createListById;
	}

	@Override
	public Book selectBookDetailByBookId(int book_id) {
		Book bookDetailByBookId = bookDao.selectBookDetailByBookId(book_id);
		return bookDetailByBookId;
	}

	@Override
	public List<Book> selectSimilarBook(int book_id) {
		List<Book> similarBook = bookDao.selectSimilarBook(book_id);
		return similarBook;
	}
	
}

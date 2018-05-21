package com.lut.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lut.bean.HotWriter;
import com.lut.bean.Writer;
import com.lut.dao.WriterDao;

@Service("writerService")
public class WriterServiceImpl implements WriterService{
	@Autowired
	private WriterDao writerDao;

	@Override
	public List<HotWriter> selectWriterOrderByHotdegree() throws Exception {
		List<HotWriter> writerOrderByHotdegree = writerDao.selectWriterOrderByHotdegree();
		return writerOrderByHotdegree;
	}

	@Override
	public List<Writer> selectContractWriter() {
		List<Writer> contractWriter = writerDao.selectContractWriter();
		return contractWriter;
	}
	
	
}

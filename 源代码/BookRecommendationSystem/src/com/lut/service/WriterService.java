package com.lut.service;

import java.util.List;

import com.lut.bean.HotWriter;
import com.lut.bean.Writer;

public interface WriterService {

	public List<HotWriter> selectWriterOrderByHotdegree()throws Exception;
	
	public List<Writer> selectContractWriter();
}

package com.lut.dao;

import java.util.List;

import com.lut.bean.HotWriter;
import com.lut.bean.Writer;

public interface WriterDao {
	public List<HotWriter> selectWriterOrderByHotdegree();
	
	public List<Writer> selectContractWriter();
}

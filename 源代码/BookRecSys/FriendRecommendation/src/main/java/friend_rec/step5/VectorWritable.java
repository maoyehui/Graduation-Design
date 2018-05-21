package friend_rec.step5;

import java.io.DataInput;
import java.io.DataOutput;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;

import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Writable;

import friend_rec.step4.Preference;

public class VectorWritable implements Writable, Iterable<Preference>{
	
	private Set<Preference> s = new TreeSet<Preference>();
	
	public void add(Preference p){
		s.add(new Preference(p));
	}
	
	public void clear(){ 
		s.clear();
	}

	@Override
	public String toString() {
		return s.toString();
	}

	@Override
	public Iterator<Preference> iterator() {
		return s.iterator();
	}

	@Override
	public void write(DataOutput out) throws IOException {
		IntWritable len = new IntWritable(s.size());
		len.write(out);
		for(Preference p : s){
			p.write(out);
		}
	}

	@Override
	public void readFields(DataInput in) throws IOException {
		s.clear();
		s.clear();
		IntWritable len = new IntWritable();
		len.readFields(in);
		int size = len.get();
		for(int i = 0; i < size; i++){
			Preference pref = new Preference();
			pref.readFields(in);
			this.s.add(pref);
		}
	}
	
	public void addAll(VectorWritable vw){
		for(Preference p : vw){
			this.s.add(new Preference(p));
		}
	}
	
	public void remove(VectorWritable vw){
		for(Preference p :vw){
			this.s.remove(p);
		}
	}
	
	public List<Preference> toList(){
		List<Preference> list = new ArrayList<Preference>();
		list.addAll(s);
		return list;
	}

}

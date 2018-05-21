package friend_rec.step5;

import org.apache.hadoop.io.Text;

import friend_rec.step4.Preference;

/**
 * 
 * 解析每一行带[]的数据，即矩阵每一行的数据
 * 
 * */
public class VectorParser {
	private VectorWritable vector = new VectorWritable();
	private boolean isValid = false;
	
	public void parse(String value){
		String substring = value.substring(1, value.length()-1);
		String[] split = substring.split(",");
		
		if(split.length > 0){
			for(int i = 0; i < split.length; i++){
				String[] elements = split[i].split(":");
				Preference p = new Preference();
				p.setId(Integer.valueOf(elements[0].trim()));
				p.setPref(Double.valueOf(elements[1].trim()));
				vector.add(p);
			}
			isValid = true;
		}
	}
	
	public void parse(Text value){
		parse(value.toString());
	}
	
	public VectorWritable getVector() {
		return vector;
	}

	public boolean isValid() {
		return isValid;
	}
}

package friend_rec.step5;

import org.apache.hadoop.io.WritableComparable;
import org.apache.hadoop.io.WritableComparator;

public class KeyTupleGroupComparator extends WritableComparator {
	
	public KeyTupleGroupComparator(){
		super(KeyTuple.class, true);
	}

	@SuppressWarnings("rawtypes")
	@Override
	public int compare(WritableComparable a, WritableComparable b) {
		KeyTuple k1 = (KeyTuple)a;
		KeyTuple k2 = (KeyTuple)b;
		return k1.getId().compareTo(k2.getId());
	}
	
}

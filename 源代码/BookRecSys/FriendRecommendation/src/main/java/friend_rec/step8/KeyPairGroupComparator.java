package friend_rec.step8;

import org.apache.hadoop.io.WritableComparable;
import org.apache.hadoop.io.WritableComparator;

public class KeyPairGroupComparator extends WritableComparator {
	
	public KeyPairGroupComparator(){
		super(KeyPair.class, true);
	}

	@SuppressWarnings("rawtypes")
	@Override
	public int compare(WritableComparable a, WritableComparable b) {
		KeyPair k1 = (KeyPair)a;
		KeyPair k2 = (KeyPair)b;
		return k1.getId().compareTo(k2.getId());
	}
	
}

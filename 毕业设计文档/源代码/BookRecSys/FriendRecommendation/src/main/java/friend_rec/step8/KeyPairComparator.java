package friend_rec.step8;

import org.apache.hadoop.io.WritableComparable;
import org.apache.hadoop.io.WritableComparator;

public class KeyPairComparator extends WritableComparator {
	protected KeyPairComparator(){
		super(KeyPair.class, true);
	}

	@SuppressWarnings("rawtypes")
	@Override
	public int compare(WritableComparable a, WritableComparable b) {
		KeyPair kt1 = (KeyPair) a;
		KeyPair kt2 = (KeyPair) b;
		int cmp = kt1.getId().compareTo(kt2.getId());
		if(cmp != 0){
			return cmp;
		}
		return -kt1.getRef().compareTo(kt2.getRef());
	}
	
}

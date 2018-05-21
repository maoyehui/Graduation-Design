package friend_rec.step8;

import org.apache.hadoop.io.WritableComparable;
import org.apache.hadoop.io.WritableComparator;

public class ValueTupleGroupComparator extends WritableComparator {
	
	public ValueTupleGroupComparator() {
		super(ValueTuple.class, true);
	}

	@SuppressWarnings("rawtypes")
	@Override
	public int compare(WritableComparable a, WritableComparable b) {
		ValueTuple v1 = (ValueTuple) a;
		ValueTuple v2 = (ValueTuple) b;
		return v1.getPref().compareTo(v2.getPref());
	}

}

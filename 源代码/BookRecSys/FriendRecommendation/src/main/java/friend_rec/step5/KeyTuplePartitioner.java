package friend_rec.step5;

import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Partitioner;

public class KeyTuplePartitioner extends Partitioner<KeyTuple, Text> {

	@Override
	public int getPartition(KeyTuple key, Text value, int numPartitions) {
		return Math.abs(key.getId().hashCode() * 127) % numPartitions;
	}

}

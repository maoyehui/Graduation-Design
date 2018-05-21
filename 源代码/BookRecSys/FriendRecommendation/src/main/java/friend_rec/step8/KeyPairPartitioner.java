package friend_rec.step8;

import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Partitioner;

public class KeyPairPartitioner extends Partitioner<KeyPair, Text> {

	@Override
	public int getPartition(KeyPair key, Text value, int numPartitions) {
		return Math.abs(key.getId().hashCode() * 127) % numPartitions;
	}

}

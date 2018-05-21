// ORM class for table 'collection_books'
// WARNING: This class is AUTO-GENERATED. Modify at your own risk.
//
// Debug information:
// Generated date: Mon Jun 12 17:02:27 CST 2017
// For connector: org.apache.sqoop.manager.MySQLManager
import org.apache.hadoop.io.BytesWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.io.Writable;
import org.apache.hadoop.mapred.lib.db.DBWritable;
import com.cloudera.sqoop.lib.JdbcWritableBridge;
import com.cloudera.sqoop.lib.DelimiterSet;
import com.cloudera.sqoop.lib.FieldFormatter;
import com.cloudera.sqoop.lib.RecordParser;
import com.cloudera.sqoop.lib.BooleanParser;
import com.cloudera.sqoop.lib.BlobRef;
import com.cloudera.sqoop.lib.ClobRef;
import com.cloudera.sqoop.lib.LargeObjectLoader;
import com.cloudera.sqoop.lib.SqoopRecord;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.io.DataInput;
import java.io.DataOutput;
import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.CharBuffer;
import java.sql.Date;
import java.sql.Time;
import java.sql.Timestamp;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

public class collection_books extends SqoopRecord  implements DBWritable, Writable {
  private final int PROTOCOL_VERSION = 3;
  public int getClassFormatVersion() { return PROTOCOL_VERSION; }
  protected ResultSet __cur_result_set;
  private Integer id;
  public Integer get_id() {
    return id;
  }
  public void set_id(Integer id) {
    this.id = id;
  }
  public collection_books with_id(Integer id) {
    this.id = id;
    return this;
  }
  private Integer book_id;
  public Integer get_book_id() {
    return book_id;
  }
  public void set_book_id(Integer book_id) {
    this.book_id = book_id;
  }
  public collection_books with_book_id(Integer book_id) {
    this.book_id = book_id;
    return this;
  }
  private String evaluation;
  public String get_evaluation() {
    return evaluation;
  }
  public void set_evaluation(String evaluation) {
    this.evaluation = evaluation;
  }
  public collection_books with_evaluation(String evaluation) {
    this.evaluation = evaluation;
    return this;
  }
  private String reaction_title;
  public String get_reaction_title() {
    return reaction_title;
  }
  public void set_reaction_title(String reaction_title) {
    this.reaction_title = reaction_title;
  }
  public collection_books with_reaction_title(String reaction_title) {
    this.reaction_title = reaction_title;
    return this;
  }
  private String reaction;
  public String get_reaction() {
    return reaction;
  }
  public void set_reaction(String reaction) {
    this.reaction = reaction;
  }
  public collection_books with_reaction(String reaction) {
    this.reaction = reaction;
    return this;
  }
  private Integer if_public_reaction;
  public Integer get_if_public_reaction() {
    return if_public_reaction;
  }
  public void set_if_public_reaction(Integer if_public_reaction) {
    this.if_public_reaction = if_public_reaction;
  }
  public collection_books with_if_public_reaction(Integer if_public_reaction) {
    this.if_public_reaction = if_public_reaction;
    return this;
  }
  private Integer recommendation_level;
  public Integer get_recommendation_level() {
    return recommendation_level;
  }
  public void set_recommendation_level(Integer recommendation_level) {
    this.recommendation_level = recommendation_level;
  }
  public collection_books with_recommendation_level(Integer recommendation_level) {
    this.recommendation_level = recommendation_level;
    return this;
  }
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (!(o instanceof collection_books)) {
      return false;
    }
    collection_books that = (collection_books) o;
    boolean equal = true;
    equal = equal && (this.id == null ? that.id == null : this.id.equals(that.id));
    equal = equal && (this.book_id == null ? that.book_id == null : this.book_id.equals(that.book_id));
    equal = equal && (this.evaluation == null ? that.evaluation == null : this.evaluation.equals(that.evaluation));
    equal = equal && (this.reaction_title == null ? that.reaction_title == null : this.reaction_title.equals(that.reaction_title));
    equal = equal && (this.reaction == null ? that.reaction == null : this.reaction.equals(that.reaction));
    equal = equal && (this.if_public_reaction == null ? that.if_public_reaction == null : this.if_public_reaction.equals(that.if_public_reaction));
    equal = equal && (this.recommendation_level == null ? that.recommendation_level == null : this.recommendation_level.equals(that.recommendation_level));
    return equal;
  }
  public void readFields(ResultSet __dbResults) throws SQLException {
    this.__cur_result_set = __dbResults;
    this.id = JdbcWritableBridge.readInteger(1, __dbResults);
    this.book_id = JdbcWritableBridge.readInteger(2, __dbResults);
    this.evaluation = JdbcWritableBridge.readString(3, __dbResults);
    this.reaction_title = JdbcWritableBridge.readString(4, __dbResults);
    this.reaction = JdbcWritableBridge.readString(5, __dbResults);
    this.if_public_reaction = JdbcWritableBridge.readInteger(6, __dbResults);
    this.recommendation_level = JdbcWritableBridge.readInteger(7, __dbResults);
  }
  public void loadLargeObjects(LargeObjectLoader __loader)
      throws SQLException, IOException, InterruptedException {
  }
  public void write(PreparedStatement __dbStmt) throws SQLException {
    write(__dbStmt, 0);
  }

  public int write(PreparedStatement __dbStmt, int __off) throws SQLException {
    JdbcWritableBridge.writeInteger(id, 1 + __off, 4, __dbStmt);
    JdbcWritableBridge.writeInteger(book_id, 2 + __off, 4, __dbStmt);
    JdbcWritableBridge.writeString(evaluation, 3 + __off, 12, __dbStmt);
    JdbcWritableBridge.writeString(reaction_title, 4 + __off, 12, __dbStmt);
    JdbcWritableBridge.writeString(reaction, 5 + __off, -1, __dbStmt);
    JdbcWritableBridge.writeInteger(if_public_reaction, 6 + __off, -6, __dbStmt);
    JdbcWritableBridge.writeInteger(recommendation_level, 7 + __off, 4, __dbStmt);
    return 7;
  }
  public void readFields(DataInput __dataIn) throws IOException {
    if (__dataIn.readBoolean()) { 
        this.id = null;
    } else {
    this.id = Integer.valueOf(__dataIn.readInt());
    }
    if (__dataIn.readBoolean()) { 
        this.book_id = null;
    } else {
    this.book_id = Integer.valueOf(__dataIn.readInt());
    }
    if (__dataIn.readBoolean()) { 
        this.evaluation = null;
    } else {
    this.evaluation = Text.readString(__dataIn);
    }
    if (__dataIn.readBoolean()) { 
        this.reaction_title = null;
    } else {
    this.reaction_title = Text.readString(__dataIn);
    }
    if (__dataIn.readBoolean()) { 
        this.reaction = null;
    } else {
    this.reaction = Text.readString(__dataIn);
    }
    if (__dataIn.readBoolean()) { 
        this.if_public_reaction = null;
    } else {
    this.if_public_reaction = Integer.valueOf(__dataIn.readInt());
    }
    if (__dataIn.readBoolean()) { 
        this.recommendation_level = null;
    } else {
    this.recommendation_level = Integer.valueOf(__dataIn.readInt());
    }
  }
  public void write(DataOutput __dataOut) throws IOException {
    if (null == this.id) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    __dataOut.writeInt(this.id);
    }
    if (null == this.book_id) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    __dataOut.writeInt(this.book_id);
    }
    if (null == this.evaluation) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    Text.writeString(__dataOut, evaluation);
    }
    if (null == this.reaction_title) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    Text.writeString(__dataOut, reaction_title);
    }
    if (null == this.reaction) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    Text.writeString(__dataOut, reaction);
    }
    if (null == this.if_public_reaction) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    __dataOut.writeInt(this.if_public_reaction);
    }
    if (null == this.recommendation_level) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    __dataOut.writeInt(this.recommendation_level);
    }
  }
  private final DelimiterSet __outputDelimiters = new DelimiterSet((char) 9, (char) 10, (char) 0, (char) 0, false);
  public String toString() {
    return toString(__outputDelimiters, true);
  }
  public String toString(DelimiterSet delimiters) {
    return toString(delimiters, true);
  }
  public String toString(boolean useRecordDelim) {
    return toString(__outputDelimiters, useRecordDelim);
  }
  public String toString(DelimiterSet delimiters, boolean useRecordDelim) {
    StringBuilder __sb = new StringBuilder();
    char fieldDelim = delimiters.getFieldsTerminatedBy();
    __sb.append(FieldFormatter.escapeAndEnclose(id==null?"null":"" + id, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(book_id==null?"null":"" + book_id, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(evaluation==null?"null":evaluation, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(reaction_title==null?"null":reaction_title, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(reaction==null?"null":reaction, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(if_public_reaction==null?"null":"" + if_public_reaction, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(recommendation_level==null?"null":"" + recommendation_level, delimiters));
    if (useRecordDelim) {
      __sb.append(delimiters.getLinesTerminatedBy());
    }
    return __sb.toString();
  }
  private final DelimiterSet __inputDelimiters = new DelimiterSet((char) 9, (char) 10, (char) 0, (char) 0, false);
  private RecordParser __parser;
  public void parse(Text __record) throws RecordParser.ParseError {
    if (null == this.__parser) {
      this.__parser = new RecordParser(__inputDelimiters);
    }
    List<String> __fields = this.__parser.parseRecord(__record);
    __loadFromFields(__fields);
  }

  public void parse(CharSequence __record) throws RecordParser.ParseError {
    if (null == this.__parser) {
      this.__parser = new RecordParser(__inputDelimiters);
    }
    List<String> __fields = this.__parser.parseRecord(__record);
    __loadFromFields(__fields);
  }

  public void parse(byte [] __record) throws RecordParser.ParseError {
    if (null == this.__parser) {
      this.__parser = new RecordParser(__inputDelimiters);
    }
    List<String> __fields = this.__parser.parseRecord(__record);
    __loadFromFields(__fields);
  }

  public void parse(char [] __record) throws RecordParser.ParseError {
    if (null == this.__parser) {
      this.__parser = new RecordParser(__inputDelimiters);
    }
    List<String> __fields = this.__parser.parseRecord(__record);
    __loadFromFields(__fields);
  }

  public void parse(ByteBuffer __record) throws RecordParser.ParseError {
    if (null == this.__parser) {
      this.__parser = new RecordParser(__inputDelimiters);
    }
    List<String> __fields = this.__parser.parseRecord(__record);
    __loadFromFields(__fields);
  }

  public void parse(CharBuffer __record) throws RecordParser.ParseError {
    if (null == this.__parser) {
      this.__parser = new RecordParser(__inputDelimiters);
    }
    List<String> __fields = this.__parser.parseRecord(__record);
    __loadFromFields(__fields);
  }

  private void __loadFromFields(List<String> fields) {
    Iterator<String> __it = fields.listIterator();
    String __cur_str;
    __cur_str = __it.next();
    if (__cur_str.equals("null") || __cur_str.length() == 0) { this.id = null; } else {
      this.id = Integer.valueOf(__cur_str);
    }

    __cur_str = __it.next();
    if (__cur_str.equals("null") || __cur_str.length() == 0) { this.book_id = null; } else {
      this.book_id = Integer.valueOf(__cur_str);
    }

    __cur_str = __it.next();
    if (__cur_str.equals("null")) { this.evaluation = null; } else {
      this.evaluation = __cur_str;
    }

    __cur_str = __it.next();
    if (__cur_str.equals("null")) { this.reaction_title = null; } else {
      this.reaction_title = __cur_str;
    }

    __cur_str = __it.next();
    if (__cur_str.equals("null")) { this.reaction = null; } else {
      this.reaction = __cur_str;
    }

    __cur_str = __it.next();
    if (__cur_str.equals("null") || __cur_str.length() == 0) { this.if_public_reaction = null; } else {
      this.if_public_reaction = Integer.valueOf(__cur_str);
    }

    __cur_str = __it.next();
    if (__cur_str.equals("null") || __cur_str.length() == 0) { this.recommendation_level = null; } else {
      this.recommendation_level = Integer.valueOf(__cur_str);
    }

  }

  public Object clone() throws CloneNotSupportedException {
    collection_books o = (collection_books) super.clone();
    return o;
  }

  public Map<String, Object> getFieldMap() {
    Map<String, Object> __sqoop$field_map = new TreeMap<String, Object>();
    __sqoop$field_map.put("id", this.id);
    __sqoop$field_map.put("book_id", this.book_id);
    __sqoop$field_map.put("evaluation", this.evaluation);
    __sqoop$field_map.put("reaction_title", this.reaction_title);
    __sqoop$field_map.put("reaction", this.reaction);
    __sqoop$field_map.put("if_public_reaction", this.if_public_reaction);
    __sqoop$field_map.put("recommendation_level", this.recommendation_level);
    return __sqoop$field_map;
  }

  public void setField(String __fieldName, Object __fieldVal) {
    if ("id".equals(__fieldName)) {
      this.id = (Integer) __fieldVal;
    }
    else    if ("book_id".equals(__fieldName)) {
      this.book_id = (Integer) __fieldVal;
    }
    else    if ("evaluation".equals(__fieldName)) {
      this.evaluation = (String) __fieldVal;
    }
    else    if ("reaction_title".equals(__fieldName)) {
      this.reaction_title = (String) __fieldVal;
    }
    else    if ("reaction".equals(__fieldName)) {
      this.reaction = (String) __fieldVal;
    }
    else    if ("if_public_reaction".equals(__fieldName)) {
      this.if_public_reaction = (Integer) __fieldVal;
    }
    else    if ("recommendation_level".equals(__fieldName)) {
      this.recommendation_level = (Integer) __fieldVal;
    }
    else {
      throw new RuntimeException("No such field: " + __fieldName);
    }
  }
}

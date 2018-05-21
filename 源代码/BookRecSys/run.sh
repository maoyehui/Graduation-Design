#!/bin/bash

hdfs dfs -rm -r /user/maoyh/collection_books
hdfs dfs -rm -r /user/maoyh/friends
hdfs dfs -rm -r /BookRec
hdfs dfs -rm -r /FriendRec

sqoop import --connect jdbc:mysql://192.168.56.1:3306/brs --username root --password 123456 --table collection_books --fields-terminated-by '\t'

sqoop import --connect jdbc:mysql://192.168.56.1:3306/brs --username root --password 123456 --table friends --fields-terminated-by '\t' -m 1

#--------------------------------------------------------------------------------------------------

cd /home/robbin/ScalaWorkspace/BookRecSys/BookRecommendation

yarn jar target/BookRecommendation-0.0.1-SNAPSHOT.jar book_rec.step1.BookRecTest -Dinput=/user/maoyh/collection_books -Doutput=/BookRec/step1


yarn jar target/BookRecommendation-0.0.1-SNAPSHOT.jar book_rec/step2/CoMatrixTest -Dinput=/BookRec/step1 -Doutput=/BookRec/step2

yarn jar target/BookRecommendation-0.0.1-SNAPSHOT.jar book_rec/step3/FinalCoMatrixTest -Dinput=/BookRec/step2 -Doutput=/BookRec/step3


yarn jar target/BookRecommendation-0.0.1-SNAPSHOT.jar book_rec.step4.ReferenceMatrixTest -Dinput=/user/maoyh/collection_books -Doutput=/BookRec/step4


yarn jar target/BookRecommendation-0.0.1-SNAPSHOT.jar book_rec.step5.ReduceJoinTest


yarn jar target/BookRecommendation-0.0.1-SNAPSHOT.jar book_rec.step6.MergeTest -Dinput=/BookRec/step5 -Doutput=/BookRec/step6


yarn jar target/BookRecommendation-0.0.1-SNAPSHOT.jar book_rec.step7.EliminateTest -Dorigin=/user/maoyh/collection_books -Dmatrix=/BookRec/step6 -Doutput=/BookRec/step7


yarn jar target/BookRecommendation-0.0.1-SNAPSHOT.jar book_rec.step8.FiltrateTest -Dinput=/BookRec/step7 -libjars /opt/maven/repository/mysql/mysql-connector-java/5.1.38/mysql-connector-java-5.1.38.jar

#--------------------------------------------------------------------------------------------------

cd /home/robbin/ScalaWorkspace/BookRecSys/FriendRecommendation

yarn jar target/FriendRecommendation-0.0.1-SNAPSHOT.jar friend_rec.step1.FriendRecTest -Dinput=/user/maoyh/friends -Doutput=/FriendRec/step1

yarn jar target/FriendRecommendation-0.0.1-SNAPSHOT.jar friend_rec.step2.CoMatrixTest -Dinput=/FriendRec/step1 -Doutput=/FriendRec/step2

yarn jar target/FriendRecommendation-0.0.1-SNAPSHOT.jar friend_rec.step3.FinalCoMatrixTest -Dinput=/FriendRec/step2 -Doutput=/FriendRec/step3

yarn jar target/FriendRecommendation-0.0.1-SNAPSHOT.jar friend_rec.step4.ReferenceMatrixTest -Dinput=/user/maoyh/friends -Doutput=/FriendRec/step4

yarn jar target/FriendRecommendation-0.0.1-SNAPSHOT.jar friend_rec.step5.ReduceJoinTest

yarn jar target/FriendRecommendation-0.0.1-SNAPSHOT.jar friend_rec.step6.MergeTest -Dinput=/FriendRec/step5 -Doutput=/FriendRec/step6

yarn jar target/FriendRecommendation-0.0.1-SNAPSHOT.jar friend_rec.step7.EliminateTest -Dorigin=/user/maoyh/friends -Dmatrix=/FriendRec/step6 -Doutput=/FriendRec/step7

yarn jar target/FriendRecommendation-0.0.1-SNAPSHOT.jar friend_rec.step8.FiltrateTest -Dinput=/FriendRec/step7 -libjars /opt/maven/repository/mysql/mysql-connector-java/5.1.38/mysql-connector-java-5.1.38.jar

insert into customer values(1,'shivam','shivam0108','shivampassword',7209562864,'shivam0108@gmail.com');
insert into customer values(2,'Jaskaran','Jaskaran0108','Jaskaranpassword',7209598764,'jassi@gmail.com');
insert into customer values(3,'Dayeeta','Dayeeta0108','Dayeetapassword',7284648764,'dayeeta234@gmail.com');

ALTER TABLE bus
  MODIFY bus_name varchar2(45);

insert into bus values(1,'Royal Travels','JH03 4767',45.00,80,'AVAILABLE','VOLVO');
insert into bus values(2,'Uttarakhand Travels','UK03 4787',50.00,80,'AVAILABLE','A.C');
insert into bus values(3,'Titanic Travels','DL04 4657',52.00,80,'REMOVED','NON A.C');

insert into booking values(1,2,3,1,sysdate,systimestamp,'Delhi to Gurgaon','booked','acde12345',7906512264);
insert into booking values(2,1,1,2,sysdate,systimestamp,'Delhi to Haryana','cancelled','acde12345',7906514435);
insert into booking values(3,2,2,1,sysdate,systimestamp,'Dehradun to Mumbai','booked','acd532345',7906654525);

insert into available_seat values(1,sysdate,1,75);
insert into available_seat values(2,sysdate,2,78);
insert into available_seat values(3,sysdate,3,69);

insert into stop values(1,'Delhi');
insert into stop values(2,'Mumbai');
insert into stop values(3,'Haryana');
insert into stop values(4,'Gurgaon');
insert into stop values(5,'Dehradun');

ALTER TABLE passenger
  MODIFY name varchar2(255);


INSERT INTO passenger VALUES (1,'shivam',2,1,'male',25,'Ranchi',79);
INSERT INTO passenger VALUES (2,'Archana',3,2,'female',23,'chandigarh',77);
INSERT INTO passenger VALUES (3,'Dayeeta',3,2,'female',23,'orissa',74);
INSERT INTO passenger VALUES (4,'Jaskaran',2,3,'male',23,'patiala',68);

INSERT INTO payment_detail VALUES(1,1,2,520,'gpay',SYSDATE ,'completed');
INSERT INTO payment_detail VALUES(2,2,1,450,'wallet',SYSDATE ,'under process');
INSERT INTO payment_detail VALUES(3,3,2,650,'paytm',SYSDATE,'completed');

INSERT INTO route VALUES(1,1,1,1,SYSTIMESTAMP,SYSTIMESTAMP);
INSERT INTO route VALUES(2,1,2,2,SYSTIMESTAMP,SYSTIMESTAMP);
INSERT INTO route VALUES(3,2,3,1,SYSTIMESTAMP,SYSTIMESTAMP);
INSERT INTO route VALUES(4,2,4,2,SYSTIMESTAMP,SYSTIMESTAMP);





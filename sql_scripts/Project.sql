CREATE TABLE  customer  (
	 id  INT,
	 name  VARCHAR2(4000) NOT NULL,
	
	 password  VARCHAR2(255) NOT NULL,
	 mobile_no  INT UNIQUE NOT NULL,
	 email_id  VARCHAR2(255) UNIQUE NOT NULL,
	constraint CUSTOMER_PK PRIMARY KEY ( id ));


/
CREATE TABLE  bus  (
	 id  INT,
	 bus_name  VARCHAR2(45) NOT NULL,
	 bus_number  VARCHAR2(255) UNIQUE NOT NULL,
	 amount  FLOAT NOT NULL,
	 seats  INT NOT NULL,
	 status  VARCHAR2(4000) NOT NULL,
	 type  VARCHAR2(255) NOT NULL,
	constraint BUS_PK PRIMARY KEY ( id ));


/
CREATE TABLE  booking  (
	 id  INT,
	 customer_id  INT,
	 bus_id  INT NOT NULL,
	 seats_booked  INT NOT NULL,
	 date_of_travel  DATE NOT NULL,
	 time_of_booking  TIMESTAMP NOT NULL,
	 travel_route  VARCHAR2(255) NOT NULL,
	 status  VARCHAR2(4000) NOT NULL,
	 pan_card  VARCHAR2(255) NOT NULL,
	 mobile_number  INT NOT NULL,
	constraint BOOKING_PK PRIMARY KEY ( id ));


/
CREATE TABLE  passenger  (
	 id  INT NOT NULL,
	 name  INT NOT NULL,
	 customer_id  INT,
	 booking_id  INT NOT NULL,
	 gender  VARCHAR2(255) NOT NULL,
	 age  INT NOT NULL,
	 address  VARCHAR2(255) NOT NULL,
	 seat_number  INT NOT NULL,
	constraint PASSENGER_PK PRIMARY KEY ( id ));


/
CREATE TABLE  payment_detail  (
	 id  INT,
	 booking_id  INT NOT NULL,
	 customer_id  INT NOT NULL,
	 amount  INT NOT NULL,
	 payment_type  VARCHAR2(4000) NOT NULL,
	 payment_date_time  TIMESTAMP NOT NULL,
	 status  VARCHAR2(4000) NOT NULL,
	constraint PAYMENT_DETAIL_PK PRIMARY KEY ( id ));


/
CREATE TABLE  available_seat  (
	 id  INT NOT NULL,
	 date_of_travel  DATE NOT NULL,
	 b_id  INT NOT NULL,
	 available_seats  INT NOT NULL,
	constraint AVAILABLE_SEAT_PK PRIMARY KEY ( id ));


/
CREATE TABLE  stop  (
	 id  INT,
	 name  VARCHAR2(255) NOT NULL,
	constraint STOP_PK PRIMARY KEY ( id ));


/
CREATE TABLE  route  (
	 id  INT,
	 bus_id  INT,
	 stop_id  INT,
	 sequence  INT,
	 departure_time  TIMESTAMP,
	 arrival_time  TIMESTAMP,
	constraint ROUTE_PK PRIMARY KEY ( id ));


/



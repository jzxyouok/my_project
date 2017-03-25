SET NAMES 'utf8';
DROP DATABASE IF EXISTS xiaomi;
CREATE DATABASE xiaomi CHARSET=UTF8;
USE xiaomi;

CREATE TABLE detail(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(64),
    price1 FLOAT(8,2),
    price2 FLOAT(8,2),
    price3 FLOAT(8,2),
    img VARCHAR(64),
    version1  VARCHAR(2048),
    version2  VARCHAR(2048),
    version3  VARCHAR(2048),
    color1 VARCHAR(2048),
    color2 VARCHAR(2048),
    color3 VARCHAR(2048),
    color4 VARCHAR(2048)
);
INSERT INTO detail(pid,name,price1,price2,price3,img,version1,version2,version3,color1,color2,color3,color4) VALUES
(   NULL,
    '小米5c',
    '1499元',
    NULL,
    NULL,
    '5c-meiguijin!600x600.jpg',
    '3GB内存+64GB容量',
    NULL,
    NULL,
    '玫瑰金',
    '金色',
    '黑色',
    NULL
),
(   NULL,
    '小米MIX',
    '3499元',
    '3999元',
    NULL,
    'MIX-heise!600x600.jpg',
    '标准版 4GB内存+128GB容量',
    '尊享版 6GB内存+256GB容量',
    NULL,
    '黑色',
    '皓月白',
    NULL,
    NULL
),
(   NULL,
    '小米Note 2',
    '2799元',
    '3299元',
    '3499元',
    'note2-zuhe.png',
    '标准版 4GB内存+64GB容量',
    '尊享版 高配版 6GB内存+128GB容量',
    '全球版 6GB内存+128GB容量',
    '亮银黑',
    '亮黑色',
    '冰川银',
    NULL
),
(   NULL,
    '小米5s',
    '1999元',
    '2299元',
    NULL,
    'mi5s-shenhui.jpg',
    '3GB内存+64GB容量',
    '4GB内存+128GB容量',
    NULL,
    '哑光金色',
    '哑光银白',
    '玫瑰金',
    '哑光深灰'
);
 
CREATE TABLE user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    user VARCHAR(64),
    pwd VARCHAR(64)
);
INSERT INTO user(uid,user,pwd) VALUES
(   NULL,
    'admin',
    'admin'
);



#购物车详情表
CREATE TABLE cart_detail(
    cartId INT PRIMARY KEY AUTO_INCREMENT,
    uid INT,
    uname VARCHAR(64),
    pid INT,
    count INT,
    version VARCHAR(64),
    color VARCHAR(64),
    price VARCHAR(64)
);
-- INSERT INTO cart_detail VALUES
-- (NULL,100,8,2),
-- (NULL,100,15,1),
-- (NULL,100,27,3);


#订单信息
-- CREATE TABLE order(
--     oid INT PRIMARY KEY AUTO_INCREMENT,
--     rcvName VARCHAR(32),
--     rcvAddr VARCHAR(32),
--     rcvPhone VARCHAR(32),
--     price FLOAT(10,2),
--     payment INT,    #支付方式1234
--     orderTime BIGINT,
--     status INT,     #订单状态1234
--     userId INT
-- );

-- INSERT INTO order VALUES
-- (90000000,'强爸','北京市海淀区太阳小区','13345643212','38000','1','1401234123154','1','10'),
-- (NULL,'强东妈','北京市海淀区太阳小区','22345643212','38000','2','1401234126654','2','10'),
-- (NULL,'强东姐','北京市海淀区太阳小区','43345643222','138000','3','1408645123154','3','10'),
-- (NULL,'强东儿','北京市海淀区太阳小区','63345643212','238000','4','1403257123154','4','10'),
-- (NULL,'强东叔','北京市海淀区太阳小区','83344543212','338000','1','1401298763154','1','10');



-- #订单详情--保存订单中购买的商品
-- CREATE TABLE order_detail(
--     did INT PRIMARY KEY AUTO_INCREMENT,
--     orderId INT,
--     productId INT,
--     count INT
-- );

-- INSERT INTO order_detail VALUES
-- (NULL,90000000,10,2),
-- (NULL,90000000,15,1),
-- (NULL,90000001,18,3),
-- (NULL,90000002,11,5),
-- (NULL,90000002,21,1),
-- (NULL,90000003,30,3),
-- (NULL,90000003,5,2),
-- (NULL,90000003,9,1),
-- (NULL,90000004,22,2),
-- (NULL,90000005,31,2),
-- (NULL,90000006,32,2),
-- (NULL,90000005,6,2);

 
import React from 'react';
import hljs from "highlight.js";
import 'highlight.js/styles/atom-one-dark.css';
// import 'highlight.js/styles/base16/dracula.css';
// import 'highlight.js/styles/vs2015.css'
import { useEffect } from 'react'
export function DDLbase (){
    useEffect(()=> {
      hljs.highlightAll()
    //   document.querySelectorAll("code").forEach(block => {
    //     hljs.highlightElement(block);
    // })
  });
   
    const content = `
    <pre class="language-JavaScript">
      <code>
      # 查看所有的数据库
      SHOW DATABASES;
      
      # 选择某一个数据库
      USE bili;
      
      # 查看当前正在使用的数据库
      SELECT DATABASE();
      
      # 创建一个新的数据库
      -- CREATE DATABASE douyu;
      -- CREATE DATABASE IF NOT EXISTS douyu;
      -- CREATE DATABASE IF NOT EXISTS huya DEFAULT CHARACTER SET utf8mb4 #设置数据库编码
      -- 				COLLATE utf8mb4_0900_ai_ci; #设置数据库排序规则
      
      # 删除数据库
      DROP DATABASE IF EXISTS douyu;
      
      # 修改数据库的编码
      ALTER DATABASE huya CHARACTER SET = utf8 
              COLLATE = utf8_unicode_ci;
      </code>
    </pre>
    `
    return (
     <div dangerouslySetInnerHTML={{ __html: content }} />
    )
}

export function DDLtable (){
  useEffect(()=> {
    hljs.highlightAll()
  //   document.querySelectorAll("code").forEach(block => {
  //     hljs.highlightElement(block);
  // })
});
 
  const content = `
  <pre class="language-JavaScript">
    <code>
    # 查看所有的表
    SHOW TABLES;

    # 新建表
    CREATE TABLE IF NOT EXISTS \`students\` (
      \`name\` VARCHAR(10) NOT NULL,
      \`age\` int,
      \`score\` int,
      \`height\` DECIMAL(10,2),
      \`birthday\` YEAR,
      \`phoneNum\` VARCHAR(20) UNIQUE
    );

    # 删除表
    DROP TABLE IF EXISTS \`moment\`;

    # 查看表的结构
    DESC students;
    # 查看创建表的SQL语句
    SHOW CREATE TABLE \`students\`;
    -- CREATE TABLE \`students\` (
    --   \`name\` varchar(10) DEFAULT NULL,
    --   \`age\` int DEFAULT NULL,
    --   \`score\` int DEFAULT NULL
    -- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

    # 完整的创建表的语法
    CREATE TABLE IF NOT EXISTS \`users\`(
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(20) NOT NULL,
      age INT DEFAULT 0,
      phoneNum VARCHAR(20) UNIQUE DEFAULT '',
      createTime TIMESTAMP
    );

    # 修改表
    # 1.修改表的名字
    ALTER TABLE \`users\` RENAME TO \`user\`;
    # 2.添加一个新的列
    ALTER TABLE \`user\` ADD \`updateTime\` TIMESTAMP;
    # 3.修改字段的名称
    ALTER TABLE \`user\` CHANGE \`phoneNum\` \`telPhone\` VARCHAR(20);
    # 4.修改字段的类型
    ALTER TABLE \`user\` MODIFY \`name\` VARCHAR(30);
    # 5.删除某一个字段
    ALTER TABLE \`user\` DROP \`age\`;

    # 补充
    # 根据一个表结构去创建另外一张表
    CREATE TABLE \`user2\` LIKE \`user\`;
    # 根据另外一个表中的所有内容，创建一个新的表
    CREATE TABLE \`user3\` (SELECT * FROM \`user\`); 
      </code>
    </pre>
    `
    return (
     <div dangerouslySetInnerHTML={{ __html: content }} />
    )
}

export function DML (){
  useEffect(()=> {
    hljs.highlightAll()
  //   document.querySelectorAll("code").forEach(block => {
  //     hljs.highlightElement(block);
  // })
});
 
  const content = `
  <pre class="language-JavaScript">
    <code>
    # DML
    # 插入数据
    INSERT INTO \`user\` VALUES (110, 'why', '020-110110', '2020-10-20', '2020-11-11');
    INSERT INTO \`user\` (name, telPhone, createTime, updateTime)
                VALUES ('kobe', '000-1111111', '2020-10-10', '2030-10-20');
                
    INSERT INTO \`user\` (name, telPhone)
                VALUES ('lilei', '000-1111112');

    # 需求：createTime和updateTime可以自动设置值
    ALTER TABLE \`user\` MODIFY \`createTime\` TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
    ALTER TABLE \`user\` MODIFY \`updateTime\` TIMESTAMP DEFAULT CURRENT_TIMESTAMP					
                                          ON UPDATE CURRENT_TIMESTAMP;

    INSERT INTO \`user\` (name, telPhone)
                VALUES ('hmm', '000-1111212');

    INSERT INTO \`user\` (name, telPhone)
                VALUES ('lucy', '000-1121212');


    # 删除数据
    # 删除所有的数据
    DELETE FROM \`user\`;
    # 删除符合条件的数据
    DELETE FROM \`user\` WHERE id = 110;

    # 更新数据
    # 更新所有的数据
    UPDATE \`user\` SET name = 'lily', telPhone = '010-110110';
    # 更新符合条件的数据
    UPDATE \`user\` SET name = 'lily', telPhone = '010-110110' WHERE id = 115;

      </code>
    </pre>
    `
    return (
     <div dangerouslySetInnerHTML={{ __html: content }} />
    )
}

export function DQL (){
  useEffect(()=> {
    hljs.highlightAll()
  //   document.querySelectorAll("code").forEach(block => {
  //     hljs.highlightElement(block);
  // })
});
 
  const content = `
  <pre class="language-JavaScript">
    <code>
    # 创建products的表
    CREATE TABLE IF NOT EXISTS \`products\` (
      id INT PRIMARY KEY AUTO_INCREMENT,
      brand VARCHAR(20),
      title VARCHAR(100) NOT NULL,
      price DOUBLE NOT NULL,
      score DECIMAL(2,1),
      voteCnt INT,
      url VARCHAR(100),
      pid INT
    );

    # 1.基本查询
    # 查询表中所有的字段以及所有的数据
    SELECT * FROM \`products\`;
    # 查询指定的字段
    SELECT title, price FROM \`products\`;
    # 对字段结果起一个别名
    SELECT title as phoneTitle, price as currentPrice FROM \`products\`;


    # 2.where条件
    # 2.1. 条件判断语句
    # 案例：查询价格小于1000的手机
    SELECT title, price FROM \`products\` WHERE price < 1000;
    # 案例二：价格等于999的手机
    SELECT * FROM \`products\` WHERE price = 999;
    # 案例三：价格不等于999的手机
    SELECT * FROM \`products\` WHERE price != 999;
    SELECT * FROM \`products\` WHERE price <> 999;
    # 案例四：查询品牌是华为的手机
    SELECT * FROM \`products\` WHERE brand = '华为';

    # 2.2. 逻辑运算语句
    # 案例一：查询1000到2000之间的手机
    SELECT * FROM \`products\` WHERE price > 1000 AND price < 2000;
    SELECT * FROM \`products\` WHERE price > 1000 && price < 2000;
    # BETWEEN AND 包含等于
    SELECT * FROM \`products\` WHERE price BETWEEN 1099 AND 2000;

    # 案例二：价格在5000以上或者是品牌是华为的手机
    SELECT * FROM \`products\` WHERE price > 5000 || brand = '华为';

    # 将某些值设置为NULL
    -- UPDATE \`products\` SET url = NULL WHERE id >= 85 and id <= 88;
    # 查询某一个值为NULL
    SELECT * FROM \`products\` WHERE url IS NULL;
    -- SELECT * FROM \`products\` WHERE url = NULL;
    -- SELECT * FROM \`products\` WHERE url IS NOT NULL;

    # 2.3.模糊查询
    SELECT * FROM \`products\` WHERE title LIKE '%M%';
    SELECT * FROM \`products\` WHERE title LIKE '%P%';
    SELECT * FROM \`products\` WHERE title LIKE '_P%';


    # 3.对结果进行排序
    SELECT * FROM \`products\` WHERE brand = '华为' || brand = '小米' || brand = '苹果';
    SELECT * FROM \`products\` WHERE brand IN ('华为', '小米', '苹果') 
                            ORDER BY price ASC, score DESC;


    # 4.分页查询
    # LIMIT limit OFFSET offset;
    # Limit offset, limit;
    SELECT * FROM \`products\` LIMIT 20 OFFSET 0;
    SELECT * FROM \`products\` LIMIT 20 OFFSET 20;
    SELECT * FROM \`products\` LIMIT 40, 20;
      </code>
    </pre>
    `
    return (
     <div dangerouslySetInnerHTML={{ __html: content }} />
    )
}

export function GROUPBY (){
  useEffect(()=> {
    hljs.highlightAll()
  //   document.querySelectorAll("code").forEach(block => {
  //     hljs.highlightElement(block);
  // })
});
 
  const content = `
  <pre class="language-JavaScript">
    <code>
    # 1.聚合函数的使用
    # 求所有手机的价格的总和
    SELECT SUM(price) totalPrice FROM \`products\`;
    # 求一下华为手机的价格的总和
    SELECT SUM(price) FROM \`products\` WHERE brand = '华为';
    # 求华为手机的平均价格
    SELECT AVG(price) FROM \`products\` WHERE brand = '华为';
    # 最高手机的价格和最低手机的价格
    SELECT MAX(price) FROM \`products\`;
    SELECT MIN(price) FROM \`products\`;

    # 求华为手机的个数
    SELECT COUNT(*) FROM \`products\` WHERE brand = '华为';
    SELECT COUNT(*) FROM \`products\` WHERE brand = '苹果';
    SELECT COUNT(url) FROM \`products\` WHERE brand = '苹果';

    SELECT COUNT(price) FROM \`products\`;
    SELECT COUNT(DISTINCT price) FROM \`products\`;

    # 2.GROUP BY的使用
    SELECT brand, AVG(price), COUNT(*), AVG(score) FROM \`products\` GROUP BY brand;


    # 3.HAVING的使用
    SELECT brand, AVG(price) avgPrice, COUNT(*), AVG(score) FROM \`products\` GROUP BY brand HAVING avgPrice > 2000;


    # 4.需求：平均分大于7.5的手机，按照品牌进行分类，求出平均价格。
    SELECT brand, AVG(price) FROM \`products\` WHERE score > 7.5 GROUP BY brand;

      </code>
    </pre>
    `
    return (
     <div dangerouslySetInnerHTML={{ __html: content }} />
    )
}

export function FOREIGN (){
  useEffect(()=> {
    hljs.highlightAll()
  //   document.querySelectorAll("code").forEach(block => {
  //     hljs.highlightElement(block);
  // })
});
 
  const content = `
  <pre class="language-JavaScript">
    <code>
    # 1.创建brand的表和插入数据
    CREATE TABLE IF NOT EXISTS \`brand\`(
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(20) NOT NULL,
      website VARCHAR(100),
      phoneRank INT
    );

    INSERT INTO \`brand\` (name, website, phoneRank) VALUES ('华为', 'www.huawei.com', 2);
    INSERT INTO \`brand\` (name, website, phoneRank) VALUES ('苹果', 'www.apple.com', 10);
    INSERT INTO \`brand\` (name, website, phoneRank) VALUES ('小米', 'www.mi.com', 5);
    INSERT INTO \`brand\` (name, website, phoneRank) VALUES ('oppo', 'www.oppo.com', 12);

    INSERT INTO \`brand\` (name, website, phoneRank) VALUES ('京东', 'www.jd.com', 8);
    INSERT INTO \`brand\` (name, website, phoneRank) VALUES ('Google', 'www.google.com', 9);


    # 2.给brand_id设置引用brand中的id的外键约束
    # 添加一个brand_id字段
    ALTER TABLE \`products\` ADD \`brand_id\` INT;
    -- ALTER TABLE \`products\` DROP \`brand_id\`;

    # 修改brand_id为外键
    ALTER TABLE \`products\` ADD FOREIGN KEY(brand_id) REFERENCES brand(id);

    # 设置brand_id的值
    UPDATE \`products\` SET \`brand_id\` = 1 WHERE \`brand\` = '华为';
    UPDATE \`products\` SET \`brand_id\` = 2 WHERE \`brand\` = '苹果';
    UPDATE \`products\` SET \`brand_id\` = 3 WHERE \`brand\` = '小米';
    UPDATE \`products\` SET \`brand_id\` = 4 WHERE \`brand\` = 'oppo';

    # 3.修改和删除外键引用的id
    UPDATE \`brand\` SET \`id\` = 100 WHERE \`id\` = 1;


    # 4.修改brand_id关联外键时的action
    # 4.1.获取到目前的外键的名称
    SHOW CREATE TABLE \`products\`;


    -- CREATE TABLE \`products\` (
    --   \`id\` int NOT NULL AUTO_INCREMENT,
    --   \`brand\` varchar(20) DEFAULT NULL,
    --   \`title\` varchar(100) NOT NULL,
    --   \`price\` double NOT NULL,
    --   \`score\` decimal(2,1) DEFAULT NULL,
    --   \`voteCnt\` int DEFAULT NULL,
    --   \`url\` varchar(100) DEFAULT NULL,
    --   \`pid\` int DEFAULT NULL,
    --   \`brand_id\` int DEFAULT NULL,
    --   PRIMARY KEY (\`id\`),
    --   KEY \`brand_id\` (\`brand_id\`),
    --   CONSTRAINT \`products_ibfk_1\` FOREIGN KEY (\`brand_id\`) REFERENCES \`brand\` (\`id\`)
    -- ) ENGINE=InnoDB AUTO_INCREMENT=109 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

    # 4.2.根据名称将外键删除掉
    ALTER TABLE \`products\` DROP FOREIGN KEY products_ibfk_1;

    # 4.2.重新添加外键约束
    ALTER TABLE \`products\` ADD FOREIGN KEY (brand_id) REFERENCES brand(id)
                                                      ON UPDATE CASCADE
                                                      ON DELETE RESTRICT;


    UPDATE \`brand\` SET \`id\` = 100 WHERE \`id\` = 1;

      </code>
    </pre>
    `
    return (
     <div dangerouslySetInnerHTML={{ __html: content }} />
    )
}

export function JOIN (){
  useEffect(()=> {
    hljs.highlightAll()
  //   document.querySelectorAll("code").forEach(block => {
  //     hljs.highlightElement(block);
  // })
});
 
  const content = `
  <pre class="language-JavaScript">
    <code>
    # 1.获取到的是笛卡尔乘积
    SELECT * FROM \`products\`, \`brand\`;
    # 获取到的是笛卡尔乘积进行筛选
    SELECT * FROM \`products\`, \`brand\` WHERE products.brand_id = brand.id;

    # 2.左连接
    # 2.1. 查询所有的手机（包括没有品牌信息的手机）以及对应的品牌 null
    SELECT * FROM \`products\` LEFT OUTER JOIN \`brand\` ON products.brand_id = brand.id;

    # 2.2. 查询没有对应品牌数据的手机
    SELECT * FROM \`products\` LEFT JOIN \`brand\` ON products.brand_id = brand.id WHERE brand.id IS NULL;
    -- SELECT * FROM \`products\` LEFT JOIN \`brand\` ON products.brand_id = brand.id WHERE brand_id IS NULL;


    # 3.右连接
    # 3.1. 查询所有的品牌（没有对应的手机数据，品牌也显示）以及对应的手机数据；
    SELECT * FROM \`products\` RIGHT OUTER JOIN \`brand\` ON products.brand_id = brand.id;

    # 3.2. 查询没有对应手机的品牌信息
    SELECT * FROM \`products\` RIGHT JOIN \`brand\` ON products.brand_id = brand.id WHERE products.brand_id IS NULL;


    # 4.内连接
    SELECT * FROM \`products\` JOIN \`brand\` ON products.brand_id = brand.id;
    SELECT * FROM \`products\` JOIN \`brand\` ON products.brand_id = brand.id WHERE price = 8699;

    # 5.全连接
    # mysql是不支持FULL OUTER JOIN
    SELECT * FROM \`products\` FULL OUTER JOIN \`brand\` ON products.brand_id = brand.id;


    (SELECT * FROM \`products\` LEFT OUTER JOIN \`brand\` ON products.brand_id = brand.id)
    UNION
    (SELECT * FROM \`products\` RIGHT OUTER JOIN \`brand\` ON products.brand_id = brand.id)

    (SELECT * FROM \`products\` LEFT OUTER JOIN \`brand\` ON products.brand_id = brand.id WHERE brand.id IS NULL)
    UNION
    (SELECT * FROM \`products\` RIGHT OUTER JOIN \`brand\` ON products.brand_id = brand.id WHERE products.brand_id IS NULL)
      </code>
    </pre>
    `
    return (
     <div dangerouslySetInnerHTML={{ __html: content }} />
    )
}

export function MANY (){
  useEffect(()=> {
    hljs.highlightAll()
  //   document.querySelectorAll("code").forEach(block => {
  //     hljs.highlightElement(block);
  // })
});
 
  const content = `
  <pre class="language-JavaScript">
    <code>
    # 1.基本数据的模拟
    CREATE TABLE IF NOT EXISTS students(
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(20) NOT NULL,
      age INT
    );

    CREATE TABLE IF NOT EXISTS courses(
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(20) NOT NULL,
      price DOUBLE
    );

    INSERT INTO \`students\` (name, age) VALUES('why', 18);
    INSERT INTO \`students\` (name, age) VALUES('tom', 22);
    INSERT INTO \`students\` (name, age) VALUES('lilei', 25);
    INSERT INTO \`students\` (name, age) VALUES('lucy', 16);
    INSERT INTO \`students\` (name, age) VALUES('lily', 20);

    INSERT INTO \`courses\` (name, price) VALUES ('英语', 100);
    INSERT INTO \`courses\` (name, price) VALUES ('语文', 666);
    INSERT INTO \`courses\` (name, price) VALUES ('数学', 888);
    INSERT INTO \`courses\` (name, price) VALUES ('历史', 80);
    INSERT INTO \`courses\` (name, price) VALUES ('物理', 888);
    INSERT INTO \`courses\` (name, price) VALUES ('地理', 333);


    # 2.建立关系表
    CREATE TABLE IF NOT EXISTS \`students_select_courses\`(
      id INT PRIMARY KEY AUTO_INCREMENT,
      student_id INT NOT NULL,
      course_id INT NOT NULL,
      FOREIGN KEY (student_id) REFERENCES students(id) ON UPDATE CASCADE,
      FOREIGN KEY (course_id) REFERENCES courses(id) ON UPDATE CASCADE
    );

    # 3.学生选课
    # why选择了英文、数学、历史
    INSERT INTO \`students_select_courses\` (student_id, course_id) VALUES (1, 1);
    INSERT INTO \`students_select_courses\` (student_id, course_id) VALUES (1, 3);
    INSERT INTO \`students_select_courses\` (student_id, course_id) VALUES (1, 4);


    INSERT INTO \`students_select_courses\` (student_id, course_id) VALUES (3, 2);
    INSERT INTO \`students_select_courses\` (student_id, course_id) VALUES (3, 4);


    INSERT INTO \`students_select_courses\` (student_id, course_id) VALUES (5, 2);
    INSERT INTO \`students_select_courses\` (student_id, course_id) VALUES (5, 3);
    INSERT INTO \`students_select_courses\` (student_id, course_id) VALUES (5, 4);


    # 4.查询的需求
    # 4.1. 查询所有有选课的学生，选择了哪些课程
    SELECT stu.id id, stu.name stuName, stu.age stuAge, cs.id csId, cs.name csName, cs.price csPrice
    FROM \`students\` stu
    JOIN \`students_select_courses\` ssc ON stu.id = ssc.student_id
    JOIN \`courses\` cs ON ssc.course_id = cs.id;


    # 4.2. 查询所有的学生的选课情况
    SELECT stu.id id, stu.name stuName, stu.age stuAge, cs.id csId, cs.name csName, cs.price csPrice
    FROM \`students\` stu
    LEFT JOIN \`students_select_courses\` ssc ON stu.id = ssc.student_id;

    # 4.3. 哪些学生是没有选课
    SELECT stu.id id, stu.name stuName, stu.age stuAge, cs.id csId, cs.name csName, cs.price csPrice
    FROM \`students\` stu
    LEFT JOIN \`students_select_courses\` ssc ON stu.id = ssc.student_id
    LEFT JOIN \`courses\` cs ON ssc.course_id = cs.id
    WHERE cs.id IS NULL;

    # 4.4. 查询哪些课程是没有被选择的
    SELECT stu.id id, stu.name stuName, stu.age stuAge, cs.id csId, cs.name csName, cs.price csPrice
    FROM \`students\` stu
    RIGHT JOIN \`students_select_courses\` ssc ON stu.id = ssc.student_id
    RIGHT JOIN \`courses\` cs ON ssc.course_id = cs.id
    WHERE stu.id IS NULL;;

    # 4.5. 某一个学生选了哪些课程（why）
    SELECT stu.id id, stu.name stuName, stu.age stuAge, cs.id csId, cs.name csName, cs.price csPrice
    FROM \`students\` stu
    LEFT JOIN \`students_select_courses\` ssc ON stu.id = ssc.student_id
    LEFT JOIN \`courses\` cs ON ssc.course_id = cs.id
    WHERE stu.id = 2;
      </code>
    </pre>
    `
    return (
     <div dangerouslySetInnerHTML={{ __html: content }} />
    )
}

export function OBJTYPE (){
  useEffect(()=> {
    hljs.highlightAll()
  //   document.querySelectorAll("code").forEach(block => {
  //     hljs.highlightElement(block);
  // })
});
 
  const content = `
  <pre class="language-JavaScript">
    <code>
    # 将联合查询到的数据转成对象（一对多）
    SELECT 
      products.id id, products.title title, products.price price,
      JSON_OBJECT('id', brand.id, 'name', brand.name, 'website', brand.website) brand
    FROM \`products\`
    LEFT JOIN \`brand\` ON products.brand_id = brand.id;

    # 将查询到的多条数据，组织成对象，放入到一个数组中(多对多)
    SELECT 
      stu.id, stu.name, stu.age,
      JSON_ARRAYAGG(JSON_OBJECT('id', cs.id, 'name', cs.name, 'price', cs.price))
    FROM \`students\` stu
    JOIN \`students_select_courses\` ssc ON stu.id = ssc.student_id
    JOIN \`courses\` cs ON ssc.course_id = cs.id
    GROUP BY stu.id;

    SELECT * FROM products WHERE price > 6000;

      </code>
    </pre>
    `
    return (
     <div dangerouslySetInnerHTML={{ __html: content }} />
    )
}
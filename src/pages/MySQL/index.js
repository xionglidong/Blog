import React, { memo } from 'react';
import { Container } from './style';
import {DDLbase,DDLtable,DML,DQL,GROUPBY,FOREIGN,JOIN,MANY,OBJTYPE} from './hljs'
export default memo(function JavaScript() {
 
  return (
    <Container>

      <h1>{'连接MySQL'}</h1>
      <p>{'MySQL添加环境变量后终端输入\'mysql -u用户名 -p密码\' 或 \'mysql -u用户名 -p\''}</p>

      <h1>{'SQL语句'}</h1>
      <h2>{'SQL常用规范'}</h2>
      <ul>
        <li>{'通常关键字是大写的，比如CREATE、TABLE、SHOW等等'}</li>
        <li>{'一条语句结束后需要以分号;结尾'}</li>
        <li>{'如遇到关键字作为表名或字段名可以用反引号``包裹'}</li>
      </ul>

      <h1>{'操作数据库'}</h1>
      <DDLbase/>

      <h1>{'操作表'}</h1>
      <DDLtable/>

      <h1>{'对数据库的增删改'}</h1>
      <DML/>

      <h1>{'数据库查询语句'}</h1>
      <DQL/>

      <h1>{'聚合函数与分组查询'}</h1>
      <GROUPBY/>

      <h1>{'外键约束'}</h1>
      <FOREIGN/>

      <h1>{'多表查询'}</h1>
      <JOIN/>

      <h1>{'多对多关系设计'}</h1>
      <MANY/>

      <h1>{'对象和数组类型'}</h1>
      <OBJTYPE/>


    </Container>
  )
})

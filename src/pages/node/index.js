import React, { memo } from 'react';
import { Container } from './style';
import {CreateHttp,SendHttp,UploadHttp,UseKoa,ExpressMiddleware,ExpressApplication,ExpressRouter,UseExpressRouter,ExpressError} from './hljs'
export default memo(function JavaScript() {
 
  return (
    <Container>

      <h1>{'创建http服务器'}</h1>
      <CreateHttp/>

      <h1>{'http中发送网络请求'}</h1>
      <SendHttp/>

      <h1>{'http上传文件'}</h1>
      <UploadHttp/>

      <h1>{'koa框架'}</h1>
      <p>{'安装koa：npm install koa'}</p>

      <h2>{'使用koa'}</h2>
      <UseKoa/>


      

      <h1>{'express框架'}</h1>
      <h2>{'express的使用过程有两种方式：'}</h2>
      <ul>
        <li>{'方式一：通过express提供的脚手架，直接创建一个应用骨架'}</li>
        <li>{'方式二：从零搭建自己的express应用结构'}</li>
      </ul>
      <h3>{'方式一：安装express-generator'}</h3>
      <p>{'安装脚手架'}</p>
      <p>{'npm install -g express-generator'}</p>
      <p>{'创建项目'}</p>
      <p>{'express express-demo'}</p>
      <p>{'安装依赖'}</p>
      <p>{'npm install'}</p>
      <p>{'启动项目'}</p>
      <p>{'node bin/www'}</p>

      <h3>{'方式二：引用express'}</h3>
      <p>{'npm install express'}</p>
      <p>{'express本身是一个函数，他会执行第一个匹配的中间件，通过调用next才能触发下一个匹配的中间件'}</p>
      <ExpressMiddleware/>

      <h2>{'中间件应用'}</h2>
      <ExpressApplication/>

      <h2>{'路由的使用'}</h2>
      <h3>{'定义路由'}</h3>
      <ExpressRouter/>
      <h3>{'引用路由'}</h3>
      <UseExpressRouter/>

      <h2>{'express的错误处理'}</h2>
      <p>{'next如果传参的话代表错误处理，将参数传给错误处理中间件，错误处理中间件会有四个参数，第一个参数为error'}</p>
      <ExpressError/>
     

    </Container>
  )
})

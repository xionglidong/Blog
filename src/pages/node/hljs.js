import React from 'react';
import hljs from "highlight.js";
import 'highlight.js/styles/atom-one-dark.css';
// import 'highlight.js/styles/base16/dracula.css';
// import 'highlight.js/styles/vs2015.css'
import { useEffect } from 'react'
export function CreateHttp (){
    useEffect(()=> {
      hljs.highlightAll()
    //   document.querySelectorAll("code").forEach(block => {
    //     hljs.highlightElement(block);
    // })
  });
   
    const content = `
    <pre class="language-JavaScript">
      <code>
        const http = require('http');
        const url = require('url');
        const qs = require('querystring');


        //创建server的方式一
        const server1 = http.createServer((req, res) => {
          // request对象中封装了客户端给我们服务器传递过来的所有信息
          const { pathname, query } = url.parse(req.url);//url属性
          if (pathname === '/login') {
            if (req.method === 'POST') {//method属性
              console.log(query);
              console.log(qs.parse(query));
              const { username, password } = qs.parse(query);
              console.log(username, password);
              res.end("请求结果~");
            }
          }
          console.log(req.headers);//headers属性

          
          //设置状态码方式一：直接给属性赋值
          res.statusCode = 400;

          //设置状态码方式二：和Head一起设置
          res.writeHead(503)

          //设置响应的header方式一：
          res.setHeader("Content-Type", "text/plain;charset=utf8");

          //设置响应的header方式二：
          res.writeHead(200, {
            "Content-Type": "text/html;charset=utf8"
          });

          //响应结果
          res.end("<h2>Hello Server</h2>");
        });
        //创建server的方式二
        const server2 = new http.Server((req, res) => {
          res.end("Server2");
        });
        //监听服务器，并且制定端口号和主机
        server1.listen(8888, '0.0.0.0', () => {
          console.log("服务器启动成功~");
        });
      </code>
    </pre>
    `
    return (
     <div dangerouslySetInnerHTML={{ __html: content }} />
    )
}

export function SendHttp (){
    useEffect(()=> {
      hljs.highlightAll()
    //   document.querySelectorAll("code").forEach(block => {
    //     hljs.highlightElement(block);
    // })
  });
   
    const content = `
    <pre class="language-JavaScript">
      <code>
        const http = require('http');

        // http发送get请求
        http.get('http://localhost:8888', (res) => {
          res.on('data', (data) => {
            console.log(data.toString());
          });
        
          res.on('end', () => {
            console.log("获取到了所有的结果");
          })
        })
        
        // http发送post请求
        const req = http.request({
          method: 'POST',
          hostname: 'localhost',
          port: 8888
        }, (res) => {
          res.on('data', (data) => {
            console.log(data.toString());
          });
        
          res.on('end', () => {
            console.log("获取到了所有的结果");
          })
        });
        
        req.end();
           
      </code>
    </pre>
    `
    return (
     <div dangerouslySetInnerHTML={{ __html: content }} />
    )
}

export function UploadHttp (){
  useEffect(()=> {
    hljs.highlightAll()
  //   document.querySelectorAll("code").forEach(block => {
  //     hljs.highlightElement(block);
  // })
});
 
  const content = `
  <pre class="language-JavaScript">
    <code>
      const http = require('http');
      const fs = require('fs');
      const qs = require('querystring');

      //错误的做法
      const server = http.createServer((req, res) => {
        if (req.url === '/upload') {
          if (req.method === 'POST') {
            const fileWriter = fs.createWriteStream('./foo.png', {flags: 'a+'});
            // req.pipe(fileWriter);

            req.on('data', (data) => {
              // console.log(data);
              // fileWriter.write(data);
            });

            req.on('end', () => {
              console.log("文件上传成功~");
              res.end("文件上传成功~");
            })
          }
        }
      });

      //正确的做法
      const server = http.createServer((req, res) => {
        if (req.url === '/upload') {
          if (req.method === 'POST') {
            req.setEncoding('binary');
      
            let body = '';
            const totalBoundary = req.headers['content-type'].split(';')[1];
            const boundary = totalBoundary.split('=')[1];
      
            req.on('data', (data) => {
              body += data;
            });
      
            req.on('end', () => {
              console.log(body);
              // 处理body
              // 1.获取image/png的位置
              const payload = qs.parse(body, "\\r\\n", ": ");
              const type = payload["Content-Type"];
      
              // 2.开始在image/png的位置进行截取
              const typeIndex = body.indexOf(type);
              const typeLength = type.length;
              let imageData = body.substring(typeIndex + typeLength);
      
              // 3.将中间的两个空格去掉
              imageData = imageData.replace(/^\\s\\s*/, '');
      
              // 4.将最后的boundary去掉
              imageData = imageData.substring(0, imageData.indexOf(\`--\${boundary}--\`));
      
              fs.writeFile('./foo.png', imageData, 'binary', (err) => {
                res.end("文件上传成功~");
              })
            })
          }
        }
      });

      server.listen(8000, () => {
        console.log("文件上传服务器开启成功~");
      })
         
    </code>
  </pre>
  `
  return (
   <div dangerouslySetInnerHTML={{ __html: content }} />
  )
}

export function UseKoa (){
  useEffect(()=> {
    hljs.highlightAll()
  //   document.querySelectorAll("code").forEach(block => {
  //     hljs.highlightElement(block);
  // })
});
 
  const content = `
  <pre class="language-JavaScript">
    <code>
      const Koa = require('koa');
      const Router = require('koa-router');//定义路由，第三方插件：npm install koa-router
      const bodyParser = require('koa-bodyparser');//解析json参数，第三方插件：npm install koa-bodyparser 
      const multer = require('koa-multer');//解析form-data参数，第三方插件：npm install koa-multer 

      const app = new Koa();
      
      //部署静态资源
      app.use(staticAssets('./build'));

      //错误处理
      app.use((ctx, next) => {
        const isLogin = false;
        if (!isLogin) {
          ctx.app.emit('error', new Error("您还没有登录~"), ctx);
        }
      });
      
      app.on('error', (err, ctx) => {
        ctx.status = 401;
        ctx.body = err.message;
      })

      // use注册中间件
      app.use((ctx, next) => {
        if (ctx.request.url === '/login') {
          if (ctx.request.method === 'GET') {
            console.log("来到了这里~");
            ctx.response.body = "Login Success~";
          }
        } else {
          //设置内容、状态码(response可省略)
          ctx.response.status = 400;
          ctx.response.body = "other request~";
        }
      });

      //使用路由，参数解析
      const userRouter = new Router({prefix: '/users'});
      
      const upload = multer();

      userRouter.get('/:id', (ctx, next) => {
        console.log(ctx.request.params);
        console.log(ctx.request.query);
      })
      
      app.use(userRouter.routes());
      app.use(userRouter.allowedMethods());//判断方法是否实现返回对应响应信息
      app.use(bodyParser());//json参数解析，保存在ctx.request.body中
      app.use(upload.any());//form-data参数解析，保存在ctx.req.body中

      app.use((ctx, next) => {
        console.log(ctx.request.body);//request：koa自己封装的request对象
        console.log(ctx.req.body);//req：http提供的request对象
        ctx.response.body = "Hello World";
      });

      //文件上传
      const uploadRouter = new Router({prefix: '/upload'});
      const upload = multer({
        dest: './uploads/'
      });
      
      uploadRouter.post('/avatar', upload.single('avatar'), (ctx, next) => {
        console.log(ctx.req.file);
        ctx.response.body = "上传头像成功~";
      });
      
      app.use(uploadRouter.routes());

      app.listen(8000, () => {
        console.log("koa初体验服务器启动成功~");
      });
    
    </code>
  </pre>
  `
  return (
   <div dangerouslySetInnerHTML={{ __html: content }} />
  )
}


export function ExpressMiddleware (){
  useEffect(()=> {
    hljs.highlightAll()
  //   document.querySelectorAll("code").forEach(block => {
  //     hljs.highlightElement(block);
  // })
});
 
  const content = `
  <pre class="language-JavaScript">
    <code>
      const express = require('express');

      const app = express();
      
      //普通中间件
      app.use((req, res, next) => {
        console.log("common middleware 01");
        next();
      });

      //路径中间件
      app.use('/home',(req, res, next) => {
        console.log("common middleware 01");
        next();
      });
      
      //路径和方法中间件
      app.get('/home', (req, res, next) => {
        console.log("home path and method middleware 01");
        next();
      })
      
      //连续注册中间件
      app.get("/home", (req, res, next) => {
        console.log("home path and method middleware 02");
        next();
      }, (req, res, next) => {
        console.log("home path and method middleware 03");
        next();
      }, (req, res, next) => {
        console.log("home path and method middleware 04");
        res.end("home page");
      });
      
      app.listen(8000, () => {
        console.log("express初体验服务器启动成功~");
      });
         
    </code>
  </pre>
  `
  return (
   <div dangerouslySetInnerHTML={{ __html: content }} />
  )
}

export function ExpressApplication (){
  useEffect(()=> {
    hljs.highlightAll()
  //   document.querySelectorAll("code").forEach(block => {
  //     hljs.highlightElement(block);
  // })
});
 
  const content = `
  <pre class="language-JavaScript">
    <code>
      const path = require('path');//用来获取文件名

      const express = require('express');
      const multer = require('multer');//第三方库，用来解析form-data参数
      const morgan = require('morgan');//第三方库，用来保存日志

      const app = express();

      //访问静态资源
      app.use(express.static('./build'));

      //保存日志
      const writerStream = fs.createWriteStream('./logs/access.log', {
        flags: "a+"
      })
      app.use(morgan("combined", {stream: writerStream}));
      
      //response响应结果
      app.get('/login', (req, res, next) => {
        console.log(req.query);
      
        // 设置响应吗
        res.status(204);
      
        // res.type("application/json");
        // res.end(JSON.stringify({name: "why", age: 18}));
        // res.json({name: "why", age: 18})
        // 设置内容
        res.json(["abc", "cba", "abc"]);
      });

      // 自己编写的json解析
      app.use((req, res, next) => {
        if (req.headers["content-type"] === 'application/json') {
           req.on('data', (data) => {
            const info = JSON.parse(data.toString());
            req.body = info;
           })
        
           req.on('end', () => {
             next();
           })
         } else {
           next();
         }
       })
      
      
      // 使用express提供给我们的body解析
      // body-parser: express3.x 内置express框架
      // body-parser: express4.x 被分离出去
      // body-parser类似功能: express4.16.x 内置成函数
      app.use(express.json());//express的json解析
      // extended
      // true: 那么对urlencoded进行解析时, 它使用的是第三方库: qs
      // false: 那么对urlencoded进行解析时, 它使用的是Node内置模块: querystring
      app.use(express.urlencoded({extended: true}));//express的urlencoded解析
      
      app.post('/login', (req, res, next) => {
        console.log(req.body);
        res.end("Coderwhy, Welcome Back~");
      });
      
      //get请求params参数解析，如/products/123/xld
      app.get('/products/:id/:name', (req, res, next) => {
        console.log(req.params);
        // req.params => 在数据库中查询真实的商品数据
        res.end("商品的详情数据~");
      })

      //get请求query参数解析，如/login?user=xld&password=123
      app.get('/login', (req, res, next) => {
        console.log(req.query);
        res.end("用户登录成功~");
      })

      //form-data解析
      const upload = multer();
      app.post('/login', upload.any(), (req, res, next) => {
        console.log(req.body);
        res.end("用户登录成功~")
      });

      //form-data上传文件
      const storage = multer.diskStorage({
        destination: (req, file, cb) => {
          cb(null, './uploads/');
        },
        filename: (req, file, cb) => {
          cb(null, Date.now() + path.extname(file.originalname));
        }
      })

      const upload = multer({
        // dest: './uploads/'
        storage
      });

      //单个文件用upload.single('file')，取值为req.file
      app.post('/upload', upload.array('file'), (req, res, next) => {
        console.log(req.files);
        res.end("文件上传成功~");
      });

      app.listen(8000, () => {
        console.log("express初体验服务器启动成功~");
      });
         
    </code>
  </pre>
  `
  return (
   <div dangerouslySetInnerHTML={{ __html: content }} />
  )
}

export function ExpressRouter (){
  useEffect(()=> {
    hljs.highlightAll()
  //   document.querySelectorAll("code").forEach(block => {
  //     hljs.highlightElement(block);
  // })
});
 
  const content = `
  <pre class="language-JavaScript">
    <code>
      /**
       * 举个例子:
       *   请求所有的用户信息: get /users
       *   请求所有的某个用户信息: get /users/:id
       *   请求所有的某个用户信息: post /users body {username: passwod:}
       *   请求所有的某个用户信息: delete /users/:id 
       *   请求所有的某个用户信息: patch /users/:id {nickname: }
       */
      
      const express = require('express');
      
      const router = express.Router();
      
      router.get('/', (req, res, next) => {
        res.json(["why", "kobe", "lilei"]);
      });
      
      router.get('/:id', (req, res, next) => {
        res.json(\`\${req.params.id}用户的信息\`);
      });
      
      router.post('/', (req, res, next) => {
        res.json("create user success~");
      });
      
      module.exports = router;
         
    </code>
  </pre>
  `
  return (
   <div dangerouslySetInnerHTML={{ __html: content }} />
  )
}

export function UseExpressRouter (){
  useEffect(()=> {
    hljs.highlightAll()
  //   document.querySelectorAll("code").forEach(block => {
  //     hljs.highlightElement(block);
  // })
});
 
  const content = `
  <pre class="language-JavaScript">
    <code>
      const express = require('express');
      const userRouter = require('./routers/users');
      const productRouter = require('./routers/products');
      
      const app = express();
      
      app.use("/users", userRouter);
      app.use("/products", productRouter);
      
      app.listen(8000, () => {
        console.log("路由服务器启动成功~");
      });
    </code>
  </pre>
  `
  return (
   <div dangerouslySetInnerHTML={{ __html: content }} />
  )
}

export function ExpressError (){
  useEffect(()=> {
    hljs.highlightAll()
  //   document.querySelectorAll("code").forEach(block => {
  //     hljs.highlightElement(block);
  // })
});
 
  const content = `
  <pre class="language-JavaScript">
    <code>
      const express = require('express');

      const app = express();
      
      const USERNAME_DOES_NOT_EXISTS = "USERNAME_DOES_NOT_EXISTS";
      const USERNAME_ALREADY_EXISTS = "USERNAME_ALREADY_EXISTS";
      
      app.post('/login', (req, res, next) => {
        // 加入在数据中查询用户名时, 发现不存在
        const isLogin = false;
        if (isLogin) {
          res.json("user login success~");
        } else {
          // res.type(400);
          // res.json("username does not exists~")
          next(new Error(USERNAME_DOES_NOT_EXISTS));
        }
      })
      
      app.post('/register', (req, res, next) => {
        // 加入在数据中查询用户名时, 发现不存在
        const isExists = true;
        if (!isExists) {
          res.json("user register success~");
        } else {
          // res.type(400);
          // res.json("username already exists~")
          next(new Error(USERNAME_ALREADY_EXISTS));
        }
      });
      
      app.use((err, req, res, next) => {
        let status = 400;
        let message = "";
        console.log(err.message);
      
        switch(err.message) {
          case USERNAME_DOES_NOT_EXISTS:
            message = "username does not exists~";
            break;
          case USERNAME_ALREADY_EXISTS:
            message = "USERNAME_ALREADY_EXISTS~"
            break;
          default: 
            message = "NOT FOUND~"
        }
      
        res.status(status);
        res.json({
          errCode: status,
          errMessage: message
        })
      })
      
      app.listen(8000, () => {
        console.log("路由服务器启动成功~");
      });
    
    </code>
  </pre>
  `
  return (
   <div dangerouslySetInnerHTML={{ __html: content }} />
  )
}
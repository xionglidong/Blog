### 项目规范

**项目规范：项目中有一些开发规范和代码风格**

* 1.文件夹、文件名称统一小写、多个单词以连接符（-）连接；
* 2.JavaScript变量名称采用小驼峰标识，常量全部使用大写字母，组件采用大驼峰；
* 3.CSS采用普通CSS和styled-component结合来编写（全局采用普通CSS、局部采用styled-component）;
* 4.整个项目不再使用class组件，统一使用函数式组件，并且全面使用Hooks；
* 5.所有的函数式组件，为了避免不必要的渲染，全部使用memo进行包裹；



### 项目运行

clone项目：

```
git clone https://github.com/xionglidong/blog.git
```

安装项目依赖：

```
yarn install
```

项目运行：

```
yarn start
```




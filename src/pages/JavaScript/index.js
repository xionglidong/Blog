import React, { memo } from 'react';
import 'highlight.js/styles/atom-one-dark.css';
// import 'highlight.js/styles/base16/dracula.css';
// import 'highlight.js/styles/vs2015.css'
import { Container } from './style';
import {Debounce,Throttle} from './hljs'
export default memo(function JavaScript() {
 
  return (
    <Container>

      <h1>{'防抖函数'}</h1>
      <Debounce/>

      <h1>{'节流函数'}</h1>
      <Throttle/>

      <h1>{'事件冒泡'}</h1>
      <p>{'javascript的事件传播过程中，当事件在一个元素上出发之后，事件会逐级传播给先辈元素，直到document为止，有的浏览器可能到window为止，这就是事件冒泡现象。'}</p>

      <h3>{'阻止事件冒泡'}</h3>
      <p>{'平时开发过程中，会用到大量的事件冒泡事件，但是可能我们在某个子级标签不需要传递事件给父级，这时候就需要阻止它事件的冒泡。一般，使用stopPropagation来阻止事件的冒泡，'}</p>

      <h1>{'事件捕获'}</h1>
      <p>{'事件捕获恰好与事件冒泡相反，它从顶层祖先元素开始，直到事件触发元素。DOM标准同时支持捕获事件模型和冒泡事件模型，但是，捕获事件模型先发生。两种事件流都会触发DOM中的所有对象，从document对象开始，也在document对象结束。js事件捕获一般通过DOM2事件模型addEventListener来实现的：target.addEventListener(type, listener, useCapture)第三个参数默认设置为false，表示在冒泡阶段出发事件，设置为true时表示在捕获阶段触发。'}</p>

      <h1>{'undefined与null'}</h1>
      <p>{'null和undefined 两者相等，但是当两者做全等比较时，两者又不等。原因：null： Null类型，代表“空值”，代表一个空对象指针，使用typeof运算得到 “object”，所以你可以认为它是一个特殊的对象值。undefined： Undefined类型，当一个声明了一个变量未初始化时，得到的就是undefined。'}</p>

      <h1>{'map与forEach'}</h1>
      <p>{'能用forEach()做到的，map()同样可以。反过来也是如此。map()会分配内存空间存储新数组并返回，forEach()不会返回数据。forEach()允许callback更改原始数组的元素。map()返回新的数组。'}</p>

      <h1>{'call,apply,bind'}</h1>
      <p>{'bind与apply和call的最大的区别是：bind不会立即调用，而是返回一个新函数，称为绑定函数，其内的this指向为创建它时传入bind的第一个参数，而传入bind的第二个及以后的参数作为原函数的参数来调用原函数。apply的第二个参数是一个参数数组，call的第二个及其以后的参数都是数组里面的元素，就是说要全部列举出来；call的性能比apply稍微好点，尤其当参数多的时候。'}</p>

      <h1>{'箭头函数和一般函数有什么区别'}</h1>
      <ul>
        <li>{'箭头函数this指向其上下文的this，普通函数this指向调用它的对象'}</li>
        <li>{'箭头函数无argument，可以用...arg代替'}</li>
        <li>{'箭头函数不能用于构造函数被new执行'}</li>
        <li>{'箭头函数没有this，prototype，super'}</li>
      </ul>

      <h1>{'判断是否为数组'}</h1>
      <ul>
        <li>{'Object.prototype.toString.call(arr)'}</li>
        <li>{'arr instanceof Array'}</li>
        <li>{'Array.isArray(arr)'}</li>
      </ul>

      <h1>{'本地的储存'}</h1>
      <span>{'cookie sessionStorage localStorage indexDb'}</span>
      <ul>
        <li>{'cookie按设定的时间内有效，最多4k'}</li>
        <li>{'两个storage都是html5新api,存储键值对,sessionStorage会话存储,页面访问时间内有效，关闭页面失效,localStorage一直有效，关闭页面不会失效，两个都是最大5M'}</li>
        <li>{'indexdb也是h5新api，浏览器内置小型数据库。'}</li>
      </ul>

      <h1>{'闭包是什么，有什么优点和缺点'}</h1>
      <ul>
        <li>{'闭包是使用了外层函数变量的函数'}</li>
        <li>{'闭包延长了外部函数局部变量的生命周期'}</li>
        <li>{'闭包容易造成内存泄漏'}</li>
        <li>{'合理使用闭包，用完要及时销毁(赋值为null)'}</li>
      </ul>

      <h1>{'执行上下文是什么'}</h1>
      <span>{'执行上下文（execute context）EC'}</span>
      <ul>
        <li>{'理解：代码执行的环境'}</li>
        <li>{'时机：代码正式执行之前会进入到执行环境'}</li>
        <li>
          {'工作：'}
          <p>{'1.创建变量对象：变量、函数及其参数'}</p>
          <p>{'2.确认this的指向'}</p>
          <p>{'3.创建作用域链'}</p>
        </li>
      </ul> 

    </Container>
  )
})

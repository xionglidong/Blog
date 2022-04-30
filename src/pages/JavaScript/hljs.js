import React from 'react';
import hljs from "highlight.js";
import 'highlight.js/styles/atom-one-dark.css';
// import 'highlight.js/styles/base16/dracula.css';
// import 'highlight.js/styles/vs2015.css'
import { useEffect } from 'react'
export function Debounce (){
    useEffect(()=> {
      hljs.highlightAll()
    //   document.querySelectorAll("code").forEach(block => {
    //     hljs.highlightElement(block);
    // })
  });
   
    const content = `
    <pre class="language-JavaScript">
      <code>
        function debounce(fn, delay, immediate = false) {
          // 1.定义一个定时器, 保存上一次的定时器
          let timer = null
          let isInvoke = false
        
          // 2.真正执行的函数
          const _debounce = function(...args) {
            // 取消上一次的定时器
            if (timer) clearTimeout(timer)
        
            // 判断是否需要立即执行
            if (immediate && !isInvoke) {
              fn.apply(this, args)
              isInvoke = true
            } else {
              // 延迟执行
              timer = setTimeout(() => {
                // 外部传入的真正要执行的函数
                fn.apply(this, args)
                isInvoke = false
              }, delay)
            }
          }
        
          return _debounce
        }
      </code>
    </pre>
    `
    return (
     <div dangerouslySetInnerHTML={{ __html: content }} />
    )
}

export function Throttle (){
    useEffect(()=> {
      hljs.highlightAll()
    //   document.querySelectorAll("code").forEach(block => {
    //     hljs.highlightElement(block);
    // })
  });
   
    const content = `
    <pre class="language-JavaScript">
      <code>
        function throttle(fn, interval, options = { leading: true, trailing: false }) {
          // 1.记录上一次的开始时间
          const { leading, trailing } = options
          let lastTime = 0
        
          // 2.事件触发时, 真正执行的函数
          const _throttle = function() {
        
            // 2.1.获取当前事件触发时的时间
            const nowTime = new Date().getTime()
            if (!lastTime && !leading) lastTime = nowTime
        
            // 2.2.使用当前触发的时间和之前的时间间隔以及上一次开始的时间, 计算出还剩余多长事件需要去触发函数
            const remainTime = interval - (nowTime - lastTime)
            if (remainTime <= 0) {
              // 2.3.真正触发函数
              fn()
              // 2.4.保留上次触发的时间
              lastTime = nowTime
            }
          }
        
          return _throttle
        }      
      </code>
    </pre>
    `
    return (
     <div dangerouslySetInnerHTML={{ __html: content }} />
    )
}
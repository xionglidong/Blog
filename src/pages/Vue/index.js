import React, { memo } from 'react';

import { Container } from './style';

export default memo(function Vue() {
  return (
    <Container>

      <h1>{'虚拟DOM'}</h1>
      <p>{'Virtual DOM 其实就是一棵以 JavaScript 对象( VNode 节点)作为基础的树，用对象属性来描述节点，实际上它只是一层对真实 DOM 的抽象。最终可以通过一系列操作使这棵树映射到真实环境上。在数据发生更新时会使用diff算法比较新树和老树的差异，然后将差异通过Patch操作反映到真实的DOM树上'}</p>

      <h1>{'计算属性和监听器'}</h1>
      <ul>
        <li>{'watch中的函数是不需要调用的；computed内部的函数调用的时候不需要加()'}</li>
        <li>{'watch属性监听用来监听属性的变化；computed:计算属性通过属性计算而得来的属性'}</li>
        <li>{'computed 属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。主要当作属性来使用；computed中的函数必须用return返回最终的结果'}</li>
      </ul>

      <h1>{'组件通信'}</h1>
      <ul>
        <li>{'父->子:props, 子->父: 子:emit,父 on,'}</li>
        <li>{'兄弟之间: 利用一个事件中央总线bus'}</li>
        <li>{'事件总线：首先给Vue原型添加事件总线，Vue.prototype.$bus = new Vue() 发射事件：this.$bus.$emit("name") ,接收事件：this.$bus.$on("name",()=>{})取消事件：this.$bus.$off("name","回调函数name")'}</li>
      </ul>

      <h1>{'生命周期'}</h1>
      <p>{'created,mounted,updated,destroyed 再加上四个before。created时data绑定，el不可见。beforemount调用render,实例添加$el替换el后调用mounted,数据更新触发视图渲染则调用两个update,销毁实例之前调用beforedestroy。'}</p>

      <h1>{'双向绑定'}</h1>
      <p>{'Vue双向绑定 vm视图模型简单来说就是利用了Object.defineProperty(),通过劫持setter,实现model到view，view到model则是一堆事件监听 输入框的input,选择组件的 change等等'}</p>

    </Container>
  )
})

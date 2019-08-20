# vue-route-transition

仿微信app页面跳转动画,在600元骁龙632安卓测试机效果流畅,如图 

![image](https://note.youdao.com/yws/api/personal/file/DB4A718969DB4A8CAFCBF65CA9E1F982?method=download&shareKey=1d6623975889d5a673f475c40b9fe0d5)


微信公众号《IT独立开发者》,帮助程序员拓展产品、运营、设计等思维能力，开发独立产品，致力成为自由职业者，实现财富自由。
扫码关注
![image](https://note.youdao.com/yws/api/personal/file/0F213217CFF54BAB8287E5C9FA431B75?method=download&shareKey=49e6f77a81a45ba31205084d22a9eb9c)


使用Vue `<transition>` 组件过渡

```
<transition :name="this.$store.routeAction">
     <router-view/>
</transition>
```
CSS
```
.push-enter-active,.push-leave-active
, .pop-enter-active,.pop-leave-active{
  transition: all 0.4s;
}

.push-leave-to{
transform: translate(-20%,0);
}

.push-enter {
  transform: translate(100%, 0);
}
.push-enter-active {
  z-index: 10;
}
.push-leave-active {
  z-index: 0;
}
.pop-leave-active {
  transform: translate(100%, 0);
  z-index: 11;
}

.pop-enter{
  transform: translate(-20%,0);
}

```
相关文档 
https://cn.vuejs.org/v2/guide/transitions.html

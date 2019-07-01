<template>
  <div id="app">
    <transition :name="this.$store.routeAction">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  // data:function(){
  //   return {
  //     routeAction:this.$store.routeAction
  //   }
  // }
}
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;


}
* {
  margin: 0;
  padding: 0;
}

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

</style>



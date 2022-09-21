<template >

  <div id="app">
       <Transition :name="action">
         <KeepAlive>
           <component :is="currentView[currentView.length -1]"/>
         </KeepAlive>
       </Transition>
  </div>

</template>

<script setup>
 import {storeToRefs} from "pinia/dist/pinia";
 import {useRouterStore} from "@/stores";
 import {watchEffect} from "vue";

const currentViewStore = useRouterStore();
const {currentView,action} = storeToRefs(currentViewStore)

 watchEffect(()=>{
   console.log(action.value)
 })


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}

* {
  margin: 0;
  padding: 0;
}

.push-enter-active {
  transition: all 0.4s ease;
  z-index: 1;
}
.push-enter-from{
  transform: translateX(100%);
}

.push-leave-active{
  transition: all 0.4s;
  z-index: 0;
}

.pop-leave-active {
  transform: translateX(100%);
  transition: all 0.4s ease;
  z-index: 1;
}

</style>

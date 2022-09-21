<template>
  <div class="home">
    <button @click="nextPage">next page</button>
  </div>
</template>

<script setup>

import { useRouterStore } from '@/stores'
import {markRaw, onActivated, onMounted, onUnmounted} from "vue";
import AboutView from "../components/AboutView";

const store = useRouterStore()

const nextPage = ()=>{

  store.$patch(state =>{
    state.currentView.push(markRaw(AboutView));
    state.action = 'push'
  })
}

onMounted(()=> console.log('HomeView onMounted'))
onUnmounted(()=> console.log('HomeView onUnmounted'))
onActivated(()=> console.log('HomeView onActivated'))

</script>

<style scoped>
.home {
  background-color: red;
  width: 100%;
  height: 100%;
  position: fixed;
}
</style>
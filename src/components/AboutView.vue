<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="back">返回</button>
  </div>
</template>

<script setup>

import {useRouterStore} from "@/stores";
import {onMounted, onUnmounted} from "vue";


const store = useRouterStore()

onMounted(()=> console.log('AboutView onMounted'))

onUnmounted(()=> console.log('AboutView onUnmounted'))


const back = () => {
  store.$patch(state =>{
    state.currentView.pop()
    state.action = 'pop'
  })
}
</script>

<style scoped>
.about {
  background-color: green;
  width: 100%;
  height: 100%;
  position: fixed;
}
</style>
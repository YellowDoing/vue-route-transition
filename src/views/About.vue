<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="back">返回</button>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'about',


  methods:{

    back(){
         //this.$common.pop();
         this.$store.routeAction = "pop";
         this.$router.go(-1)
    }
  }
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



<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->

    <button @click="nextPage">next page</button>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "home",
  // components: {
  //   HelloWorld
  // }

  methods: {
    nextPage() {
      this.$store.routeAction = "push";
      this.$router.push({ path: "/about" });
    }
  }
};
</script>

<style scoped>
.home {
  background-color: red;
  width: 100%;
  height: 100%;
  position: fixed;
}
</style>


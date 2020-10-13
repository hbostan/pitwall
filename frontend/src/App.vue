<template>
  <div id="app">
    <Timings />
  </div>
</template>

<script>
import Timings from '@/components/Timings.vue';

export default {
  name: 'App',
  components: {
    Timings,
  },
};
</script>

<style>
#app {
  background-color: #f7f4f1;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

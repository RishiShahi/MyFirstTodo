<template>
  <h1>My Todo List</h1>
  <Todos />
</template>

<script>
 import Todos from './components/Todos.vue'

export default {
 
  components: {
    Todos
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  color: #42d392;
}
</style>

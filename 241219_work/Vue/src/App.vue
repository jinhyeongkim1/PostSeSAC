<template>
  <div id="app">
    <h1>Hello SeSAC~~</h1>
    <h1>Counter</h1>
    <p>{{ count }}</p>
    <button class="increment-btn" @click="increment">더하기</button>
    <button class="decrement-btn" @click="decrement">빼기</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    }
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
button {
  margin: 5px;
  padding: 10px;
}
.increment-btn {
  background-color: blue;  
  color: white;
}
.decrement-btn {
  background-color: red;   
  color: white;
}
</style>

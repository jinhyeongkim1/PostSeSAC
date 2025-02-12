<template>
  <div id="app">
    <h1>Hello SeSAC~~</h1>
    <h1>Counter</h1>
    <p>{{ count }}</p>
    <button class="increment-btn" @click="increment">더하기</button>
    <button class="decrement-btn" @click="decrement">빼기</button>

    <p>{{ message }}</p>
  </div>
</template>

<script>
import axios from 'axios'; 
export default {
  name: 'App',
  data() {
    return {
      count: 0,
      message: '',
    }
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    fetchData() {
      // Django API 호출
      axios.get('http://127.0.0.1:8000/api/hello/')
        .then(response => {
          this.message = response.data.message;  // API 응답 메시지를 저장
        })
        .catch(error => {
          console.error('API 호출 실패:', error);
        });
    }
  },
  mounted() {
    this.fetchData();  // 컴포넌트가 마운트되면 API 호출
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

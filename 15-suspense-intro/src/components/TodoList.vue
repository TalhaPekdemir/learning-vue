<script setup>
import {
  ref,
  // onErrorCaptured
} from "vue";

const todoData = ref([]);
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => todoData.value = json)

// onErrorCaptured((e) => {
// });
</script>


<template>
  <h1>TODOS</h1>
  <ul>
    <li v-for="todo in todoData" :key="todo.id">{{ todo.title }}</li>
  </ul>
</template>
<script setup>
import { ref } from "vue";
// asdsdasd;
const userData = ref([]);
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => userData.value = json)
</script>


<template>
  <h1>USERS</h1>
  <ul>
    <li v-for="user in userData" :key="user.id">{{ user.name }}</li>
  </ul>
</template>
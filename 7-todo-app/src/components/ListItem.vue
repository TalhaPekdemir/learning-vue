<template>
  <li class="d-flex justify-content-between align-items-center">
    <span>{{ item.text }}</span>
    <!-- basıldığında bir event oluştur ve gönder, 
            içinde bu itemi taşısın -->
    <!-- <button @click="$emit('delete-todo-item-event', item)" class="red sm">Sil</button> -->
    <button @click="removeTodo(item)" class="red sm">Sil</button>
  </li>
</template>

<script>
export default {
  props: ["item"],
  inject: ["removeTodo"]
}
</script>
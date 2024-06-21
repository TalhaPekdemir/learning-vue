<template>
  <small>{{ todoCount }}</small>
  <div class="flex justify-between">
    <small class="text-green-500">Tamamlanan: {{ completedTodoCount }}</small>
    <small class="text-red-500">Tamamlanmayan: {{ unCompletedTodoCount }}</small>
  </div>
</template>

<script>
export default {
  props: {
    todoCount: String,
    completedTodoCount: Number,
    unCompletedTodoCount: Number,
  }
}
</script>
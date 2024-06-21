<template>
  <div class="p-1 flex justify-between even:bg-yellow-300">
    <label :for="`checkbox${todo.id}`">
      <input type="checkbox" :id="`checkbox${todo.id}`" v-model="todo.completed" class="mr-2">
      <span>{{ todo.text }}</span>
    </label>
    <button class="bg-red-500 rounded-md py-1 px-3 text-white" @click="deleteTodo">Sil</button>
  </div>
</template>

<script>
export default {
  props: {
    todo: Object,
  },
  emits: ["delete-todo"],
  setup(props, context) {
    const deleteTodo = () => context.emit("delete-todo", props.todo)
    return {
      deleteTodo,
    }
  }
}
</script>
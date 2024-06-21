<template>
  <TodoItem v-for="todo in todoList" :key="todo.id" :todo="todo" @delete-todo="$emit('delete-todo', $event)" />
  <ResultBar :todoCount="todoCount" :completedTodoCount="completedTodoCount"
    :unCompletedTodoCount="unCompletedTodoCount" />
</template>

<script>
import TodoItem from '@/components/TodoItem.vue';
import ResultBar from '@/components/ResultBar.vue';
import { computed } from 'vue';

export default {
  components: {
    TodoItem,
    ResultBar
  },
  props: {
    todoList: Array,
  },
  emits: ["delete-todo"],
  setup(props) {
    const todoCount = computed(() => props.todoList.length + " adet görev bulunmaktadır.");
    const completedTodoCount = computed(() => {
      return props.todoList.filter(todo => todo.completed == true).length;
    });
    const unCompletedTodoCount = computed(() => {
      return props.todoList.filter(todo => todo.completed == false).length;
    });

    return {
      todoCount,
      completedTodoCount,
      unCompletedTodoCount,
    }
  }
}
</script>
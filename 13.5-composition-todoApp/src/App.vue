<template>
  <div class="w-screen h-screen bg-slate-400 pt-3">
    <div class="bg-yellow-200 w-1/3 mx-auto rounded-md p-2">
      <h3 class="text-2xl text-center">Todo List</h3>
      <section>
        <InputSection :addTodo="addTodo" />
      </section>
      <section>
        <TodoList :todoList="todoList" @delete-todo="deleteTodo($event)" />
      </section>
    </div>
    <pre>{{ todoList }}</pre>
  </div>
</template>

<script>
import { ref } from 'vue';
import InputSection from '@/components/InputSection.vue';
import TodoList from '@/components/TodoList.vue';

export default {
  components: {
    InputSection,
    TodoList
  },
  setup() {
    const todoList = ref([
      { id: 1, text: "TodoText1", completed: false },
      { id: 2, text: "TodoText2", completed: false },
      { id: 3, text: "TodoText3", completed: false },
    ])

    const addTodo = (e) => {
      todoList.value.push({
        id: new Date().getTime(),
        text: e.target.value,
        completed: false
      });
      e.target.value = "";
    }
    function deleteTodo(todoItem) {
      todoList.value = todoList.value.filter(todo => todo.id != todoItem.id)
    }

    return {
      todoList,
      addTodo,
      deleteTodo
    }
  }
}
</script>
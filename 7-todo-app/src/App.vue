<template>
  <div class="container">
    <h3 class="text-center">Todo App</h3>
    <!-- <InputSection @add-todo-event="addTodo" :errorClass="errorFlag"/> -->
    <InputSection :addTodo="addTodo" :errorClass="errorFlag" />
    <!-- <ListSection @delete-todo-item-event="removeTodo" :data="todoList" /> -->
    <ListSection />
    <ResultElement :count="provideData.todoList.length" />
  </div>
</template>

<script>
import InputSection from "@/components/InputSection.vue";
import ListSection from "@/components/ListSection.vue";
import ResultElement from "@/components/ResultElement.vue";

export default {
  components: {
    InputSection,
    ListSection,
    ResultElement,
  },
  data() {
    return {
      // todoList eskiden object barındıran bir array idi.
      // şimdi provide edileceği yerde değiştirileceğinden bir obje oalrk gönderiliyor.
      // bu sayede üzerinde yapıaln değişiklikler pass by reference ile
      // sağlanbilir. Bu olmazsa render düzgün çalışmaz.
      provideData: {
        todoList: [
          { id: 1, text: "Yapılacak 1" },
          { id: 2, text: "Yapılacak 2" },
          { id: 3, text: "Yapılacak 3" },
          { id: 4, text: "Yapılacak 4" },
          { id: 5, text: "Yapılacak 5" },
          { id: 6, text: "Yapılacak 6" },
          { id: 7, text: "Yapılacak 7" },
        ]
      },
      errorFlag: false,
    }
  },
  provide() {
    return {
      provideData: this.provideData,
      removeTodo: this.removeTodo
    }
  },
  methods: {
    addTodo(data) {
      if (data) {
        this.errorFlag = false;
        this.provideData.todoList.push({
          id: new Date().getTime(),
          text: data,
        });
      }
      else {
        this.errorFlag = true;
      }
      data = null;
    },
    removeTodo(todoItem) {
      // console.log('todoItem', todoItem);
      this.provideData.todoList = this.provideData.todoList.filter(t => t != todoItem);
    }
  }
}
</script>
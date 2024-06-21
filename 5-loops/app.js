const app = Vue.createApp({
  data() {
    return {
      todoList: [
        { id: 1, title: "Todo Item Number 1", completed: false },
        { id: 2, title: "Todo Item Number 2", completed: false },
        { id: 3, title: "Todo Item Number 3", completed: false },
        { id: 4, title: "Todo Item Number 4", completed: false },
        { id: 5, title: "Todo Item Number 5", completed: false },
        { id: 6, title: "Todo Item Number 6", completed: false },
        { id: 7, title: "Todo Item Number 7", completed: false },
      ],
    };
  },
  methods: {
    addItem(event) {
      this.todoList.push({
        id: Date.now(),
        title: event.target.value,
        completed: false,
      });
      event.target.value = "";
    },
    removeItem(todoItem) {
      this.todoList = this.todoList.filter((todo) => todo != todoItem);
    },
  },
  computed: {
    getCompletedCount() {
      return this.todoList.filter((todo) => todo.completed).length;
    },
    getUncompletedCount() {
      return this.todoList.filter((todo) => !todo.completed).length;
    },
  },
}).mount("#app");

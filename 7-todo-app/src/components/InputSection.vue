<template>
  <label for="todoInput"></label>
  <input type="text" placeholder="Yapılacak ekle:" :class="{ 'border-error': errorClass }"
    @keydown.enter="addTodo($event.target.value)">
</template>

<script>
export default {
  // props: ["errorClass"],
  props: {
    errorClass: {
      type: Boolean,
      required: true,
    },
    // App.vue içindeki metodu direkt referans olarak alta prop gönder.
    // type ayarladıktan sonra (varsa) paramtrelerini ver.
    addTodo: {
      type: Function,
      required: true,
    }
  },
  methods: {
    // sendData(event) {
    //     // eventler kebab-case ile yazılır
    //     this.$emit("add-todo-event", event.target.value);
    //     event.target.value = "";
    // }
  },
  computed: {
    borderErrorClass() {
      return { 'border-error': this.errorClass }
    }
  }
}
</script>

<style>
.border-error {
  border: 1px solid rgb(181, 2, 2) !important;
  color: rgb(181, 2, 2) !important;
}
</style>
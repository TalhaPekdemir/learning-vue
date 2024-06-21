<template>
  <input type="text" placeholder="Ne hatırlanmalı?" @keydown.enter="addTodo"
    class="bg-slate-100 border border-slate-500 rounded-md outline-none p-2 w-full">
</template>

<script>
export default {
  props: {
    addTodo: Function,
  }
}
</script>
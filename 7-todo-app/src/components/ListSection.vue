<template>
  <ul>
    <!-- sana bir event gelebilir, onu yakala,
            değeri de içinde ne varsa onu yakala o olsun,
            daha sonra parent ta yakalanmak üzere yeniden yayınla (eventi) -->
    <!-- <ListItem @delete-todo-item-event="$emit('delete-todo-item-event', $event)" v-for="todo in provideData.todoList"
      :key="todo.id" :item="todo"></ListItem> -->
    <ListItem v-for="todo in provideData.todoList" :key="todo.id" :item="item"></ListItem>
  </ul>
</template>

<script>
import ListItem from "@/components/ListItem.vue"
export default {
  components: {
    ListItem,
  },
  props: ["data"],
  inject: ["provideData"],
  // props alternatifi:
  // props: {
  //     data: {
  //         type: String,
  //         required: false,
  //         default: ""
  //     }
  // },
}
</script>
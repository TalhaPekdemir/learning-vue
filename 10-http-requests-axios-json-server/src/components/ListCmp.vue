<template>
  <div v-if="provideData.itemList.length > 0">
    <ul>
      <ListItem v-for="item in provideData.itemList" :key="item.id" :item="item"></ListItem>
    </ul>
    <small> {{ provideData.itemList.length }} adet alışveriş malzemesi kaldı.</small>
  </div>
  <div v-else>Sepetinizde hiçbir şey yok.</div>
</template>

<script>
import ListItem from "@/components/ListItem.vue";
export default {
  components: {
    ListItem
  },
  inject: ["provideData", "itemCount"]
}
</script>
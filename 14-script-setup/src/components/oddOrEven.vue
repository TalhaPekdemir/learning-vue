<template>
  <h3>{{ props.counter }}</h3>
  <p>{{ result }}</p>
</template>

<script setup>
import { computed, watch } from 'vue';

const props = defineProps({
  counter: Number,
});
const emit = defineEmits(["odd-event"]);
const result = computed(() => {
  return props.counter % 2 == 0 ? "Even" : "Odd";
})
watch(result, (result) => {
  result == "Odd" ? emit("odd-event", true) : emit("odd-event", false);
})
</script>
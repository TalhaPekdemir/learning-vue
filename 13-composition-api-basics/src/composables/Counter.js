import { computed, ref, watch } from 'vue';

export default function () {
   // WATCH
  const counter = ref(0);
  const oddOrEven = computed(() => {
    return counter.value % 2 == 0 ? "Çift" : "Tek";
  })

  watch([counter, oddOrEven], ([newC, newO], [oldC, oldO]) => {
    console.log("Counter: ", oldC, "->", newC);
    console.log("Tek-çift: ", oldO, "->", newO);
  });

  return { counter, oddOrEven };
}
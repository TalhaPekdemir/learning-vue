<template>
  <p class="bg-red text-white">{{ text }}</p>
</template>

<script>
export default {
  props: ["text"],
  mounted() {
    console.log("Red Mounted");
  },
  activated() {
    console.log("Red activated");
  },
  deactivated() {
    console.log("Red deactivated");
  }
}
</script>
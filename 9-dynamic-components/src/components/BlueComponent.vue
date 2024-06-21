<template>
  <p class="bg-blue text-white">Blue Component</p>
  <input type="text">
</template>

<script>
export default {
  mounted() {
    console.log("Blue Mounted");
  },
  activated() {
    console.log("Blue activated");
  },
  deactivated() {
    console.log("Blue deactivated");
  }
}
</script>
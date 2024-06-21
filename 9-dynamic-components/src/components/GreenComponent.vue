<template>
  <slot>Green Text</slot>
</template>

<script>
export default {
  mounted() {
    console.log("Green Mounted");
  },
  activated() {
    console.log("Green activated");
  },
  deactivated() {
    console.log("Green deactivated");
  }
}
</script>
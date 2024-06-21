<template>
  <input type="text" @keydown.enter="onSave">
</template>

<script>
export default {
  props: ["onSave"],
}
</script>
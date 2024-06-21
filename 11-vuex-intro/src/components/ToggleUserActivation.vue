<template>
  <button v-if="user.isActive == true" class="red sm" @click="deactivateUser(user.id)">Deaktive Et</button>
  <button v-else class="green sm" @click="activateUser(user.id)">Aktive Et</button>
</template>

<script>
export default {
  props: ["user"],
  methods: {
    activateUser(userId) {
      this.$store.commit("_activateUser", userId);
    },
    deactivateUser(userId) {
      this.$store.commit("_deactivateUser", userId);
    },
  }
}
</script>
<template>
  <input type="text" v-model="pUsername" @keydown.enter="addUser">
  <div class="d-flex justify-content-between">
    <button @click="addUser">Kullanıcı Ekle</button>
    <button @click="addUserAsync">Kullanıcı Ekle (async)</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pUsername: null
    }
  },
  methods: {
    addUser() {
      const userData = {
        id: new Date().getTime(),
        username: this.pUsername,
        isActive: 1
      }

      // commit metodu ile mutation çağırılır
      this.$store.commit("_addNewUser", userData);
    },
    addUserAsync() {
      const userData = {
        id: new Date().getTime(),
        username: this.pUsername,
        isActive: 1
      }

      // commit metodu ile mutation çağırılır
      this.$store.dispatch("_addNewUserAsync", userData);
    }
  },

}
</script>
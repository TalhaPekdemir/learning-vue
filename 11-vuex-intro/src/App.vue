<template>
  <div class="d-flex">
    <div class="container">
      <AddUserForm />
      <UserList />
    </div>
    <div class="container">
      <button @click="updateState">Değiştir</button>
      <pre>{{ this.$store.state }}</pre>
    </div>
  </div>
</template>

<script>
import AddUserForm from '@/components/AddUserForm.vue';
import UserList from '@/components/UserList.vue';
export default {
  components: {
    AddUserForm,
    UserList
  },
  created() {
    // vuex yüklendiği anda $store ile store.js içindekilere
    // erişebilecek bir keyword haline gelir.
    console.log(this.$store);
    console.log(this.$store.state.person)
  },
  methods: {
    updateState() {
      this.$store.state.theme = new Date().getTime();
    }
  },
}
</script>
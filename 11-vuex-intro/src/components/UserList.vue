<template>
  <ShowUsers :users="_getAllUsers" :countText="allCountText">
    <template #title>
      <h4>Tüm Kullanıcılar:</h4>
    </template>
  </ShowUsers>
  <hr>
  <ShowUsers :users="_getActiveUsers" :countText="activeCountText">
    <template #title>
      <h4>Aktif Kullanıcılar:</h4>
    </template>
  </ShowUsers>
</template>

<script>
import { mapGetters } from "vuex";
// import AllUsers from "@/components/AllUsers.vue";
// import ActiveUsers from "@/components/ActiveUsers.vue";
import ShowUsers from "@/components/ShowUsers.vue";
export default {
  components: {
    // AllUsers,
    // ActiveUsers,
    ShowUsers
  },
  data() {
    return {
      allCountText: "Tüm kullanıcı sayısı: ",
      activeCountText: "Aktif kullanıcı sayısı: "
    }
  },
  computed: {
    ...mapGetters(["_getAllUsers", "_getActiveUsers"])
  }
}
</script>
<template>
  <p>Aktif Kullanıcılar:</p>
  <ul>
    <li v-for="user in _getActiveUsers" :key="user.id" class="d-flex justify-content-between align-items-center">
      {{ user.username }}
      <div>
        <ToggleUserActivation :user="user" />
      </div>
    </li>
    <UserCounter>
      <template #default>
        <small class="blue d-flex justify-items-end">Aktif kullanıcı sayısı: {{ _getActiveUsers.length }}</small>
      </template>
    </UserCounter>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
import ToggleUserActivation from "@/components/ToggleUserActivation.vue";
import UserCounter from "@/components/UserCounter.vue";
export default {
  components: {
    ToggleUserActivation,
    UserCounter
  },
  computed: {
    ...mapGetters(["_getActiveUsers"])
  }
}
</script>
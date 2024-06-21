<template>
  <slot name="title"></slot>
  <ul>
    <li v-for="user in users" :key="user.id" class="d-flex justify-content-between align-items-center">
      {{ user.username }}
      <div>
        <ToggleUserActivation :user="user" />
      </div>
    </li>
    <UserCounter>
      <template #default>
        <small class="blue d-flex justify-items-end"> {{ countText }} {{ users.length }}</small>
      </template>
    </UserCounter>
  </ul>
</template>

<script>
import UserCounter from "@/components/UserCounter.vue";
import ToggleUserActivation from "@/components/ToggleUserActivation.vue";
export default {
  components: {
    UserCounter,
    ToggleUserActivation
  },
  props: ["users", "countText"]
}
</script>


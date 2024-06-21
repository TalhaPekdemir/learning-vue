const app = Vue.createApp({
  data() {
    return {
      value: "",
    };
  },
  methods: {
    alert() {
      alert();
    },
  },
}).mount("#exercise");

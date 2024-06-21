const app = Vue.createApp({
  data() {
    return {
      toggleHeading: false,
      counter: 0,
    };
  },
  computed: {
    counterClass() {
      return { "bg-danger text-white": this.counter < 0, "bg-success text-white": this.counter > 0 };
    },
  },
}).mount("#app");

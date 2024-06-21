const app = Vue.createApp({
  data() {
    return {
      bgRed: false,
      bgBlue: false,
      bgGreen: false,
      addBorder: false,
      inputColor: "",
    };
  },
  computed: {
    boxClasses() {
      return { border: this.addBorder, red: this.bgRed };
    },
  },
}).mount("#app");

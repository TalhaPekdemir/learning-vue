const app = Vue.createApp({
  data() {
    return {
      blinkingText: ">_",
    };
  },
  methods: {},
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
    setTimeout(() => {
      this.blinkingText = this.blinkingText.slice(0, -1);
    }, 1000);
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
    setTimeout(() => {
      if (this.blinkingText.slice(-1) == "_") {
        this.blinkingText = this.blinkingText.slice(0, -1);
      } else {
        this.blinkingText = this.blinkingText.concat("_");
      }
    }, 1000);
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
});

app.mount("#app");

setTimeout(() => {
  app.unmount();
}, 10000);

const app = Vue.createApp({
  data() {
    return {
      name: "TALHA PEKDEMİR",
      age: 22,
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
      imgAlt: "Vue JS logo",
      name2: "",
    };
  },
  methods: {
    randomGen() {
      return Math.random();
    },
  },
}).mount("#app");

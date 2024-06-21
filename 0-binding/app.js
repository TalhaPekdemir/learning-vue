const app = Vue.createApp({
  //propperties
  data() {
    return {
      title: "Example",
      content: "Lorem ipsum",
      array: [1, 1],
      linkStuff: {
        url: "https://google.com",
        googleAlt: "Google Link",
      },
    };
  },
  methods: {
    fibonacci() {
      this.array.push(parseInt(this.array.slice(-1)) + parseInt(this.array.slice(-2)));
    },
  },
}).mount("#app");

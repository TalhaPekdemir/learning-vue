const app = Vue.createApp({});

app.component("counter", {
  data() {
    return { counter: 0 };
  },

  template: `<div class="card" style="width: 100px; height: 100px">
    {{ counter }}
    <button @click="counter++" class="btn btn-sm btn-success">+</button>
    <button @click="counter--" class="btn btn-sm btn-danger">-</button>
  </div>`,
});

app.mount("#app");

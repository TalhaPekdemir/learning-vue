const app = Vue.createApp({
  data() {
    return {
      value: 0,
      result: "",
    };
  },
  watch: {
    value(newValue, oldValue) {
      newValue == 33 ? (this.result = "Tamamlandı") : (this.result = "Henüz bitmedi");
    },
    result() {
      setTimeout(() => {
        this.value = 0;
      }, 5000);
    },
  },
}).mount("#exercise");

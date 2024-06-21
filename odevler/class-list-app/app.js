const app = Vue.createApp({
  data() {
    return {
      bgClass: false,
      borderClass: false,
      borderRadiusClass: false,
      colorClass: false,
      fontBoldClass: false,
      fontItalicClass: false,
    };
  },
  computed: {
    textAreaClass() {
      return {
        "bg-dark": this.bgClass,
        "custom-border": this.borderClass,
        "custom-border-radius": this.borderRadiusClass,
        "text-danger": this.colorClass,
        "font-weight-bold": this.fontBoldClass,
        "font-italic": this.fontItalicClass,
      };
    },
  },
}).mount("#app");

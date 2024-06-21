const app = Vue.createApp({
  data() {
    return {
      itemList: [],
      counter: 0,
    };
  },
  created() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  },
  methods: {
    addToList() {
      this.itemList.push(new Date().getTime());
    },
  },
  computed: {
    blinkText() {
      return this.counter % 2 == 0 ? ">" : ">_";
    },
  },
  watch: {
    // izlenecek array veya referans tip obje notasyınu olarak verilir.
    itemList: {
      // ardından deep flag true yapılır
      deep: true,
      //handler değişim olduğunda yapılacakları belirtir.
      handler(itemList) {
        console.log("itemlist :>>", itemList);
      },
    },
    // bu kod çalışmaz
    // array primitive tipli değil referans tipli olduğundan vue
    // değişikliği tespit etmekte sıkıntı yaşayabilir
    // itemList(itemList) {
    //   console.log("itemlist :>>", itemlist);
    // },
  },
}).mount("#app");

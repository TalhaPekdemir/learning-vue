const app = Vue.createApp({
    data(){
        return{
            counter1: 0,
            counter2: 0,
            specialText: "> konsol  çıktıları var_",
        }
    },
    methods: {
        // checkCounter1(){
        //     console.log("1 çalıştı")
        //     return this.counter1 > 5 ? "BÜYÜK" : "KÜÇÜK";
        // },
        // checkCounter2(){
        //     console.log("2 çalıştı")
        //     return this.counter2 > 5 ? "BÜYÜK" : "KÜÇÜK";
        // }
    },

    // virtual dom vue instance içinde her değişim olduğunda sayfayı yeniden renderlar.
    // her renderlamada html deki checkCounter1 ve checkCounter2 metot olarak
    // çağırıldığından yeniden tetiklenir. Bu sebeple gereksiz yük oluşur.
    // Bunu engellemek için computed alanı altında kullanılır ve bir değer return etmek zorundadır.
    // Reactivity sağlayan elemanlardan biridir.
    computed: {
        checkCounter1() {
            console.log("1 çalıştı")
            return this.counter1 > 5 ? "BÜYÜK" : "KÜÇÜK";
        },
        checkCounter2() {
            console.log("2 çalıştı")
            return this.counter2 > 5 ? "BÜYÜK" : "KÜÇÜK";
        },
    },
    watch: {
        // izlemek istediğin prop u direkt adıyla çağır
        counter1(newValue, oldValue){
            console.log(oldValue, "->", newValue);
        },
        counter2(newValue, oldValue){
            console.log(oldValue, "->", newValue);
        },
        checkCounter1(newValue, oldValue){
            console.log(oldValue, "->", newValue);
        },
        checkCounter2(newValue, oldValue){
            console.log(oldValue, "->", newValue);
        },
        updateSpecialText(newValue, oldValue){
            setTimeout(()=>{
                if(oldValue == "> konsol  çıktıları var"){
                    this.specialText.append("_");
                }
                else{
                    this.specialText = oldValue.substring(0, -1);
                }
            }, 1000);
        },
    }
}).mount("#app");
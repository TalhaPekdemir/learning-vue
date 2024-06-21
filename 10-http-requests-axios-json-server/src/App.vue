<!-- 
  json-server --watch
 -->

<template>
  <div class="container">
    <h3 class="my-2">Alışveriş listesi</h3>
    <InputCmp :onSave="onSave"></InputCmp>
    <hr>
    <ListCmp></ListCmp>
  </div>
</template>

<script>
import axios from "axios";
import InputCmp from "@/components/InputCmp.vue";
import ListCmp from "@/components/ListCmp.vue";
export default {
  components: {
    InputCmp,
    ListCmp
  },
  data() {
    return {
      provideData: {
        itemList: []
      },
    }
  },
  provide() {
    return {
      provideData: this.provideData,
      onDelete: this.onDelete
    };
  },
  methods: {
    onSave(event) {
      const saveObject = {
        text: event.target.value,
        created_at: new Date()
      }
      // axios promise tabanlı çalışır. çalıştıktan sonra htm status,
      // gönderilen veri gibi bilgileri geri cevap olarak döndürür.
      axios.post("http://localhost:3000/items", saveObject)
        // db ye eklendiği gibi eklenen itemi itemList te de güncelle yeniden renderlansın.
        .then(response_item => this.provideData.itemList.push(response_item.data));

      event.target.value = "";
      event.target.focus()
    },
    onDelete(item) {
      axios.delete(`http://localhost:3000/items/${item.id}`)
        .then(() => { // () yerinde delete_response vardı clo ile baktık.
          this.provideData.itemList = this.provideData.itemList.filter(i => i.id !== item.id)
        })
    }
  },
  computed: {
    // bir sebepten hep 0 döndürüyor. asenkronlukla alakası olabilir.
    // itemCount() {
    //   // sorun olursa 0 döndür yoksa asıl değeri döndür.
    //   console.log("count", this.provideData.itemList.length)
    //   return this.provideData.itemList.length;
    // }
  },
  mounted() {
    // promise tabanlı olduğundan then çağırmayı unutma.
    // http get isteği çalıştır,
    // sıkıntısız dönerse datadaki değişkene ata, yoksa boş dizi ata.
    this.provideData.itemList = axios.get("http://localhost:3000/items")
      .then(items_response => {
        console.log('items_response', items_response)
        this.provideData.itemList = items_response.data
      }) || [];
  }
}
</script>
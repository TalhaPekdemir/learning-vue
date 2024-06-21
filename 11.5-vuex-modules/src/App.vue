<template>
  {{ this.$store }}
  <br>
  <p style="color: red;">Müşteri Adı: {{ musteriAdi }}</p>
  <br>
  <p style="color:green">Ürün Adı: {{ urunAdi }}</p>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  created() {
    console.log(this.$store)
  },
  computed: {
    ...mapGetters({
      musteriAdi: "musteri/_getName",
      urunAdi: "urun/_getName"
    })
  }
}
</script>
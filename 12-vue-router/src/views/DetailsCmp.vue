<template>
  <h1>Details: {{ this.$route.params.id }}</h1>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta maxime eaque ex error illum, voluptas illo assumenda
    exercitationem dolor, mollitia veritatis accusamus molestiae, numquam facilis! Illum mollitia ut temporibus dolorem!
  </p>
  <p><b>Query'den gelen isim:</b> {{ this.$route.query.name }}</p>
  <p><b>Query'den gelen yaş:</b> {{ this.$route.query.age }}</p>
  <button @click="goHome">Go Home</button>
</template>

<script>
export default {
  created() {
    console.log(this.$route)
  },
  methods: {
    goHome() {
      // bu sefer gelinen url olan route değil router ın kendisi
      //
      // push metodu dışında farklı şekillerde de yapılabilir
      this.$router.push("/")
    }
  }
}
</script>
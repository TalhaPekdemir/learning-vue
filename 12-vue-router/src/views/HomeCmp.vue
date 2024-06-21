<template>
  <h1>Home</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est a commodi dolorem dolore quia enim, facere, provident
    quam officia, maxime consequatur deleniti nostrum inventore distinctio totam molestiae. Dignissimos, culpa quis!</p>
  <input type="text" @keydown.enter="gotoDetails">
</template>

<script>
export default {
  methods: {
    gotoDetails(e) {
      // yöntem 1
      // this.$router.push(`/details/${e.target.value}`)

      // yöntem 2
      this.$router.push({
        name: "DetailsPage",
        params: {
          id: e.target.value
        },
        // parametre ile query de gönderilebilir.
        query: {
          name: "Talha Pekdemir",
          age: 22
        }
      })
    }
  }
}
</script>
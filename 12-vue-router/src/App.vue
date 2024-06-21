<script>

</script>

<template>
  <!-- <a href="/">Ana Sayfa</a>
  <a href="/about">Hakkımızda</a> -->
  <div class="container">
    <router-link to="/" class="nav-link" active-class="active-link">Anasayfa</router-link>
    <router-link to="/about" class="nav-link" active-class="active-link">Hakkımızda</router-link>
    <router-link to="/details/123" class="nav-link" active-class="active-link">Detaylar</router-link>
    <router-view></router-view>
  </div>
</template>

<style>
.nav-link {
  text-decoration: none;
  border: 1px solid #5b754e;
  color: #5b754e;
  background-color: whitesmoke;
  padding: 5px;
  margin: 2px;
  display: inline-block;
}

.active-link {
  background-color: #5b754e;
  color: whitesmoke;
}
</style>

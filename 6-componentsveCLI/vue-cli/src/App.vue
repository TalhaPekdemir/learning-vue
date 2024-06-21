<!-- Options API kullanıldı. -->
<script>
import CounterItem from './components/CounterItem.vue';
export default {
  components: {
    // CounterItem: CounterItem,
    // Babel arka planda üstteki gibi olacak şekilde açar.
    // Diğer muhtemel adlandırmalar:
    // "sayac": CounterItem
    CounterItem,
  }
};
</script>

<template>
  <app-header></app-header>
  <div class="container">
    <h3>Vue3 component</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quae doloremque eius laboriosam odit, optio cumque inventore mollitia, unde doloribus distinctio beatae officiis, nulla magnam a maiores consequuntur ut atque!</p>
  </div>
  <!-- hata yapma olasılığını azaltmak için name conversion 
       vue tarafından arka planda otomatik yapılır -->
  <!-- <sayac></sayac> -->
  <CounterItem></CounterItem>
  <CounterItem/>
  <counter-item></counter-item>
  <!-- <counter_item></counter_item> snake case arka planda reserved-->
</template>
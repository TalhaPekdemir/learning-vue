<template>
  <div>
    <h3>{{ title }}</h3>
    <input type="text" v-model="title">
  </div>

  <div>
    <h3>{{ title2 }}</h3>
    <input type="text" v-model="title2">
    {{ titleLen }}
  </div>
  <hr>
  <button @click="toggle">Toggle</button>
  <p v-if="show">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia assumenda porro nulla facilis eveniet
    placeat
    dolores delectus officiis suscipit aliquid in commodi repellat dolore, dolor obcaecati inventore? Maxime, in tempora?
  </p>
  <hr>
  <br>
  <button @click="counter++">{{ counter }} - {{ oddOrEven }}</button>
  <span style="color: red;">F12</span>
  <hr>
  <div>
    <input type="text" v-model="textWatch">
    <p v-if="isWriting">...yazıyor</p>
  </div>
</template>

<script>
import Header from "./composables/Header.js";
import Toggle from "./composables/Toggle.js";
import Search from "./composables/Search.js";
import Counter from "./composables/Counter.js";

export default {
  setup() {
    const { title, title2, titleLen } = Header();
    const { toggle, show } = Toggle();
    const { textWatch, isWriting } = Search();
    const { counter, oddOrEven } = Counter();

    // TEMPLATE İÇİNDE KULLANMAK İÇİN RETURN EDİLMELİ
    return {
      title,
      title2,
      show,
      toggle,
      titleLen,
      counter,
      oddOrEven,
      textWatch,
      isWriting,
    }
  }

}
</script>
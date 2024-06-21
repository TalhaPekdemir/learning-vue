<template>
  <div class="header">
    <!-- slot tagları içine yazılan her şey parent bir değer 
        göndermediğinde fallback olarak kullanılır. -->
    <slot name="title">Fallback</slot>
  </div>
  <hr>
  <div class="content my-2">
    <slot name="content"></slot>
  </div>
  <slot></slot>
  <hr>
  <div class="footer text-right">
    <button class="red">Çıkış</button>
    <button class="green">Kaydet</button>
  </div>
</template>
<script>
// dışarıdan erişilebilir olması için
export default {
    data() {
        return {
            counter:0,
        }
    }
}
</script>

<template>
    <div class="container-sm">
        <h3 class="mb-2"> {{ counter }}</h3>
        <button @click="counter++" class="green sm">+</button>
        <button @click="counter--" class="red sm">-</button>
    </div>
</template>
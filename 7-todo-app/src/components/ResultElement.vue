<template>
    <small class="d-flex justify-content-end my-2">Kalan Yapılacak Sayısı: {{ count }}</small>
</template>

<script>
export default {
    props: ["count"],
}
</script>
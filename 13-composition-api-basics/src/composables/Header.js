import { ref, computed } from 'vue';

export default function () {
    // DEĞİŞKEN
    const title = "Normal değişken başlık";

  // REACTIVE DEĞİŞKEN
  const title2 = ref("Reactive değişken başlık");
  // COMPUTED
  // TEK SATIR YAZIM
  // const titleLen = computed(() => title2.value.length + " karakter uzunluğunda");

  // ÇOK SATIRLI YAZIM
  const titleLen = computed(() => {
    return title2.value.length + " karakter uzunluğunda"
  });

  return { title, title2, titleLen };
}
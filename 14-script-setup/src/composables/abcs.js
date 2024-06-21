import { ref } from "vue";

export default function () {
  const title = ref("Başlık");
  const counter = ref(0);
  const inc = () => { counter.value++ };
  const bgClassToggle = ref(false);
  const setBgRedFlag = (value) => {
    bgClassToggle.value = value
  };
  return { title, counter, inc, bgClassToggle, setBgRedFlag };
}
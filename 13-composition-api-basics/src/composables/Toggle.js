import { ref } from 'vue';

export default function () {
  const show = ref(false);
  
  // FONKSİYON YAZIMI 1
  const toggle = () => {
  // reactive değişken obje olduğundan düzenlemek için değerine erişilir.
  show.value = !show.value;
  }

  // FONKSİYON YAZIMI 2
  // function toggle() {
  //   show.value = !show.value;
  // }
  
  return { toggle, show }; 
}
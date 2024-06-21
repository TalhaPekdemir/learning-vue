import { ref, watchEffect } from 'vue';

export default function () {
  // WATCHEFFECT
    const textWatch = ref("");
    const isWriting = ref(false);

    /*  TEK SEFERLİK İZLEME VE BLOKE EDİLEBİLİR İŞLEMLER İÇİN
     *  ÖRNEK KULLANIM SENARYOSU:
     *  Kullanıcı bir arama yapacak olsun.
     *  VT ye buna göre sorgu gidecek.
     *  Her harfe bastığında bir sorgu gidecek ve API yi patlatma riski doğuracak
     *  Bunun yerine yazmayı bitirip bitirmediği kontrol edilebilir (beklenerek),
     *  ardından VT ye sorgu o zaman gönderilebilir.
     */
    // bu arkadaş template içindeki input a bakacak, 
    const stopWatchingInput = watchEffect((onInvalidate) => {
      // ve içinde text var mı kontol edecek.
      if (textWatch.value.length > 0) {
        // Ardından normalde görünmez olan p tagını görünür hale getirecek.
        isWriting.value = true;

        // p tagı görünür hale geldikten sonra eğer 1.5sn boyunca girdi olmazsa
        // p, tekrar görünmez olacak.
        const sto = setTimeout(() => {
          isWriting.value = false;
          // bu arkadaş da eğer izleme işlemi yalnızca bir defa yapılmak isteniyorsa
          // watcheffect e kendinin metot olarak çağırımı negatif feedback olur
          // ve izlemeyi bloke eder.
          stopWatchingInput();
        }, 1500)

        // ***İÇERİDEKİ BİR İŞLEM BLOKE EDİLMEK İSTENDİĞİNDE CLEANUP FUNCTION ÇAĞIRMAK İÇİN***
        // bu arkadaş da her input yapıldığında textWatch değiştiğinden
        // her harf basımı ardından çalışacak olan görünür/görünmez yapma
        // işleminin her harf eklemesi ile değil de,
        // yazılmaya devam ediliyor mu? onun izlenmesi için.
        // bu sayede: harf basıldı -> değşiklik oldu -> if bloğuna girildi
        // -> yazılıyor... gösterildi -> 1.5sn beklenmeye başlandı -> tekrar et
        // , ki sürekli bekle göster komutlarını art arda almaktan flicker oluşur,
        // yerine, harf basıldı -> izle -> basılmaya devam ediliyorsa timeout u temizle
        // şekilde çalışır.
        onInvalidate(() => {
          clearTimeout(sto)
        })
      }
    })
  
  return { textWatch, isWriting };
}
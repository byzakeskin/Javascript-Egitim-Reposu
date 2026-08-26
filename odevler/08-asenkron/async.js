console.log("1");
setTimeout(function () {
  console.log("2");
}, 0); //setTimeout(() => { console.log("2"); }, 0);
console.log("3");

//Tahmin: çıktıda sırayla 1 2 3 görürüm çünkü 0 milisaniye ayarladım,
//daha yüksek bir bekleme süresi versem bile önce 1 yazılır,
//beklerim 2 yazılır ve hemen ardından 3 yazılır diye düşünüyorum.

//Gerçek: çıktı 1 3 2 şeklinde oldu

// function x (){
//     console.log(1);
// }

// setTimeout(x, 5000);

function deneme(metin, func) {
  setTimeout(() => {
    console.log(metin);
    //return func(); başta bu şekilde yazdım ama func is not a function hatası aldım
    //kodu kandırmaya karar verdim yeni satırım;
    if (func) return func();
  }, 1000);
}

deneme("metin1", () => {
  deneme("metin2", () => {
    deneme("metin3");
  });
});

//Tahmin: Her bir metin yazısı 1 saniyelik gecikme ile ekrana basılır.
//Gerçek: Tahmindeki gibi oldu ama uzun kodlarda bu şekilde iç içe geçen formatı kullanmak sağlıklı olmayacaktır.

//---------PROMISE-----------

//const promise = new Promise(function(resolve, reject) {
//   // Asynchronous work

//   if (success) {
//     resolve(value);
//   } else {
//     reject(error);
//   }
// });

function denemePromise(metin, basarisiz = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(metin);
      if (basarisiz) {
        reject(metin + " başarısız oldu");
      } else {
        resolve(metin + " tamamlandı");
      }
    }, 1000);
  });
}

//resolve
denemePromise("metin1")
  .then((sonuc) => {
    console.log("sonuç:", sonuc);
    return denemePromise("metin2");
  })
  .then((sonuc) => {
    console.log("sonuç:", sonuc);
    return denemePromise("metin3");
  })
  .then((sonuc) => {
    console.log("sonuç:", sonuc);
  })
  .catch((hata) => {
    console.log(hata);
  }); ////Tahmin: 1 saniye bekler metin1 yazar, hemen ardından sonuç: metin1 tamamlandı yazar,
//sonra tekrar 1 saniye bekler metin2 yazar, hemen ardından sonuç: metin2 tamamlandı yazar,
//sonra yine 1 saniye bekler metin3 yazar, hemen ardından sonuç: metin3 tamamlandı yazar,
//catch hiç çalışmaz çünkü basarisiz hiçbir yerde true değil.

//Gerçek:
//metin1
//sonuç: metin1 tamamlandı
//metin2
//sonuç: metin2 tamamlandı
//metin3
//sonuç: metin3 tamamlandı
//catche hiç düşmedi, üç adım da sırayla birer saniye arayla çalıştı

//reject
// denemePromise("metin1")
//     .then(sonuc => {
//         console.log("sonuç:", sonuc);
//         return denemePromise("metin2", true);
//     })
//     .then(sonuc => {
//         console.log("çalışmaz");
//         return denemePromise("metin3");
//     })
//     .catch(hata => {
//         console.log(hata);
//     }); ////Tahmin: metin1 yazacak, sonuç: metin1 tamamlandı,
//sonra metin2 ama "çalışmaz" yazısını görmeyi beklemem çünkü reject yemeli
//bir sonraki .theni de  atlayıp direkt catch'e düşmesi lazım

//Gerçek:
//metin1
//sonuç: metin1 tamamlandı
//metin2
//catche düştü
//setTimeout içindeki console.log her zaman çalışır, reject olsa bile

//-----------------------------------

denemePromise("metin1")
  .then((sonuc) => {
    console.log("1:", sonuc);
    return sonuc.length();
  })
  .then((sonuc) => {
    console.log("2:", sonuc);
    throw new Error("hata");
    return sonuc; //burayı hiç okumadığını fark ettim
  })
  .then((sonuc) => {
    console.log("3:", sonuc);
    return sonuc;
  })
  .catch((hata) => {
    console.log(hata.message);
  });

//Tahmin: sonuc.length() bir metnin uzunluğunu verir,
//onu fonksiyon gibi çağırırsam da çalışır diye düşünüyorum,
//bu yüzden "1:" yazılır, sonra ikinci
//.then'e uzunluk (bir sayı) geçer, "2:" o sayıyı basar, sonra bilerek throw
//edilen hataya catch'te hata mesajı yazılır diye düşünüyorum. Yani:
// 1: metin1 tamamlandı
// 2: <bir sayı>
// hata

//Gerçek:
//1: metin1 tamamlandı
//TypeError: sonuc.length is not a function
//"2:" satırı hiç yazılmadı, "hata" mesajı da hiç görünmedi,
//catche bir hata mesajı düştü.

//aynı zincir(length parantezsiz)

denemePromise("metin1")
  .then((sonuc) => {
    console.log("1:", sonuc);
    return sonuc.length;
  })
  .then((sonuc) => {
    console.log("2:", sonuc);
    throw new Error("hata");
    return sonuc;
  })
  .then((sonuc) => {
    console.log("3:", sonuc);
    return sonuc;
  })
  .catch((hata) => {
    console.log(hata.message);
  });

//Tahmin: bu sefer length bir metot çağrısı değil, direkt property erişimi
//olduğu için TypeError almam, "1:" ve "2:" sırayla yazılır, throw edilen
//hata da direkt catch'e düşer, 3. .then hiç çalışmaz çünkü throw zinciri kırıyor

//Gerçek:
//metin1
//1: metin1 tamamlandı
//2: 17
//hata
//3. .then hiç çalışmadı, throw edilen hata sondaki tek catch'e düştü

async function calistir() {
  try {
    let sonuc1 = await denemePromise("metin1");
    console.log("1:", sonuc1);

    let sonuc2 = denemePromise("metin2"); //await olmalıydı ama yazmıyorum buraya şu an
    console.log("2:", sonuc2);

    throw new Error("hata");
  } catch (hata) {
    console.log("catch:", hata.message);
  }
}

calistir();

//Tahmin: async fonksiyonunda, her satır otomatik olarak birbirini bekler.
//O yüzden "2:" satırının da denemePromise
//tamamlanınca, yani metin2 tamamlandıdiye yazacağını düşünüyorum. Çıktım;
// 1: metin1 tamamlandı
// metin2
// 2: metin2 tamamlandı
// catch: hata

//Gerçek:
// 1: metin1 tamamlandı
// 2: Promise { <pending> }
// catch: hata

fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
  .then((response) => response.json())
  .then((diziler) => {
    console.log(diziler);
  })
  .catch((hata) => {
    console.log("hata:", hata);
  });

fetch("https://jsonplaceholder.typicode.com/todos/bu-adres-yok-99999")
.then(response => {
   console.log("status:", response.status, "-", response.ok);

   if (!response.ok) {
       throw new Error("error status" + response.status);
   }
   return response.json();
})
.then(veri => {
   console.log("veri:", veri);
})
.catch(hata => {
   console.log("catch:", hata.message);
});
//Tahmin: //Tahmin: adres 
//bozuk olduğu için status 404 gelir
//Çıktı: 
//status: 404 - false
//catch: error status404
//yani response.ok false döndü, 
//if bloğu kendim throw ettiğim için 
//catch çalıştı, aksi halde fetch bu durumu hata saymayacaktı


fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
.then(response => {
   let veri = response.json(); // return olmadan kullanım
   console.log("veri:", veri);
});
//Tahmin: response.json() da bir Promise döndürür
//Çıktı:
//veri: Promise { <pending> }
/*
console.log("1");
setTimeout(function() {
  console.log("2");
}, 0); //setTimeout(() => { console.log("2"); }, 0); 
console.log("3");
*/

//Tahmin: çıktıda sırayla 1 2 3 görürüm çünkü 0 milisaniye ayarladım, 
//daha yüksek bir bekleme süresi versem bile önce 1 yazılır, 
//beklerim 2 yazılır ve hemen ardından 3 yazılır diye düşünüyorum.

//Gerçek: çıktı 1 3 2 şeklinde oldu

// function x (){
//     console.log(1);
// }

// setTimeout(x, 5000);

function deneme (metin, func){
    setTimeout(() => {
        console.log(metin);
        //return func(); başta bu şekilde yazdım ama func is not a function hatası aldım
        //kodu kandırmaya karar verdim yeni satırım;
        if (func) return func();
    }, 1000);
}

deneme("metin1",()=>{
     deneme("metin2",()=>{
        deneme("metin3");
    })
});

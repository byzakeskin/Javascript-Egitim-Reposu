//Web Storage API Objects
//Web storage provides two objects for storing data in the browser:

//window.localStorage - stores data with no expiration date (data is not lost when the browser tab is closed)
//window.sessionStorage - stores data for one session (data is lost when the browser tab is closed)

//localStorage.setItem(keyname, value)

localStorage.setItem("name","beyza");
localStorage.setItem("surname", "keskin");

let getValue = localStorage.getItem("name");
console.log(getValue);

localStorage.removeItem("name");

//arrays
const dizi = ["pink", "cat", 1, 2, 3];

localStorage.setItem("dizi", dizi);

const diziCikti = localStorage.getItem("dizi");

console.log(`type: ${typeof diziCikti}, value: ${diziCikti}, index0: ${diziCikti[0]}`)
//Tahminim: object - "pink", "cat", 1, 2, 3 ve pink
//Çıktı: type: string, value: pink,cat,1,2,3, index0: p

//objects
const obje = { name: "beyza", fav_color: "pink", fav_animal: "cat" };

localStorage.setItem("obje", obje);

const objeCikti = localStorage.getItem("obje");

console.log(`type: ${typeof objeCikti}, value: ${objeCikti}, index0: ${objeCikti[0]}`)
//Tahminim: object - beyza, pink, cat ve beyza
//Çıktı: type: string, value: [object Object], index0: [

//--------------------//

const dizi2 = ["pink", "cat", 1, 2, 3];

const stringifiedDizi2 = JSON.stringify(dizi2);

localStorage.setItem("dizi2", stringifiedDizi2);

const dizi2Cikti = localStorage.getItem("dizi2");

const dizi2Parsed = JSON.parse(dizi2Cikti);

console.log(`type: ${typeof dizi2Parsed}, value: ${dizi2Parsed}, index0: ${dizi2Parsed[0]}, isArray: ${Array.isArray(dizi2Parsed)}`)

//--------------------//

const denemeObj = {
    sayi: 13,
    metin: "beyza nur keskin",
    fonksiyon: function(){
        console.log("Bu bir fonksiyondur.")
    },
    bos: undefined,
    tarih: new Date()
};

console.log("karışık obje:", denemeObj);
//{sayi: 13, metin: 'beyza nur keskin', bos: undefined, tarih: Thu Aug 13 2026 16:38:45 GMT+0300 (Türkiye Standart Saati), fonksiyon: ƒ}

const stringifiedDenemeObj = JSON.stringify(denemeObj)
console.log("stringify sonrasi:", stringifiedDenemeObj)
//stringify sonrasi: {"sayi":13,"metin":"beyza nur keskin","tarih":"2026-08-13T13:42:17.392Z"}
const parsedDenemeObj = JSON.parse(stringifiedDenemeObj)
console.log("parse sonrasi:", parsedDenemeObj)
//parse sonrasi: {sayi: 13, metin: 'beyza nur keskin', tarih: '2026-08-13T13:41:48.255Z'}

//hiç yazılmamış bir key
const varolamayanKey = localStorage.getItem("olmayanKey");
console.log("Olmayan key sonucu:", varolamayanKey); //Olmayan key sonucu: null
console.log("Olmayan key'in JSON.parse'ı:", JSON.parse(varolamayanKey));
//Olmayan key'in JSON.parse'ı: null

//boş string olarak yazılmış bir key
localStorage.setItem("bosKey", "");
const bosKey = localStorage.getItem("bosKey");
console.log("Bos key sonucu:", bosKey);
//Bos key sonucu: 
//VM799:1 Uncaught SyntaxError: Unexpected end of JSON input (at VM799:1:1)
   // at JSON.parse (<anonymous>)
console.log("Bos key'in JSON.parse'ı:", JSON.parse(bosKey));
//let-const değişken tanımlama.
/*
console.log(name);
let name = "Beyza";

//reference error verir, değişken tanımlanmadan önce kullanılamaz. let ve const ile tanımlanan değişkenler hoisting yapılmaz.

console.log(age);
var age = 25;
//çalışır çünkü var ile tanımlanan değişkenler hoisting yapılır ve undefined olarak tanımlanır.

const age = 25;
age = 30;
console.log(age);
//type error verir çünkü const ile tanımlanan değişkenler değiştirilemez.

let age = 25;
age = 30;
console.log(age);
//çalışır çünkü let ile tanımlanan değişkenler değiştirilebilir.

//Temel tipler: sayı (number), yazı (string), doğru/yanlış (boolean).
let yas = 25;        
let fiyat = 199.99;   
let isim = "Beyza";  
let doğru = true;  

console.log(typeof yas);
console.log(typeof fiyat);     
console.log(typeof isim);    
console.log(typeof doğru); 
//js sayı tiplerinin hepsini number olarak tanımlar. float, double gibi tipler yoktur.

//undefined ve null
let a;
console.log(a); 
let b = null;
console.log(b); 
//undefined değişkenin tanımlanmadığını, null ise değişkenin boş olduğunu gösterir.

//== vs === farkı
let a = 5;
let b = "5";        
console.log(a == b); 
console.log(a === b); 
// == operatörü değerleri karşılaştırır ve gerekirse tip dönüşümü(coercion) yapar. Bu nedenle a ve b eşit kabul edilir. 
// === operatörü ise hem değer hem de tip karşılaştırması yapar, bu yüzden a ve b eşit değildir.

//Truthy / falsy
//C#'ta if içine sadece bool koyabiliriz. 
// Ama js'te if içine her tipten değer koyabiliriz. Bu değerler truthy veya falsy olarak değerlendirilir. 
// falsy değerler: false, 0, "", null, undefined, NaN
if (0) console.log("girmez");        // 0 
if ("") console.log("girmez");       // boş string falsy
if ("0") console.log("girer!");      // "0" bir string, boş değil
if ([]) console.log("girer!");       // boş array bile 
if ({}) console.log("girer!");       // boş object bile 

let kullaniciAdi = "";
if (kullaniciAdi) {
console.log("Hoşgeldin " + kullaniciAdi);
} else {
console.log("Kullanıcı adı boş");
} 

//Fonksiyonlar 
function cikarma(a,b){
    return a-b;
}

console.log(cikarma); //fonksiyonun kendisini yazdırır, çağırmaz.

function toplacikar(a,b){
    return a+b - cikarma(a,b);
}

console.log(toplacikar(10,5)); 

//Arrow function (=>)

// Normal fonksiyon
function carp(a, b) {
  return a * b;
}

// Arrow function
const carp = (a, b) => {
  return a * b;
};

// Tek satır
const carp = (a, b) => a * b;

console.log(carp(3, 4)); 

// Tek parametrede parantez opsiyonel
const kareAl = x => x * x;
console.log(kareAl(5)); 

//Temel string işlemleri: birleştirme, template literal
let isim = "Beyza";
let sehir = "Afyonkarahisar";

// Eski yöntem
console.log("Merhaba " + isim + ", " + sehir + "'dan mısın?");

// Template literal yöntemi
console.log(`Merhaba ${isim}, ${sehir}'dan mısın?`); 

//Array temeli: oluşturma, elemana erişme, ekleme/çıkarma.

// Literal
let meyveler = ["elma", "armut", "çilek"];

// Constructor
let bosArray = new Array();
let sayilar = new Array(1, 2, 3);

// Array.of ve Array.from
let arr1 = Array.of(5);        // [5] 
console.log(new Array(5));     // [ <5 empty items> ]
console.log(Array.of(5));      // [5] - tek elemanlı array

let arr2 = Array.from("abc");  // ["a","b","c"] - string'i array'e çevirir
let arr3 = Array.from({length: 3}, (_, i) => i * 2); // [0,2,4]

let renkler = ["kırmızı", "mavi", "yeşil"];

console.log(renkler[0]);        
console.log(renkler[renkler.length - 1]); 
console.log(renkler.at(-1));    
console.log(renkler[10]);       

renkler.length = 1;             
console.log(renkler);         

let arr = [1, 2, 3];

arr.push(4);        // sona ekle → [1,2,3,4], return: yeni length
arr.pop();           // sondan çıkar → [1,2,3], return: çıkan eleman
arr.unshift(0);      // başa ekle → [0,1,2,3], return: yeni length
arr.shift();         // baştan çıkar → [1,2,3], return: çıkan eleman

//splice - (başlangıç, kaç eleman sil, ...eklenecekler)
let sayilar = [1, 2, 3, 4, 5];
sayilar.splice(1, 2);           // index 1'den itibaren 2 eleman sil → [1,4,5]
sayilar.splice(1, 0, "a", "b"); // index 1'e sil yapmadan ekle → [1,"a","b",4,5]
sayilar.splice(1, 1, "X");      // index 1'i sil, yerine "X" koy → [1,"X","b",4,5]

//Object temeli: anahtar/değer ile veri tutma, alanlara erişme
const kullanici = {
  ad: "Beyza",
  yas: 25,
  aktif: true,
  yetenekler: ["JS", "C#", "Unity"], // içinde array olabilir
  adres: { sehir: "Afyonkarahisar", ulke: "TR" } // içinde object olabilir (nested)
};

console.log(kullanici.ad);              // nokta notasyonu
console.log(kullanici["ad"]);           // köşeli parantez notasyonu
console.log(kullanici.adres.sehir);     // nested erişim: "Afyonkarahisar"

// Dinamik key erişimi
let alanAdi = "yas";
console.log(kullanici[alanAdi]);        

const obj = { a: 1 };

obj.b = 2;              // yeni alan ekle
obj["c"] = 3;            // bu şekilde de eklenir
obj.a = 100;             // güncelleme
delete obj.b;            // silme

console.log(obj); // { a: 100, c: 3 }

// varlık kontrolü
console.log("a" in obj);              // true
console.log(obj.hasOwnProperty("a")); // true
console.log(obj.x === undefined);     // true - olmayan alan undefined döner

const kisi = { ad: "Beyza", yas: 25, sehir: "Afyonkarahisar" };

console.log(Object.keys(kisi));    
console.log(Object.values(kisi));  
console.log(Object.entries(kisi)); 


for (const [key, value] of Object.entries(kisi)) {
  console.log(`${key}: ${value}`);
}

for (const key in kisi) {
  console.log(key, kisi[key]);
}
*/
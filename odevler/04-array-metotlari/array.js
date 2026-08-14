//Array
let kedi_isim = ["Lokum", "Ponçik", "Casper", "Bal", "Felix"];
console.log(kedi_isim[0]);  //array index 0'dan başlar

kedi_isim.push("Mırmır"); //push -> array sonuna ekleme
console.log(kedi_isim);
kedi_isim.pop(); //pop -> array son elemanı silme
console.log(kedi_isim);
kedi_isim.unshift("Minnoş"); //unshift -> array başına ekleme
console.log(kedi_isim);
kedi_isim.shift(); //shift -> array başındaki elemanı silme
console.log(kedi_isim); 

// Constructor
let bosArray = new Array();
let sayilar = new Array(1, 2, 3);

// Array.of ve Array.from
let arr1 = Array.of(5);        // [5] 
console.log(new Array(5));     // [ <5 empty items> ] - 5 elemanlı BOŞ array oluşturur
console.log(Array.of(5));      // [5] - tek elemanlı array

let arr2 = Array.from("abc");  // ["a","b","c"] - string'i array'e çevirir yani Array.from(), "array benzeri" (array-like) veya "iterable" olan şeyleri gerçek bir diziye çevirir.
//"abc".split("") ile aynı sonucu verir, ama Array.from sadece string değil, Set, Map, NodeList gibi başka iterable'ları da diziye çevirebildiği için daha genel amaçlıdır.

let arr3 = Array.from({length: 3}, (_, i) => i * 2); // [0, 2, 4] - length 3 olan bir array oluşturur ve her elemanı i*2 ile doldurur 
// "_" görünce direkt anlıyorum: bu parametre kasıtlı olarak kullanılmıyor


//Array Methods

[3, 4, 5, 6].at(1); // 4
[3, 4, 5, 6].pop(); // [3, 4, 5] - array son elemanı siler
[3, 4, 5, 6].push(7); // [3, 4, 5, 6, 7] - array sonuna eleman ekler
[3, 4, 5, 6].fill(1); // [1, 1, 1, 1] - array içindeki tüm elemanları 1 ile doldurur
[3, 4, 5, 6].join("-"); // "3-4-5-6" - array elemanlarını birleştirir ve aralarına "-" ekler
[3, 4, 5, 6].shift(); // [4, 5, 6] - array başındaki elemanı siler
[3, 4, 5, 6].reverse(); // [6, 5, 4, 3] - array elemanlarını tersine çevirir
[3, 4, 5, 6].unshift(1); // [1, 3, 4, 5, 6] - array başına eleman ekler
[3, 4, 5, 6].includes(5); // true - array içinde 5 var mı diye kontrol eder
[3, 4, 5, 6].map((num) => num + 6); // [9, 10, 11, 12] - array elemanlarını belirtilen fonksiyon ile işler
[3, 4, 5, 6].find((num) => num > 4); // 5 - array içindeki ilk eşleşen elemanı döndürür
[3, 4, 5, 6].filter((num) => num > 4); // [5, 6] - array içindeki belirtilen koşulu sağlayan elemanları döndürür
[3, 4, 5, 6].every((num) => num > 5); // false - array içindeki tüm elemanlar belirtilen koşulu sağlıyorsa true döndürür
[3, 4, 5, 6].findIndex((num) => num > 4); // 2 - array içindeki ilk eşleşen elemanın indeksini döndürür
[3, 4, 5, 6].reduce((acc, num) => acc + num, 0); // 18 array içindeki tüm elemanları belirtilen fonksiyon ile birleştirir ve tek bir değer döndürür. 

//Array ++
let nums = [10,20,30];
nums.forEach((num, i) => {console.log(`Index ${i}: ${num}`);}); 
// 0: 10, 1: 20, 2: 30 - array içindeki her eleman için belirtilen fonksiyonu çalıştırır

let nums2=[1,2,3,4,5];
let hasEven = nums2.some(num => num % 2 === 0);
console.log(hasEven); 
// true - array içindeki en az bir eleman belirtilen koşulu sağlıyorsa true döndürür

let nums3=[2,4,6,8];
let allEven = nums3.every(num => num % 2 === 0);
console.log(allEven); 
// true - array içindeki tüm elemanlar belirtilen koşulu sağlıyorsa true döndürür

const nums4 = [2,5,7,1,6,8,3,9,4];
const sortedNums = nums4.sort((a, b) => a - b);
console.log(sortedNums); 
// [1, 2, 3, 4, 5, 6, 7, 8, 9] - array elemanlarını küçükten büyüğe sıralar

let array1=[1,2,3];
let array2=[4,5,6];
let combined = array1.concat(array2);
console.log(combined); 
// [1, 2, 3, 4, 5, 6] - iki array'i birleştirir

const nums5 = [1, 2, 3, 4, 5];
const sliced = nums5.slice(1, 4);
console.log(sliced); 
// [2, 3, 4] - array'in belirtilen aralıktaki elemanlarını döndürür

const nums6 = [10, 20, 30];
let spliceResult = nums6.splice(1, 1, 25);
console.log(nums6); 
// [10, 25, 30] - array'in belirtilen indeksinden başlayarak belirtilen sayıda elemanı siler ve yerine yeni eleman ekler
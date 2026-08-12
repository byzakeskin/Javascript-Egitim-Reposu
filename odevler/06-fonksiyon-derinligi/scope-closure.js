/*
//variable scope = where a variable is recognized
//                 and accessible (local vs global)

function2();

function function1(){
    let x = 1;
    console.log(x);
}

function function2(){
    let x = 2;
    console.log(x);
}

//süslü parantez içinde değişken tanımlandığında farklı kapsamlarda
//olduğu için isim çakışması olmaz. x ile yaptığım gibi aynı ada sahip
//farklı değişkenler tanımlayabilirim.

//fonksiyonlar diğer fonksiyonların içine bakamaz!


function3();

function function3(){
    let x = 1;
    console.log(y);
}

function function4(){
    let y = 2;
    console.log(x);
}

//bu durumda ReferenceError alırız. y fonksiyon3'de tanımlı değil
//fonksiyon1 y nin ne olduğunu bilmiyor çünkü onu fonksiyon4'e tanımladık

//değişkenlerin her biri (x ve y) bir fonksiyon içine tanımlandığı için
//local(yerel) scope sahip

let a = 3

functionA();

function functionA(){
    console.log(a);
}

function functionB(){
    console.log(a);
}

//burada da bir fonksiyon dışına tanımlanan 
// herhangi bir değişken global scope 
// bu yüzden local değişkenlere bağlı kalmak daha iyi

let b = 4

functionY();

function functionX(){
    let b = 1;
    console.log(b);
}

function functionY(){
    let b = 0;
    console.log(b);
}

//fonksiyon dışında değişkenim var, 
//aynı isimde iki değişken daha var
//ve bunlar farklı kapsamda o zaman önce local version kullanılır
*/

//let-const block scope

let x = 10; //global scope (herkes erişebilir)
console.log(x);

function scope() {
  console.log(x);
}

scope();

function degisken() {
  let a = 1; //yalnızca bu fonksiyon içinde erişilebilir değer (local scope)
  console.log(a);
}
degisken();


if (true) {
  console.log(x);
} //eğer console.log(a) yazsaydık: ReferenceError, çünkü başka bir fonksiyon
//içindeki (global olmayan) değere erişemiyoruz

function method() {
  if (true) {
    //blok
    let kedi = 0;
    console.log(kedi);
  }
  //Tahminim: eğer console.log(kedi); buraya yazsaydım blok içinde oluşturulan değişkene
  //fonksiyon içinden erişilmeye çalışıldığı için
  //ReferenceError hatası alırdım
}
//console.log(kedi);
//Çalıştırdığımda: ReferenceError: kedi is not defined
method();


//var - let/const farkı
if (true) {
  var lokum = "kedi";
}

console.log(lokum); //var ile ttanımladığım için erişebildim, sağlıklı değil ❌

if (true) {
  let poncik = "kedi";
}
//console.log(ponçik); 

//Tahminim: buraya yazdığımda ReferenceError alırım 
//çünkü let blok scope ve değişken blok içine let ile tanımlı 
//Çalıştırdığımda: ReferenceError: poncik is not defined


function method1() {
  let disDegisken = 45;
  function method2() {
    console.log(disDegisken);
  }
  return method2;
}

const cagir = method1();
cagir();


function tersMethod1() {
  function tersMethod2() {
    let icDegisken = 2;
  }
  console.log(icDegisken);
}

//tersMethod1(); ReferenceError aldım dıştaki fonksiyonum
// iç fonksiyondaki değere erişemedi

//method1 → method2 (dıştan içe)	✅ closure sayesinde
//tersMethod1 → tersMethod2 (içten dışa)	❌ ReferenceError

var a = 100;
{
  var a = 10; //var blok scope tanımaz
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a);
//console.log(b); -> ReferenceError: b is not defined
//sadece scope dışı erişim b isminde bir
//değişkeni bu scope'ta hiç tanımıyor
{
  console.log(x); //ReferenceError: Cannot access 'x' before initialization
  let x = 5; //burada x o blokta zaten var, sadece henüz "let x = 5" satırına
//gelinmediği için initialize edilememiş
}

//a var ile tanımlandığı için erişilebilir
//b ve c erişilemez çünkü blok dışından erişelemezler
//let & const -> block scope
//çıktı olarak a = 10 

//Shadowing 
function disFonksiyon(){
  let deger = "out";

  function icFonksiyon(){
    let deger = "in"; //adı aynı değeri farklı
    console.log(deger);
  }

  icFonksiyon();
}

disFonksiyon();

function disFonksiyon2(){
  let deger = "out2";

  function icFonksiyon2(){
    console.log(deger); //kendi scopeunda deger yok 
    // o yüzden dıştakini alır
  }

  icFonksiyon2();
}

disFonksiyon2(); //out2 yazdırmasını beklerim
//İki örnek arasındaki farklar;
//1- icFonksiyon fonksiyonu kendi degerini tanımladığı için
//dıştakini gölgeliyor 
//2- icFonksiyon2 fonksiyonu scope zincirinde yukarı çıkıp
//dıştaki degeri buluyor yani burada shadowing yok, closure var.✨
//-----//

//fonksiyon bildirimi
console.log(topla(11, 2));
function topla(a, b) {
  return a + b;
}
console.log(topla(11, 2));

//fonksiyon ifadesi
//console.log(topla2(11,2)) ->ReferenceError
const topla2 = function (a, b) {
  return a + b;
};
console.log(topla2(11, 2));

//arrow function
//console.log(topla3(11,2)) ->ReferenceError
const topla3 = (a, b) => {
  return a + b;
};
console.log(topla3(11, 2));

//CLOSURES

function sayacUret() {
  let sayac = 0;

  return function () {
    sayac += 1;
    return sayac;
  };
}

const sayac1 = sayacUret();
const sayac2 = sayacUret();

console.log(sayac1());
console.log(sayac1());
console.log(sayac1());

console.log(sayac2());

function hesapAc(baslangicBakiyesi) {
  let bakiye = baslangicBakiyesi;

  function yatir(para) {
    bakiye += para;
    console.log(`${para}₺ yatırıldı. Bakiyeniz: ${bakiye}₺`);
  }

  function cek(para) {
    if (para > bakiye) {
      console.log(
        `Paran yok? 🤨 Neden ${bakiye}₺ olan hesaptan, ${para}₺ çekmeye çalışıyosun?`,
      );
      return;
    }
    bakiye -= para;
    console.log(`${para}₺ çekildi. Bakiyeniz: ${bakiye}₺`);
  }

  function bakiyeGoster() {
    console.log(`Bakiyeniz: ${bakiye}₺`);
    return bakiye;
  }

  return { yatir, cek, bakiyeGoster };
}

const hesap = hesapAc(10);

hesap.bakiyeGoster();
hesap.yatir(5);
hesap.cek(20);
hesap.cek(10);

console.log(hesap.bakiye);
hesap.bakiye = 100;
console.log(`Gerçek paran bu mu? ${hesap.bakiye}₺ mi?`);

hesap.bakiyeGoster();

function myForEach(dizi, callback) {
  for (let i = 0; i < dizi.length; i++) {
    callback(dizi[i], i, dizi);
  }
}

function myMap(dizi, callback) {
  const sonuc = [];
  for (let i = 0; i < dizi.length; i++) {
    sonuc.push(callback(dizi[i], i, dizi));
  }
  return sonuc;
}

const rakamlar = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log("forEach:");
rakamlar.forEach((s) => console.log(s+1));

console.log("myForEach:");
myForEach(rakamlar, (s) => console.log(s+1));


console.log("map:", rakamlar.map((s) => s+1));
console.log("myMap:", myMap(rakamlar, (s) => s+1));

console.log("Orijinal dizi hâlâ aynı mı:", rakamlar);

//REDUCE
let gorevler = [
    { id: 1, metin: "ekmek al", bitti: false },
    { id: 2, metin: "faturayi ode", bitti: true }
];
// Tahminim, gorevler içinde bitti:true olan 1 eleman var,
// bu yüzden reduce sonucu 1 olmalı
const bitenGorev = gorevler.reduce((deger, gorev) => {
    if (gorev.bitti) {
        return deger + 1; 
    }
    return deger; 
}, 0); 

console.log("reduce ile biten gorev sayısı:", bitenGorev);


// Tahminim, filter().length ile de 1 çıktısı alırım
// çünkü filter bitti:true olanları eleyip yeni bir dizi döndürür,
// length de o dizinin eleman sayısını verir
const bitenGorevFilter = gorevler.filter((gorev) => gorev.bitti).length;

console.log("filter().length ile bitmiş gorev sayısı:", bitenGorevFilter);


//closure değişkenin kendisini tutuyor, çağrıldığı andaki değeri değil
console.log("let ile:");
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}

console.log("var ile:");
for (var j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 100);
}
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

/*
function3();

function function3(){
    let x = 1;
    console.log(y);
}

function function4(){
    let y = 2;
    console.log(x);
}
*/
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
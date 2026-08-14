//Array of Objects
const users = [
    { name: "Beyza", age: 25},
    { name: "Eray", age: 25},
    { name: "Ayşe", age: 20},
    { name: "Mehmet", age: 16},
    { name: "Ayşe", age: 30}
]
//users, bir array. Her elemanı bir object. Her object iki özellik (property) içeriyor: name (string) ve age (number).
//const ile tanımlandığı için users değişkeninin kendisi yeniden atanamaz (yani users = [...] diyerek başka bir diziyle değiştirilemez), 
//ama dizinin içeriğini değiştirmek (push, pop vb..) hâlâ mümkün - çünkü const sadece referansı sabitler, içeriği değil.

users.forEach((user) => {
    console.log(user.name);
});   

//forEach, dizinin her bir elemanı için verilen callback fonksiyonunu çalıştırır. 
//array.metod(...) yani users.forEach(...): "users dizisinin sahip olduğu forEach yeteneğini çalıştır." 

for (let i = 0; i < users.length; i++) {
    console.log(users[i].name);
}

//işlemi for döngüsüyle de yapabiliriz. Bunun için;
//Sayaç (i) yönetmek gerekir,
//Dizinin uzunluğunu kontrol etmek gerekir,
// İndeksle (users[i]) erişmek gerekir.
//forEach bunların hepsini otomatik yapar. 

users.map((user) => {
    console.log(user.name);
});

//forEach: sadece işlem yapar, geriye bir şey vermez
//map: her eleman için fonksiyonu çalıştırır VE sonuçları yeni bir arrayde toplar.
//Temel Fark: map yeni bir array döndürür, forEach döndürmez
//forEach → "her eleman için bunu yap" (yan etki üretir: console.log, DOM güncelleme, dış değişkeni değiştirme vs.)
//map → "her elemanı dönüştür ve bana yeni bir array ver" (dönüşüm/transform işlemi)

const adults = users.filter(user => user.age > 18);
console.table(adults);

//filter: her elemanı kontrol eder, koşulu sağlayanları yeni bir arrayde toplar ve döndürür.

const ayseUser = users.find(user => user.name === "Ayşe");
console.log(ayseUser);
//{ name: 'Ayşe', age: 20 }   → index 2'deki Ayşe, çünkü ilk eşleşen o
//find: her elemanı kontrol eder, koşulu sağlayan ilk elemanı döndürür. Eğer hiçbiri sağlanmazsa undefined döner.

const ayseIndex = users.findIndex(user => user.name === "Ayşe");
console.log(ayseIndex);
//findIndex: her elemanı kontrol eder, koşulu sağlayan ilk elemanın indexini döndürür. Eğer hiçbiri sağlanmazsa -1 döner.
//-1, geçerli bir array index'i olamaz (index'ler her zaman 0 veya pozitif). 
// Bu yüzden -1, "geçerli index'lerden biri değil, yani bulunamadı" anlamına gelen güvenli bir işaret (sentinel value) olarak seçilmiştir.

const hasTeen = users.some(user => user.age < 18);
console.log(hasTeen); // true

const allAdults = users.every(user => user.age >= 18);
console.log(allAdults); // false 

const numbers = [10, 2, 1, 3, 4, 5, 9, 6, 8, 0, 7];
console.log(numbers.sort());

//sort() parametresiz çağrıldığında her sayıyı önce string'e çevirir, sonra karakter karakter, 
//sözlük sırasına (lexicographic order) göre karşılaştırır. 
//Karşılaştırma karakter karakter yapılır: "10"'un ilk karakteri "1", "2"'nin ilk karakteri "2". "1" < "2" olduğu için
//"10" bütünüyle "2"'den küçük kabul edilir - "10"'un ikinci karakterine ("0") hiç bakılmaz, 
//çünkü ilk karakterde fark zaten belli olmuştur.

// Küçükten büyüğe
numbers.sort((a, b) => a - b);

// Büyükten küçüğe
numbers.sort((a, b) => b - a);

users.sort((a, b) => b.age - a.age);
console.table(users);

//reduce, bir diziyi gezerken bir biriktirici (accumulator) taşır ve her elemanda bu biriktiriciyi günceller, 
//sonunda tek bir değer döner.
//array.reduce((biriktirici, eleman) => yeniBiriktirici, başlangıçDeğeri)

const totalAge = users.reduce((sum, user) => sum + user.age, 0);
console.log(totalAge); 

const averageAge = users.reduce((sum, user) => sum + user.age, 0) / users.length;
console.log(averageAge);


// push()  ->  Mutate  ->   Yeni uzunluk (sayı)
// pop()  ->  Mutate  -> Çıkarılan eleman
// shift()  ->  Mutate  -> Çıkarılan eleman
// unshift()  ->  Mutate  ->  Yeni uzunluk (sayı)
// splice()  ->  Mutate  ->  Çıkarılan elemanlar (dizi)
// sort()  ->  Mutate  -> Sıralanmış dizi (aynı referans)
// reverse()  ->  Mutate  -> Ters çevrilmiş dizi (aynı referans)
// fill()  ->  Mutate  -> Doldurulmuş dizi (aynı referans)

// map()  ->   immutable  ->   Yeni dizi
// filter()  ->  immutable  ->   Yeni dizi
// slice()  ->  immutable  ->   Yeni dizi (parça)
// concat()  ->  immutable  ->   Yeni dizi (birleşmiş)
// reduce()  ->  immutable  ->   Tek değer (herhangi bir tip)
// find() / findIndex()  ->  immutable  ->   Eleman / index
// some() / every()  ->  immutable  ->   Boolean
// [...array] (spread)  ->  immutable  ->   Yeni dizi (kopya)     

// Mutate = orijinal veriyi kalıcı olarak değiştirir. 
// immutable/non-mutating = orijinal veriyi olduğu gibi bırakıp, sonucu ayrı, yeni bir veri olarak döndürür.
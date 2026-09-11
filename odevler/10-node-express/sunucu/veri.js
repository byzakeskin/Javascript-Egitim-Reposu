const kullanicilar = [
    { id: 1, ad: "Kaan Özcan" },
    { id: 2, ad: "Beyza Nur Keskin" },
    { id: 3, ad: "Lokum" },
    { id: 4, ad: "Asuman" }
];

const gonderiler = [
    { id: 1, baslik: "Node.js'e Giriş", govde: "Node.js, JavaScript'i tarayıcı dışında çalıştırır.", kullaniciId: 1 },
    { id: 2, baslik: "Express Nedir", govde: "Express, Node üstünde route tanımlamayı kolaylaştırır.", kullaniciId: 1 },
    { id: 3, baslik: "REST API Temelleri", govde: "Bir API, veriye erişim için standart yollar sunar.", kullaniciId: 2 },
    { id: 4, baslik: "JSON Formatı", govde: "JSON, veri değişimi için yaygın kullanılan bir formattır.", kullaniciId: 2 },
    { id: 5, baslik: "HTTP Metodları", govde: "GET, POST, PUT, DELETE en sık kullanılan metodlardır.", kullaniciId: 3 },
    { id: 6, baslik: "Middleware Kavramı", govde: "Middleware, istek ile cevap arasına giren bir fonksiyondur.", kullaniciId: 3 },
    { id: 7, baslik: "localStorage vs Veritabanı", govde: "localStorage tarayıcıya bağlıyken veritabanı sunucuda kalıcıdır.", kullaniciId: 4 },
    { id: 8, baslik: "Async/Await Kullanımı", govde: "Async/await, promise tabanlı kodu daha okunur hale getirir.", kullaniciId: 4 },
    { id: 9, baslik: "Port Nedir", govde: "Bir port, bir bilgisayarda çalışan servise giden kapıdır.", kullaniciId: 1 },
    { id: 10, baslik: "Fetch API", govde: "Fetch, tarayıcıdan ağ isteği atmak için kullanılır.", kullaniciId: 2 },
    { id: 11, baslik: "Route Parametreleri", govde: "Route'lar, URL'deki değişken kısımları yakalayabilir.", kullaniciId: 3 },
    { id: 12, baslik: "CORS Nedir", govde: "CORS, farklı adresler arası isteklere izin/kısıtlama koyar.", kullaniciId: 4 },
    { id: 13, baslik: "npm Paket Yönetimi", govde: "npm, Node projelerinde bağımlılıkları yönetir.", kullaniciId: 1 },
    { id: 14, baslik: "Git Dallanma", govde: "Dallar, ana koddan ayrı ilerlemeyi sağlar.", kullaniciId: 2 },
    { id: 15, baslik: "Event Delegation", govde: "Tek bir dinleyici, birçok alt elemanın olayını yakalayabilir.", kullaniciId: 3 },
    { id: 16, baslik: "Closure Nedir", govde: "Bir fonksiyon, tanımlandığı kapsamı hatırlar.", kullaniciId: 4 },
    { id: 17, baslik: "Array Metodları", govde: "map, filter, reduce; diziler üstünde sık kullanılan araçlardır.", kullaniciId: 1 },
    { id: 18, baslik: "try/catch Kullanımı", govde: "Hata yönetimi, programın çökmesini engeller.", kullaniciId: 2 }
];

module.exports = { gonderiler, kullanicilar };
const express = require("express");
const app = express();
const port = 3000;

const gonderiler = [
    { id: 1, baslik: "First", govde: "lorem ipsum", yazar: "Beyza" },
    { id: 2, baslik: "Second", govde: "lorem ipsum", yazar: "Beyza" },
    { id: 3, baslik: "Third", govde: "lorem ipsum", yazar: "Lokum" }
];

app.get("/gonderiler", function (req, res) {
    res.json(gonderiler);
});

app.listen(port, function () {
    console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});

//node index.js ile çalıştırıp http://localhost:3000/gonderiler actim
//Tahmin: oluşturduğum gonderiler dizisini json formatında göreceğim
//Gercek: diziyi json formatında görebildim

//sunucuyu durdurup ayni adresi tekrar actim
//Tahmin: sunucuyu durdurunca sayfam yüklenmeyecektir
//Gercek: Failed to Load Page ERR_CONNECTION_REFUSED (-102) URL: http://localhost:3000/gonderiler hatası verdi
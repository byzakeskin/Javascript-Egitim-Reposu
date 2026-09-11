// const express = require("express");
// const app = express();
// const port = 3000;

// const gonderiler = [
//     { id: 1, baslik: "First", govde: "lorem ipsum", yazar: "Beyza" },
//     { id: 2, baslik: "Second", govde: "lorem ipsum", yazar: "Beyza" },
//     { id: 3, baslik: "Third", govde: "lorem ipsum", yazar: "Lokum" }
// ];

// app.get("/gonderiler", function (req, res) {
//     res.json(gonderiler);
// });

// app.listen(port, function () {
//     console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
// });

// //node index.js ile çalıştırıp http://localhost:3000/gonderiler actim
// //Tahmin: oluşturduğum gonderiler dizisini json formatında göreceğim
// //Gercek: diziyi json formatında görebildim

// //sunucuyu durdurup ayni adresi tekrar actim
// //Tahmin: sunucuyu durdurunca sayfam yüklenmeyecektir
// //Gercek: Failed to Load Page ERR_CONNECTION_REFUSED (-102) URL: http://localhost:3000/gonderiler hatası verdi

const express = require("express");
const { gonderiler, kullanicilar } = require("./veri");

const app = express();
const port = 3000;

app.get("/gonderiler", function (req, res) {
    const zenginGonderiler = gonderiler.map(function (gonderi) {
        const yazar = kullanicilar.find(function (kullanici) {
            return kullanici.id === gonderi.kullaniciId;
        });

        return {
            id: gonderi.id,
            baslik: gonderi.baslik,
            govde: gonderi.govde,
            yazar: yazar ? yazar.ad : "Bilinmiyor"
        };
    });

    res.json(zenginGonderiler);
});

app.get("/gonderiler/:id", function (req, res) {
    const id = Number(req.params.id);
//Test 1: /gonderiler her kayitta yazar alani var mi
//Tahmin: Bu alanı görüntüleyebileceğimi düşünüyorum
//Gercek: Yazar isimlerini alabiliyorum, her kayitta yazar alani var
    const gonderi = gonderiler.find(function (g) {
        return g.id === id;
    });

    if (!gonderi) {
        return res.status(404).json({ hata: "gönderi bulunamadı" });
    }

    const yazar = kullanicilar.find(function (kullanici) {
        return kullanici.id === gonderi.kullaniciId;
    });

    res.json({
        id: gonderi.id,
        baslik: gonderi.baslik,
        govde: gonderi.govde,
        yazar: yazar ? yazar.ad : "Bilinmiyor"
    });
});

app.get("/kullanicilar", function (req, res) {
    res.json(kullanicilar);
});
//Test 2: /kullanicilar ham kullanici listesini donuyor mu
//Tahmin: id ve ad alanlarını görüntüleyebilirim
//Gercek: Evet, ham kullanıcı listesini döndürüyor
app.listen(port, function () {
    console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});


//Test 3: var olan bir id, ornegin /gonderiler/3
//Tahmin: Var olan id'ye ait gönderiyi ve yazarını görebileceğimi düşünüyorum
//Gercek: Evet, var olan id'ye ait gönderiyi ve yazarını görebiliyorum çünkü tanımlı

//Test 4: olmayan bir id, /gonderiler/999
//Tahmin: 404 hatası alacağımı düşünüyorum çünkü böyle bir id tanımlamadım
//Gercek: Evet, 404 hatası alıyorum
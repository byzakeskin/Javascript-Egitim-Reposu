const gorevler = [
    { id: 1, metin: "ekmek al", bitti: false },
    { id: 2, metin: "faturayi ode", bitti: true }
];

function filterSplice(hedefId) {
    const dizi1 = [...gorevler];
    const dizi2 = [...gorevler];

    console.log("filter:", dizi1);
    const filtrelenmis = dizi1.filter(function (g) {
        return g.id !== hedefId;
    });
    console.log("after lifter:", filtrelenmis);
    console.log("original array:", dizi1);

    console.log("splice:", dizi2);
    const index = dizi2.findIndex(function (g) {
        return g.id === hedefId;
    });
    console.log("index:", index);

    if (index !== -1) {
        const cikarilan = dizi2.splice(index, 1);
        console.log("splice ile çıkarılan:", cikarilan);
    } else {
        console.log("bu id dizide yok");
    }
    console.log("after splice:", dizi2);
}

filterSplice(9999999999999999);
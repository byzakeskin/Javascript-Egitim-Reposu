const storageKey = "gorevler";

function kaydet() {
    localStorage.setItem(storageKey, JSON.stringify(gorevler));
}

function yukle() {
    const kayit = localStorage.getItem(storageKey);

    if (!kayit) {
        return [
            { id: 1, metin: "ekmek al", bitti: false },
            { id: 2, metin: "faturayi ode", bitti: true }
        ];
    }

    try {
        return JSON.parse(kayit);
    } catch (hata) {
        console.log("Hata:", hata.message);
        return [];
    }
}

let gorevler = yukle();

const input = document.querySelector("#task-input");
const addBtn = document.querySelector("#add-btn");
const liste = document.querySelector(".card-body ul");
const deleteAllBtn = document.querySelector("#delete-all-btn");

function render() {
    kaydet();

    liste.textContent = "";

    const liElemanlari = gorevler.map(function (gorev) {
        const li = document.createElement("li");
        li.dataset.id = gorev.id;

        const metinSpan = document.createElement("span");
        metinSpan.textContent = gorev.metin;

        if (gorev.bitti) {
            metinSpan.classList.add("completed");
        }

        li.appendChild(metinSpan);

        const silBtn = document.createElement("button");
        silBtn.textContent = "Delete";
        silBtn.classList.add("delete-btn");

        li.appendChild(silBtn);
        return li;
    });

    liElemanlari.forEach(function (li) {
        liste.appendChild(li);
    });
}

liste.addEventListener("click", function (e) {
    const li = e.target.closest("li");
    if (!li) return;

    const id = Number(li.dataset.id);

    if (e.target.classList.contains("delete-btn")) {
        gorevSil(id);
    } else {
        gorevTamamla(id);
    }
});

function gorevTamamla(id) {
    gorevler = gorevler.map(function (gorev) {
        if (gorev.id === id) {
            return { ...gorev, bitti: !gorev.bitti };
        }
        return gorev;
    });
    render();
}

function gorevSil(id) {
    gorevler = gorevler.filter(function (gorev) {
        return gorev.id !== id;
    });
    render();
}

addBtn.addEventListener("click", function () {
    const yeniMetin = input.value.trim();

    if (yeniMetin === "") {
        return;
    }

    gorevler.push({
        id: Date.now(),
        metin: yeniMetin,
        bitti: false
    });

    render();
    input.value = "";
});

deleteAllBtn.addEventListener("click", function () {
    gorevler = [];
    render();
});

render();
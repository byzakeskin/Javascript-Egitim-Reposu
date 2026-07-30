let gorevler = [
    { id: 1, metin: "ekmek al", bitti: false },
    { id: 2, metin: "faturayi ode", bitti: true }
];

const input = document.querySelector("#task-input");
const addBtn = document.querySelector("#add-btn");
const liste = document.querySelector(".card-body ul");
const deleteAllBtn = document.querySelector("#delete-all-btn");

function render() {
    liste.textContent = "";

    const liElemanlari = gorevler.map(function (gorev) {
        const li = document.createElement("li");

        const metinSpan = document.createElement("span");
        metinSpan.textContent = gorev.metin;

        if (gorev.bitti) {
            metinSpan.classList.add("completed");
        } else {
            metinSpan.classList.remove("completed");
        }

        li.appendChild(metinSpan);

        li.addEventListener("click", function () {
            gorevTamamla(gorev.id);
        });

        const silBtn = document.createElement("button");
        silBtn.textContent = "Delete";
        silBtn.addEventListener("click", function (e) {
            e.stopPropagation(); // sil'e tıklayınca li'nin click'i de tetiklenmesin
            gorevSil(gorev.id);
        });

        li.appendChild(silBtn);
        return li;
    });

    liElemanlari.forEach(function (li) {
        liste.appendChild(li);
    });
}

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
    const yeniMetin = input.value;

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
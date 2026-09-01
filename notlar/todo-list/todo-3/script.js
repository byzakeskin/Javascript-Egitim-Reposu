const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-contanier");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    createTaskElement(inputBox.value, false); //fonksiyon çağırısı ekledim
    inputBox.value = "";
    saveData();
  }
}
//hem addTask hem de showTask tarafından kullanılacak fonksiyonum
function createTaskElement(text, isChecked) {
  let li = document.createElement("li");
  li.textContent = text; 
  if (isChecked) li.classList.add("checked");

  let span = document.createElement("span");
  span.textContent = "\u00d7";
  li.appendChild(span);

  listContainer.appendChild(li);
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    const tasks = [];
    listContainer.querySelectorAll("li").forEach(li => {
        tasks.push({
            text: li.firstChild.textContent, 
            checked: li.classList.contains("checked")
        });
    });
    localStorage.setItem("data", JSON.stringify(tasks));
}

function showTask(){
    listContainer.innerHTML = ""; //kullanıcı verisi buraya yazılmıyor
    const saved = localStorage.getItem("data");
    if (!saved) return;

    const tasks = JSON.parse(saved);
    tasks.forEach(task => createTaskElement(task.text, task.checked));
}
showTask();

//eski kodumda textcontent ile hem kaydediyor hem de geri yazıyordum,
//bu da html etiketlerini siliyordu ve sayfa yenilemede listem
//düz metine dönüşüp silme işaretleri gidiyordu.
//Bunu innerHTML ile yapmak da bir seçenek ama güvenlik açığı yaratıyordu.
//Çözüm olarak görev verimi JSON objesi olarak sakladım ve sayfa açılınca bu 
//objeyi parse edip tekrar li elementleri oluşturdum. 
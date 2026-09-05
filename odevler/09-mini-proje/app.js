const postList = document.getElementById("post-list");
const searchInput = document.getElementById("search-input");
//htmlde oluşturduğum input ve ul elementlerini burada kullanıcam.

async function loadPosts() {
  console.time("fetch"); // fetch: 147.447021484375 ms

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=20",
  );
  const posts = await response.json();
  //fetch(url) çağırdık, tarayıcı o adrese bir HTTP isteği gönderdi ama bu isteğin ağ üzerinden gidip gelmesi zaman alır.
  const usersResponse = await fetch(
    "https://jsonplaceholder.typicode.com/users",
  );
  const users = await usersResponse.json();
  //şu anda burada tarayıcı users isteğini posts bitmeden başlatmıyor
  console.log(posts); //consoleda gelen veriyi gördüm. 20 elemanlı dizi, her biri userId, id, title, body ile geldi.
  console.log(users); //gelen veri length 10, her biri id, name, username, email, address, phone, website, company ile geldi.

  console.timeEnd("fetch");
  render(posts, users);
}

async function loadPostsPromise() {
  console.time("promise"); //promise: 177.580078125 ms

  const [postsRes, usersRes] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=20"),
    fetch("https://jsonplaceholder.typicode.com/users"),
  ]);

  const posts = await postsRes.json();
  const users = await usersRes.json();

  console.timeEnd("promise");
  //render(posts, users);
  const mergedPosts = merge(posts, users);
  render(mergedPosts);
  allPosts = merge(posts, users); 
}

//loadPosts();
loadPostsPromise();
//Fetch ile yazınca ikinci istek birincinin bitmesini bekliyor, (Network'te art arda iki çubuk gördüm, Finish: 625ms).
//Promise.all'da ikisi aynı anda başlıyor (üst üste iki çubuk, Finish: 392ms).
//toplam süre tekil sürelerin toplamı yerine en yavaş isteğin süresine yaklaşıyor.

//.find() bir diziden tek eleman döndürüyor yani koşulu sağlayan ilk elemanı.
//.map() ise diziyi baştan sona dönüştürüp yeni bir dizi döndürüyor.
//Her eleman için bir fonksiyon çalıştırılıyor ve o fonksiyonun dönüş değeri yeni dizinin elemanı oluyor.
//Burada orijinal dizi değişmeyecek, yeni bir dizi oluşacak.

function merge(posts, users) {
  //Fonksiyon tanımı: merge adında, iki parametre alıyor: posts ve users
  //.map () ile posts ve users dizilerini birleştirip yeni bir dizi döndüreceğim.
  return posts.map((post) => {
    //posts dizisinin her elemanı için parantez içindeki fonksiyonu(arrow function) çalıştıracağım,
    //dönen değerleri de yeni bir dizide toplayacağım. Amacım idleri eşleştirmek.
    //return, merge fonksiyonum çağrıldığında, .map()'in ürettiği yeni diziyi geri döndürecek.
    const author = users.find((u) => u.id === post.userId);
    //burada .map() içindeyim ve her post için users dizisinde userId ile eşleşen userı .find() ile buluyorum.
    //.find(), koşulu sağlayan elemanı bulur bulmaz aramayı durdurarak o objeyi döndürüyor. Eğer bulamazsa undefined döndürüyor.
    return {
      //return, dışarıdaki merge fonksiyonunun değil, arrow function'ın dönüş değeri.
      id: post.id, //yeni objenin id alanına, orijinal postun idsini taşıyorum.
      title: post.title,
      body: post.body,
      author: author ? author.name : "unknown", //author varsa author.name, yoksa "unknown" yazsın.
    };
  });
}

//Burada iki ayrı değişken tanımladım.
//Başta ikisi de boş diziler.
//İki tane yapma sebebim "allPosts" dizisi, API'den gelen
//tam listeyi tutmak için. "currentPosts" o an ekranda görünen
//listemi tutmak için. Böylece kullanıcı arama yaptığında, filtreyi
//allPosts dizisine uygulayıp, currentPosts dizisini güncelleyebilirim.
//currentPosts dizisi, render fonksiyonuna gönderilecek ve ekranda gösterilecek.


let allPosts = []; 
let currentPosts = []; //Bu değişken, en son ekrana basılan post listesini hafızada tutmak için kullanılacak.
//Böylece kullanıcı bir <li>ye tıkladığında, hangi postun tıklandığını bulmak için bu diziyi kullanabilirim.

const commentsCache = {};

function render(mergedPosts) {
  //Fonksiyon tanımı: adı render ve mergedPosts adında tek parametre alıyor.
  //merge()'in ürettiği birleştirilmiş dizi.
  currentPosts = mergedPosts; //render her çağrıldığında, o an ekrana basılan diziyi currentPosts'a kopyalıyorum.
  postList.innerHTML = ""; //bunu ekliyorum çünkü render fonksiyonuna arama filtresi eklendiğimde tekrar tekrar çağrılacak.
  //listeyi önce temizlemezsem, her çağrıda yeni <li>'ler eskilerin üstüne eklenir, liste gittikçe uzar, eski sonuçlar da ekranda kalır.
  mergedPosts.forEach((post) => {
    //forEach sadece dizinin her elemanı için verilen fonksiyonu çalıştıracak.
    const li = document.createElement("li"); //boş, henüz sayfaya eklenmemiş bir <li> elemanı oluşturuyorum.
    const header = document.createElement("div");
    header.className = "post-header"; 
    if (readPosts.has(post.id)) {
      header.classList.add("read");
    }//post daha önce okunduysa, css ile farklı görünmesi için read classı ekliyorum
    header.textContent = `${post.title} — ${post.author}`; //Yeni oluşturduğum <li> elemanının metin içeriği
    const details = document.createElement("div");
    details.className = "post-details";
    details.style.display = "none";
    li.dataset.id = post.id; //etiketleme satırı. Bu satır, <li> elemanımıza görünmeyen bir etiket bilgisi ekliyor: data-id="3" gibi.
    li.appendChild(header);
    li.appendChild(details);
    postList.appendChild(li); //li sadece belleğimizde duruyordu, sayfada görünmüyordu. appendChild, bu elemanı postList (<ul>) elemanının içine ekliyor,
    //bu satırdan sonra artık <li> sayfada görünür olabilecek.
  });
}

function renderPostDetails(container, post, comments) {
  container.innerHTML = "";
  const body = document.createElement("p");
  body.textContent = post.body;
  container.appendChild(body);

  const commentsContent = document.createElement("ul");
  comments.forEach((comment) => {
    const commentLi = document.createElement("li");
    commentLi.className = "comment-item";
    commentLi.textContent = `${comment.name} (${comment.email}): ${comment.body}`;
    commentsContent.appendChild(commentLi);
  });
  container.appendChild(commentsContent);
}

//Elimizde 20 tane <li> var, ekranda görebiliyorum.
//Artık kullanıcımız bunlardan birine tıkladığında, js'in hangi posta tıklandığını bilmesi lazım.
postList.addEventListener("click", async (event) => {
  //dinleyicim, postList (<ul>) elemanına tıklanırsa çalışacak. event parametresi, tıklama olayına dair bilgileri içeriyor.
  const clickedLi = event.target.closest("li"); //event.target, tıklamanın gerçekten üzerinde gerçekleştiği eleman.
  //closest("li") ise, tıklanan elemanın kendisi <li> değilse, en yakın üst <li>yi buluyor.
  if (!clickedLi) return; //hiçbir <li>'ye tıklanmadıysa fonksiyondan çık

  const postId = Number(clickedLi.dataset.id); //lickedLi.dataset.id, biraz önce renderda yapıştırdığımız etiketi okuyor ama string olarak döndürüyor.
  //Number() ile sayıya çeviriyorum.

  const details = clickedLi.querySelector(".post-details"); //<li> içindeki .post-details divini buluyorum
  const isVisible = details.style.display !== "none"; //divin görünür olup olmadığını kontrol ediyorum
  if (isVisible) {
    details.style.display = "none";
    return;
  }

  details.style.display = "block"; //divi görünür yapıyorum
  
  if (!readPosts.has(postId)) {
    readPosts.add(postId);
    localStorage.setItem(readPostKey, JSON.stringify(Array.from(readPosts)));
    clickedLi.querySelector(".post-header").classList.add("read");
  }//Çoktan okunmuşsa tekrar okundu olarak işaretlemeye gerek olmadığı için,
  //readPosts setine eklemeden önce kontrol ediyorum. 


  const post = currentPosts.find((p) => p.id === postId); //currentPosts dizisinde idsi postId ile eşit olan objeyi buluyorum
  if (commentsCache[postId]) {
    //eğer commentsCache'de postId ile eşleşen bir yorumlar dizisi varsa, onu kullanacağım
    renderPostDetails(details, post, commentsCache[postId]);
    return;
  }

  details.textContent = "Yorumlar Yükleniyor..."; //yorumlar yüklenene kadar kullanıcıya bilgi veriyorum
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
  );
  const comments = await response.json();

  commentsCache[postId] = comments;
  renderPostDetails(details, post, comments);

  const clickedPost = currentPosts.find((p) => p.id === postId);
  //Elimde sayı olarak postId var. currentPosts dizisinde idsi bu sayıya eşit olan tek objeyi buluyorum
  //Bu objeyi clickedPost değişkenine atıyorum. Bu sayede console üzerinde tıklanan postun tüm bilgilerini görebileceğim
  console.log(clickedPost);
});

//input alanıma dinleyici koydum.
searchInput.addEventListener("input", () => {
  //input alanına ne yazıldıysa hata vermemesi için, küçük harfe çeviriyorum 
  //ve baştaki ile sondaki boşlukları .trim() ile öğrendiğim gibi siliyorum
  const query = searchInput.value.toLowerCase().trim();
  
  const filtered = allPosts.filter(post =>//tanımladığım allPosts dizisinden filtreleme yapıyorum
    post.title.toLowerCase().includes(query) ||
    post.author.toLowerCase().includes(query) //title veya author alanında arama yapıyorum
  );

  render(filtered); //filtrelenmiş diziyi render fonksiyonuna gönderiyorum
});



//localstorage
const readPostsKey = "readPosts";
let readPosts = JSON.parse(localStorage.getItem(readPostsKey)) || [];


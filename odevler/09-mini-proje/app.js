const postList = document.getElementById("post-list");
const searchInput = document.getElementById("search-input");
//htmlde oluşturduğum input ve ul elementlerini burada kullanıcam.

async function loadPosts() {
  console.time("fetch");// fetch: 147.447021484375 ms

  const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=20");
  const posts = await response.json();
  //fetch(url) çağırdık, tarayıcı o adrese bir HTTP isteği gönderdi ama bu isteğin ağ üzerinden gidip gelmesi zaman alır. 
  const usersResponse = await fetch("https://jsonplaceholder.typicode.com/users");
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
    fetch("https://jsonplaceholder.typicode.com/users")
  ]);

  const posts = await postsRes.json();
  const users = await usersRes.json();

  console.timeEnd("promise");
  render(posts, users);
}

//loadPosts();
loadPostsPromise();
//Fetch ile yazınca ikinci istek birincinin bitmesini bekliyor, (Network'te art arda iki çubuk gördüm, Finish: 625ms). 
//Promise.all'da ikisi aynı anda başlıyor (üst üste iki çubuk, Finish: 392ms).
//toplam süre tekil sürelerin toplamı yerine en yavaş isteğin süresine yaklaşıyor.



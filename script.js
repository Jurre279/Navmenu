function getProducts() {
  fetch("./dataset.json")
    .then((response) => response.json())
    .then((data) => {
      console.dir(data);
      createNav(data);
    })
    .catch((error) => console.log(error));
}
function createNav(data) {
  const header = document.querySelector(".nav");
  const ul = document.createElement("ul");
  header.appendChild(ul);
  data.forEach((obj) => {
    console.log("da");
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = obj.title;
    a.href = obj.url;
    ul.appendChild(li);
    li.appendChild(a);
  });
}

getProducts();

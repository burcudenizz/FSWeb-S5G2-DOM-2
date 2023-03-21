import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click", function (e) {
  alert("Bana tıkladın!");
});

// Kodlar buraya gelecek!

//mouseover

document.querySelector("h1").addEventListener("mouseover", function (event) {
  this.style.backgroundColor = "lightgreen";
});

document.querySelector("h1").addEventListener("mouseout", function (event) {
  this.style.backgroundColor = "pink";
});

const navigation = document.querySelectorAll(".nav a");
navigation[0].addEventListener("mouseover", function (event) {
  this.style.color = "blue";
});
navigation[0].addEventListener("mouseout", function (event) {
  this.style.color = "";
});

navigation[1].addEventListener("mouseover", function (event) {
  this.style.color = "blue";
});

navigation[1].addEventListener("mouseout", function (event) {
  this.style.color = "";
});

navigation[2].addEventListener("mouseover", function (event) {
  this.style.color = "blue";
});

navigation[2].addEventListener("mouseout", function (event) {
  this.style.color = "";
});

navigation[3].addEventListener("mouseover", function (event) {
  this.style.color = "blue";
});

navigation[3].addEventListener("mouseout", function (event) {
  this.style.color = "";
});

const basliklar = document.querySelectorAll(".content-section h2");
basliklar[0].addEventListener("mouseover", function (event) {
  this.style.color = "lightblue";
});
basliklar[0].addEventListener("mouseout", function (event) {
  this.style.color = "";
});
basliklar[1].addEventListener("mouseover", function (event) {
  this.style.color = "lightblue";
});
basliklar[1].addEventListener("mouseout", function (event) {
  this.style.color = "";
});

document
  .querySelector(".content-destination h2")
  .addEventListener("mouseover", function (event) {
    this.style.color = "lightblue";
  });
document
  .querySelector(".content-destination h2")
  .addEventListener("mouseout", function (event) {
    this.style.color = "";
  });

//keydown

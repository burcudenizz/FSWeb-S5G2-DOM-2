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
  this.style.color = "lightgreen";
  this.style.border = "3px dashed lightgreen";
});
navigation[0].addEventListener("mouseout", function (event) {
  this.style.color = "";
});

navigation[1].addEventListener("mouseover", function (event) {
  this.style.color = "lightgreen";
  this.style.border = "3px dashed lightgreen";
});

navigation[1].addEventListener("mouseout", function (event) {
  this.style.color = "";
});

navigation[2].addEventListener("mouseover", function (event) {
  this.style.color = "lightgreen";
  this.style.border = "3px dashed lightgreen";
});

navigation[2].addEventListener("mouseout", function (event) {
  this.style.color = "";
});

navigation[3].addEventListener("mouseover", function (event) {
  this.style.color = "lightgreen";
  this.style.border = "3px dashed lightgreen";
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

document.addEventListener("keydown", (event) => {
  if (event.shiftKey) {
    const baslik = document.querySelector("h1");
    baslik.style.color = "green";
  }
});

//wheel
const bodyColor = document.querySelector(".main-navigation");
const bodyStyle = () => (bodyColor.style.backgroundColor = "gray");
document.querySelector("body").addEventListener("wheel", bodyStyle);

//dblclick

const foto = document.querySelectorAll("img");

foto[0].addEventListener("dblclick", (event) => {
  event.target.style.height = "400px";
  event.target.style.width = "800px";
});
foto[1].addEventListener("dblclick", (event) => {
  event.target.style.height = "400px";
  event.target.style.width = "800px";
});
foto[2].addEventListener("dblclick", (event) => {
  event.target.style.height = "400px";
  event.target.style.width = "800px";
});
foto[3].addEventListener("dblclick", (event) => {
  event.target.style.height = "400px";
  event.target.style.width = "800px";
});

//load

foto[1].addEventListener("load", (event) => {
  alert("Loading");
});

//drag / drop

const sections = document.querySelectorAll("section");
sections.forEach((e) => {
  e.setAttribute("draggable", true);
  e.addEventListener("dragstart", () => {
    e.classList.add("dragging");
  });
  e.addEventListener("dragend", () => {
    e.classList.remove("dragging");
  });
});

function getAfterElement(container, yAxis) {
  const draggableElements = container.querySelectorAll(
    "section:not(.dragging)"
  );

  return [...draggableElements].reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = yAxis - (box.top + box.height / 2);
      console.log(yAxis);
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}
const home = document.querySelector(".home");
home.addEventListener("dragover", (e) => {
  e.preventDefault();
  const closest = getAfterElement(home, e.clientY);
  const dragging = document.querySelector(".dragging");
  if (dragging === null) {
    home.appendChild(dragging);
  } else {
    home.insertBefore(closest, dragging);
  }
});

//click

const focusButton = document.querySelectorAll(".btn");
focusButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    button.style.backgroundColor = "green";
  });
});

//click
const colors = ["#51e2f5", "#9df9ef", "#edf756", "#ffa8B6", "#a28089"];
const changeablePart = document.querySelector(".destination");
const scrollFunc = () =>
  (changeablePart.style.backgroundColor =
    colors[Math.round(Math.random() * colors.length)]);

changeablePart.addEventListener("click", scrollFunc);

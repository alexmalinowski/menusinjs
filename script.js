var contentEle = document.body.querySelector(".content");



contentEle.innerHTML = "";
var homeEle = (contentEle.innerHTML = "Home Page");

function makeHome() {
  contentEle.innerHTML = "";
  var homeEle = (contentEle.innerHTML = "Home Page");
}

function makeAbout() {
  contentEle.innerHTML = "";
  var headEle = document.createElement("h1");
  headEle.innerHTML = "About Page";
  var nameEle = document.createElement("h3");
  nameEle.innerHTML = "Alex Cade Malinowski";
  contentEle.appendChild(headEle);
  contentEle.appendChild(nameEle);
}

function makeInt() {
  contentEle.innerHTML = "";
  var intEle = document.createElement("h3");
  intEle.innerHTML = "Interact Page";
  contentEle.appendChild(intEle);
  var incEle = document.createElement("button");
  incEle.textContent = "Increment Value";
  contentEle.appendChild(incEle);
    var inpEle = document.createElement("input");
inpEle.id = "number"
  inpEle.value = "0"
  contentEle.appendChild(inpEle);
  incEle.addEventListener("click", function () {
    increment();
  });
}

function increment() {
  var value = parseInt(document.getElementById('number').value);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

document.body.querySelector(".homeButt").addEventListener("click", function () {
  makeHome();
});

document.body
  .querySelector(".aboutButt")
  .addEventListener("click", function () {
    makeAbout();
  });

document.body.querySelector(".intButt").addEventListener("click", function () {
  makeInt();
});
setInterval(muman);
function myfunction1() {
  document.getElementById("p-O").src = "images/image-product-2.jpg";
  document.getElementById("p-1").style.border = "solid #ee720c 2px";
  document.getElementById("p-3").style.border = "none";
  document.getElementById("p-2").style.border = "none";
  document.getElementById("p-4").style.border = "none";
}
function myfunction2() {
  document.getElementById("p-O").src = "images/image-product-3.jpg";
  document.getElementById("p-2").style.border = "solid #ee720c 2px";
  document.getElementById("p-1").style.border = "none";
  document.getElementById("p-3").style.border = "none";
  document.getElementById("p-4").style.border = "none";
}
function myfunction3() {
  document.getElementById("p-O").src = "images/image-product-4.jpg";
  document.getElementById("p-3").style.border = "solid #ee720c 2px";
  document.getElementById("p-2").style.border = "none";
  document.getElementById("p-1").style.border = "none";
  document.getElementById("p-4").style.border = "none";
}
function myfunction4() {
  document.getElementById("p-O").src = "images/image-product-1.jpg";
  document.getElementById("p-4").style.border = "solid #ee720c 2px";
  document.getElementById("p-1").style.border = "none";
  document.getElementById("p-2").style.border = "none";
  document.getElementById("p-3").style.border = "none";
}
function myfunction11() {
  document.getElementById("p-OO").src = "images/image-product-2.jpg";
  document.getElementById("p-11").style.border = "solid #ee720c 2px";
  document.getElementById("p-33").style.border = "none";
  document.getElementById("p-22").style.border = "none";
  document.getElementById("p-44").style.border = "none";
}
function myfunction22() {
  document.getElementById("p-OO").src = "images/image-product-3.jpg";
  document.getElementById("p-22").style.border = "solid #ee720c 2px";
  document.getElementById("p-11").style.border = "none";
  document.getElementById("p-33").style.border = "none";
  document.getElementById("p-44").style.border = "none";
}
function myfunction33() {
  document.getElementById("p-OO").src = "images/image-product-4.jpg";
  document.getElementById("p-33").style.border = "solid #ee720c 2px";
  document.getElementById("p-22").style.border = "none";
  document.getElementById("p-11").style.border = "none";
  document.getElementById("p-44").style.border = "none";
}
function myfunction44() {
  document.getElementById("p-OO").src = "images/image-product-1.jpg";
  document.getElementById("p-44").style.border = "solid #ee720c 2px";
  document.getElementById("p-11").style.border = "none";
  document.getElementById("p-22").style.border = "none";
  document.getElementById("p-33").style.border = "none";
}
function minus() {
  let ppp = document.getElementById("test").textContent;
  let pp = parseInt(ppp);
  document.getElementById("test").textContent = pp - 1;
}
function plus() {
  let mmm = document.getElementById("test").textContent;
  let mm = parseInt(mmm);
  document.getElementById("test").textContent = mm + 1;
}
function appear() {
  document.getElementById("modal").style.display = "block";
}

function disappear() {
  document.getElementById("modal").style.display = "none";
}

function cart() {
  let many = document.getElementById("test").textContent;
  many = parseInt(many);
  buysome = buysome + many;
}
let buysome = 0;
function CartAppear() {
  var x = document.getElementById("cart-box");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}
function muman() {
  if (buysome === 0) {
    document.getElementById("imgtum").style.display = "none";
    document.getElementById("pshoe").textContent = "";
    document.getElementById("buysome").textContent = "your cart is empty";
    document.getElementById("cart-2").style.display = "none";
    document.getElementById("Tprice").textContent = "";
  } else {
    document.getElementById("imgtum").style.display = "block";
    document.getElementById("imgtum").src = "images/image-product-1-thumbnail.jpg";
    document.getElementById("pshoe").textContent = "fall limited sneakers";
    document.getElementById("buysome").textContent = "125$ x";
    document.getElementById("Tprice").textContent = buysome + " " + "=" + " " + buysome * 125 + "$";
    document.getElementById("cart-2").style.display = "block";
  }
}
function mobileMenuA() {
  document.getElementById("background").style.display = "block";
}
function mobileMenuD() {
  document.getElementById("background").style.display = "none";
}
function deleter() {
  buysome = 0;
}

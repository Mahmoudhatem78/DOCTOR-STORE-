let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(){
    cart.push("منتج");
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("تمت الإضافة");
}

function loadCart(){
    let div = document.getElementById("cartItems");
    if(!div) return;

    div.innerHTML = cart.map(i=>`<p>${i}</p>`).join("");
}

loadCart();

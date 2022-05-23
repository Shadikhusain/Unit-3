//store the products array in localstorage as "products"

function replace() {
    location.href = "inventory.html"
}

document.getElementById("products").addEventListener("submit", addItem);
var arr = JSON.parse(localStorage.getItem("products")) || [];


function addItem() {
    let brand = document.getElementById("type").value;
    let productname = document.getElementById("desc").value;
    let price = document.getElementById("price").value;
    let imageUrl = document.getElementById("image").value;

    let mydataObj = {
        type: brand,
        desc: productname,
        price: price,
        image: imageUrl,
    };
    arr.push(mydataObj)
    localStorage.setItem("products", JSON.stringify(arr));
}
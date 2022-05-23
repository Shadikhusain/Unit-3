function replace() {
    location.href = "index.html"
}


var arr = JSON.parse(localStorage.getItem("products"));

displaydata(arr);

function displaydata(arr) {
    var products_data = document.getElementById("all_products");
    products_data.innerHTML = "";
    arr.map((elem, index) => {
        var item = document.createElement("div");
        item.setAttribute("id", "item");
        var brand = document.createElement("h1");
        var productname = document.createElement("h3");
        var price = document.createElement("h3");
        var productimg = document.createElement("img");
        var deletebutton = document.createElement("button");

        brand.innerText = elem.type;
        productname.innerText = elem.desc;
        price.innerText = elem.price;
        productimg.setAttribute("src", elem.image);
        deletebutton.setAttribute("id", "remove_product")
        deletebutton.textContent = "Remove Item";
        deletebutton.addEventListener("click", () => {
            deleteTask(index);
        });

        item.append(
            brand,
            productname,
            price,
            productimg,
            deletebutton
        );
        products_data.append(item);
    });
}

function deleteTask(index) {
    arr.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(arr));
    displaydata(arr);
}
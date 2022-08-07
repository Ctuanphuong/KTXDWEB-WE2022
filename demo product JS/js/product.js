const productList = [
    {
        id: 1,
        img: "https://picsum.photos/200/300",
        nameProduct: "Product 1",
        time: 30,
        type: "snack",
    },
    {
        id: 2,
        img: "https://picsum.photos/200/300",
        nameProduct: "Product 2",
        time: 40,
        type: "fish",
    },
    {
        id: 3,
        img: "https://picsum.photos/200/300",
        nameProduct: "Product 3",
        time: 50,
        type: "meat",
    },
    {
        id: 4,
        img: "https://picsum.photos/200/300",
        nameProduct: "Product 4",
        time: 70,
        type: "vegetable",
    },
];

function showProducts(products){
    if(!Array.isArray(products) || products.length == 0){
        return false;
    }
    let result =  "";
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        result += `
        <div class="">
                    <div class="product-img">
                        <a href="">
                            <img src="https://picsum.photos/200/300" alt="">
                        </a>
                    </div>
                    <div class="product-content">
                        <a href="./detail.html?id=${product.id}">
                            <h3>${product.nameProduct}</h3>
                        </a>
                        <div class="flex">
                            <span>${product.time}</span>
                            <span>${product.type}</span>
                        </div>
                    </div>
                </div>
        `;
    }
    return result;
}
document.getElementById("products").innerHTML = showProducts(productList);
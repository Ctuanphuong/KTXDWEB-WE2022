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
const id = new URLSearchParams(window.location.search).get("id");

function showProducts(products){
    if(!Array.isArray(products) || products.length == 0)
    return false;

    let result = "";
    const product = products.find((item) => item.id == id);

    result = `<h2>${product.nameProduct}</h2>`;
    return result;
}
document.getElementById("detail").innerHTML = showProducts(productList);
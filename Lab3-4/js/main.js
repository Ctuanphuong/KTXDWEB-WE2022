const productList = [{
        id: 1,
        name: "Big and Juicy Wagyu Beef Cheeseburger",
        img: "https://res.cloudinary.com/phuong-fpoly/image/upload/v1654737419/Lab3/image_26_zfd7ta.png",
        time: 30,
        type: "Snack",
    },
    {
        id: 2,
        name: "Fresh Lime Roasted Salmon",
        img: "https://res.cloudinary.com/phuong-fpoly/image/upload/v1654737420/Lab3/img261_vasz4r.png",
        time: 30,
        type: "Fish",
    },
    {
        id: 3,
        name: "The Best Easy One Pot Chicken and Rice",
        img: "https://res.cloudinary.com/phuong-fpoly/image/upload/v1654737419/Lab3/image_26_2_cqsoth.png",
        time: 30,
        type: "Snack",
    },
    {
        id: 4,
        name: "Fresh and Healthy Mixed Mayonnaise ",
        img: "https://res.cloudinary.com/phuong-fpoly/image/upload/v1654737419/Lab3/image_26_3_jdgnqm.png",
        time: 30,
        type: "Healthy",
    },
    {
        id: 5,
        name: "The Creamiest Creamy Chicken",
        img: "https://res.cloudinary.com/phuong-fpoly/image/upload/v1654737419/Lab3/image_26_4_ut49h0.png",
        time: 30,
        type: "Noodles",
    },
    {
        id: 6,
        name: "Fruity Pancake with Orange & Blueberry",
        img: "https://res.cloudinary.com/phuong-fpoly/image/upload/v1654737420/Lab3/image_26_5_qj8mqp.png",
        time: 30,
        type: "Sweet",
    },
];

function showProducts(productmain) {
    if (!Array.isArray(productmain) || productmain.length == 0) return false;

    let result = "";
    for (let i = 0; i < productmain.length; i++) {
        const product = productmain[i];
        result += `
    <div class="shadow transition hover:shadow-xl group mb-8 md:mb-0 rounded-2xl">
    <img src="${product.img}" class="w-[400px] rounded-3xl" />
    <a href="#1">
        <h3 class="text-lg text-red-500 font-semibold mt-[24px] group-hover:text-green-600">
            <a href="Detail.html?id=${product.id}">${product.name}</a>
        </h3>
    </a>
    <div class="flex">
        <img src="https://res.cloudinary.com/phuong-fpoly/image/upload/v1654737421/Lab3/Vector_moii4f.png" class="w-[18px] h-[18px] mr-[13px] mt-[27px]" />
        <p class="text-base text-slate-700 font-medium mt-[25px] mr-[37px]">
            ${product.time} Minutes
        </p>
        <img src="https://res.cloudinary.com/phuong-fpoly/image/upload/v1654737421/Lab3/Vector_1_r1ifxv.png" class="mt-[25px] w-[8px] h-[19px]" />
        <img src="https://res.cloudinary.com/phuong-fpoly/image/upload/v1654737421/Lab3/Vector_2_jxpwhd.png" class="mt-[25px] w-[7px] h-[20px] mr-[14px]" />
        <p class="text-base text-slate-700 font-medium mt-[25px]">
            ${product.type}
        </p>
    </div>
</div>
    `;
    }
    return result;
}

document.getElementById("productmain").innerHTML = showProducts(productList);
// ***Phần đổ dữ liệu ra ngoài của Detail***
const workList = [{
        id: 1,
        title: "Food Website Dashboard Design with Tailwind CSS",
        img: "https://res.cloudinary.com/phuong-fpoly/image/upload/v1654874161/Screenshot_284_jfg2an.png",
        img: "https://res.cloudinary.com/phuong-fpoly/image/upload/v1654938253/Screenshot_309_a1izwq.png",
        time: 2022,
        content: "This is the first major exercise with a request to create a food website homepage using a css theme support website called Tailwind CSS.",
        type: " Dashboard, User Experience Design",
    },
    {
        id: 2,
        title: "Create A Sales Home Page with Tailwind CSS",
        img: "https://res.cloudinary.com/phuong-fpoly/image/upload/v1654938513/Screenshot_310_anja83.png",
        time: 2022,
        content: "The first practice exercise, creating a home page for general sales by linking to a website supporting interface code is Taiwind CSS.",
        type: "Home Page",
    },
    {
        id: 3,
        title: "Create The School Website by using classic plain code",
        img: "https://res.cloudinary.com/phuong-fpoly/image/upload/v1654874162/Screenshot_289_h0i8dw.png",
        time: 2022,
        content: "Create the school website newsletter page by pure css but with a new way of naming a piece of cards that need to change the interface.",
        type: "News",
    },
    {
        id: 4,
        title: "Complete Assignment Javascript with Visual Studio",
        img: "https://res.cloudinary.com/phuong-fpoly/image/upload/v1654882507/w41_dbiptz.png",
        time: 2022,
        content: "Complete the first javascript assignment with basic knowledge learned after 3 weeks of getting familiar with JavaScript. By combining css, html with javascript.",
        type: "Assignment",
    },
    {
        id: 5,
        title: "Portfolio UI - Web & Mobile with Taiwind CSS",
        img: "https://res.cloudinary.com/phuong-fpoly/image/upload/v1654883340/w51_lbhxeb.png",
        time: 2022,
        content: "Completing the web construction assignment with the Portfolio theme, the article's requirements include html css by using Taiwind CSS to design the interface, including using JS to dump the duplicate data out. website to shorten the code.",
        type: "Website",
    },
];
// --PHẦN ĐỔ DỮ LIỆU CỦA LIST WORK--
// Lấy ID trên url
const id = new URLSearchParams(window.location.search).get("id");

function showWork(works) {
    // Nếu không phải 1 mảng hoặc không có giá trị trong mảng thì return false
    if (!Array.isArray(works) || works.length == 0) return false;

    let result = "";
    // Tìm phần tử trong mảng, nếu id trên url == id phần tử trong mảng
    // thì trả về object đấy
    const work = works.find((item) => item.id == id);

    // trả về kết quả là 1 chuỗi
    result = `<h1 class=" text-3xl md:text-[34px] font-bold max-w-lg">${work.title}</h1>`;
    return result;
}

// --PHẦN ĐỔ DỮ LIỆU CỦA LIST TIME AND TYPE--
function showTimeType(works) {
    // Nếu không phải 1 mảng hoặc không có giá trị trong mảng thì return false
    if (!Array.isArray(works) || works.length == 0) return false;

    let result = "";
    // Tìm phần tử trong mảng, nếu id trên url == id phần tử trong mảng
    // thì trả về object đấy
    const work = works.find((item) => item.id == id);

    // trả về kết quả là 1 chuỗi
    result = ` <span class="text-lg px-3 bg-[#FF7C7C] font-black text-white rounded-full mr-[17px] ">${work.time}</span>
    <span class=" text-xl font-normal ">${work.type}</span>`;
    return result;
}

// --PHẦN ĐỔ DỮ LIỆU CỦA LIST CONTENT--
function showContent(works) {
    // Nếu không phải 1 mảng hoặc không có giá trị trong mảng thì return false
    if (!Array.isArray(works) || works.length == 0) return false;

    let result = "";
    // Tìm phần tử trong mảng, nếu id trên url == id phần tử trong mảng
    // thì trả về object đấy
    const work = works.find((item) => item.id == id);

    // trả về kết quả là 1 chuỗi
    result = `<p class="text-base max-w-2xl">${work.content}</p>`;
    return result;
}

// --PHẦN ĐỔ DỮ LIỆU CỦA LIST IMAGE--
function showImg(works) {
    // Nếu không phải 1 mảng hoặc không có giá trị trong mảng thì return false
    if (!Array.isArray(works) || works.length == 0) return false;

    let result = "";
    // Tìm phần tử trong mảng, nếu id trên url == id phần tử trong mảng
    // thì trả về object đấy
    const work = works.find((item) => item.id == id);

    // trả về kết quả là 1 chuỗi
    result = `<img src="${work.img}" alt=" " class="w-full  border-gray shadow-xl rounded-md">`;
    return result;
}

// --HIỂN THỊ DỮ LIỆU--
document.getElementById("title").innerHTML = showWork(workList);
document.getElementById("timeandtype").innerHTML = showTimeType(workList);
document.getElementById("content").innerHTML = showContent(workList);
document.getElementById("Img").innerHTML = showImg(workList);

// ***Phần đổ dữ liệu Heading của Detail***
const headList = [{
        id: 1,
        head1: "Featured Dishes",
        head2: "Sign In and Sign Up Section",
        content: "The homepage of the website will have a specific dish for customers to easily recognize which dishes are selling and choose for themselves, in addition to the login or account registration section of the website.",
        img1: "https://res.cloudinary.com/phuong-fpoly/image/upload/v1654878248/Screenshot_291_dhqgqx.png",
        img2: "https://res.cloudinary.com/phuong-fpoly/image/upload/v1654928954/Screenshot_308_jbbpz8.png",
    },
    {
        id: 2,
        head1: "Next Page section",
        head2: "User Question",
        content: "The home page includes a number of products, vertical menus, default selection and sorting, and a next page and a question asking if the user is ready to go to the next step.",
        img1: "https://res.cloudinary.com/phuong-fpoly/image/upload/v1654915464/w21_emzrx9.png",
        img2: "https://res.cloudinary.com/phuong-fpoly/image/upload/v1654915464/w22_iz0kb2.png",
    },
    {
        id: 3,
        head1: "Menu, Banner and Search Bar",
        head2: "School Newsletter",
        content: "The homepage section includes the field logo, horizontal menu, information search bar, menu functions and banner section. Next we have academic news and student activities.",
        img1: "https://res.cloudinary.com/phuong-fpoly/image/upload/v1654915465/w31_e8gnfc.png",
        img2: "https://res.cloudinary.com/phuong-fpoly/image/upload/v1654915464/w32_jaguys.png",
    },
    {
        id: 4,
        head1: "Choose Product",
        head2: "Registration Information",
        content: "The javascript assignment has a menu with 4 functions: slide show, product selection, information registration and adding products to cart.",
        img1: "https://res.cloudinary.com/phuong-fpoly/image/upload/v1654882486/w42_pahpqx.png",
        img2: "https://res.cloudinary.com/phuong-fpoly/image/upload/v1654882485/w43_hjabqn.png",
    },
    {
        id: 5,
        head1: "Use JS To Dump Matching Data",
        head2: "Work Done Page",
        content: "The practical website building course includes requirements: coding the interface using the Taiwindcss website, and dumping the matching data onto the web page using Javascript code snippets.",
        img1: "https://res.cloudinary.com/phuong-fpoly/image/upload/v1654915464/Screenshot_307_qddbxs.png",
        img2: "https://res.cloudinary.com/phuong-fpoly/image/upload/v1654883348/w53_jsna5j.png",
    },
];

// --PHẦN ĐỔ DỮ LIỆU CỦA LIST HEADING--
function showHeadContent(heads) {
    // Nếu không phải 1 mảng hoặc không có giá trị trong mảng thì return false
    if (!Array.isArray(heads) || heads.length == 0) return false;

    let result = "";
    // Tìm phần tử trong mảng, nếu id trên url == id phần tử trong mảng
    // thì trả về object đấy
    const head = heads.find((item) => item.id == id);

    // trả về kết quả là 1 chuỗi
    result = ` <div>
    <h1 id="head1" class="text-[26px] md:text-3xl font-medium ">${head.head1}</h1>
    <h3 class="text-xl md:text-2xl font-medium my-4 md:my-[30px] ">${head.head2}</h3>
    <p class="text-base font-normal text-base ">${head.content}</p>
</div>`;
    return result;
}

// --PHẦN ĐỔ DỮ LIỆU CỦA LIST IMAGE CỦA HEADING--
function showImageHeading(images) {
    // Nếu không phải 1 mảng hoặc không có giá trị trong mảng thì return false
    if (!Array.isArray(images) || images.length == 0) return false;

    let result = "";
    // Tìm phần tử trong mảng, nếu id trên url == id phần tử trong mảng
    // thì trả về object đấy
    const image = images.find((item) => item.id == id);

    // trả về kết quả là 1 chuỗi
    result = `  <div class="md:my-[30px] my-5">
    <img src="${image.img1}" alt=" " class="w-full rounded-md md:shadow-2xl shadow-xl">
</div>
<div class="md:my-[30px] my-5">
    <img src="${image.img2}" alt=" " class="w-full rounded-md md:shadow-2xl shadow-xl">
</div>`;
    return result;
}
document.getElementById("headandcontent").innerHTML = showHeadContent(headList);
document.getElementById("imageheading").innerHTML = showImageHeading(headList);
// --phần đổ dữ liệu của Featured works
const workList = [{
        id: 1,
        title: "Food Dashboard Design",
        img: "https://res.cloudinary.com/phuong-fpoly/image/upload/v1654938253/Screenshot_309_a1izwq.png",
        time: 2022,
        content: "This is the first major exercise with a request to create a food website homepage using a css theme support website called Tailwind CSS.",
        type: "Dashboard",
    },
    {
        id: 2,
        title: "Create A Sales Home Page",
        img: "https://res.cloudinary.com/phuong-fpoly/image/upload/v1654938513/Screenshot_310_anja83.png",
        time: 2022,
        content: "The first practice exercise, creating a home page for general sales by linking to a website supporting interface code is Taiwind CSS.",
        type: "Home Page",
    },
    {
        id: 3,
        title: "Create The School Website",
        img: "https://res.cloudinary.com/phuong-fpoly/image/upload/v1654874162/Screenshot_289_h0i8dw.png",
        time: 2022,
        content: "Create the school website newsletter page by pure css but with a new way of naming a piece of cards that need to change the interface.",
        type: "News",
    },

];

function showWorks(workmain) {
    if (!Array.isArray(workmain) || workmain.length == 0) return false;
    let result = "";
    for (let i = 0; i < workmain.length; i++) {
        const work = workmain[i];
        result += `
        <div class="md:grid md:grid-cols-[245px,auto] gap-[17px] pb-4 md:pb-8 border-b border-[#E0E0E0] md:mx-0 mx-[18px] mt-[30px]">
        <div>
            <img src="${work.img}" alt=" " class="w-full md:w-[246px] md:h-[180px]  border border-gray shadow-xl rounded-md">
        </div>
        <div>
            <div>
                <h3 class="md:mt-0 mt-5">
                    <a href="detail.html?id=${work.id}" class="md:text-3xl text-2xl font-bold hover:text-[#FF6464]">${work.title}</a>
                </h3>
            </div>
            <div class="space-x-6 py-5">
                <span class="text-lg font-bold text-white bg-[#142850] px-3 py-[2px] rounded-full ">${work.time}</span>
                <span class="text-[#8695A4] font-normal text-xl ">${work.type}</span>
            </div>
            <p class="text-base font-normal md:w-[75%]">${work.content}</p>
        </div>
    </div>
 
  `;
    }
    return result;
}

document.getElementById("workmain").innerHTML = showWorks(workList);

// --phần đổ dữ liệu của Recent Post
const postList = [{
        id: 1,
        title: "Making a design system from scratch",
        time: "12 Feb 2020",
        type: "Design, Pattern",
        content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
        id: 2,
        title: "Creating pixel perfect icons in Figma",
        time: "12 Feb 2020",
        type: "Figma, Icon Design",
        content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
];

function showPosts(posts) {
    if (!Array.isArray(posts) || posts.length == 0) return false;
    let result = "";
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        result += `
        <div class="bg-white px-[25px] pt-[22px] pb-[30px] md:pb-[40px] rounded md:mx-0 mx-3">
        <h1 class="text-[22px] md:text-[26px] font-bold hover:text-[#FF6464]"> <a href="">${post.title}</a></h1>
        <div class=" text-lg font-normal space-x-5 py-[20px] ">
            <span>${post.time}</span>
            <span>|</span>
            <span class="text-[#21243D] text-lg font-normal ">${post.type}</span>
        </div>
        <p class="text-base ">${post.content}</p>
    </div>
  `;
    }
    return result;
}

document.getElementById("recentpost").innerHTML = showPosts(postList);
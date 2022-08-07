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
    {
        id: 4,
        title: "Assignment Javascript",
        img: "https://res.cloudinary.com/phuong-fpoly/image/upload/v1654882507/w41_dbiptz.png",
        time: 2022,
        content: "Complete the first javascript assignment with basic knowledge learned after 3 weeks of getting familiar with JavaScript.",
        type: "Assignment",
    },
    {
        id: 5,
        title: "Portfolio UI - Web & Mobile",
        img: "https://res.cloudinary.com/phuong-fpoly/image/upload/v1654883340/w51_lbhxeb.png",
        time: 2022,
        content: "Completing the web construction assignment with the Portfolio theme, the article's requirements include html css by using Taiwind CSS... ",
        type: "Website",
    },

];


function showWorks(workmain) {
    if (!Array.isArray(workmain) || workmain.length == 0) return false;

    let result = "";
    for (let i = 0; i < workmain.length; i++) {
        const work = workmain[i];
        result += `
        <div class="md:grid md:grid-cols-[245px,auto] gap-[18px] pb-4 border-b border-[#E0E0E0] md:mb-[35px] mb-[22px] md:pb-[30px] max-w-3xl">
        <div>
            <img src="${work.img}" alt=" " class=" w-full md:w-[246px] md:h-[180px] border border-gray shadow-xl rounded-md">
        </div>
        <div>
            <div>
                <h3 class="md:mt-0 mt-8">
                    <a href="detail.html?id=${work.id}" class="md:text-3xl text-2xl font-bold  hover:text-[#FF6464]">${work.title}</a>
                </h3>
            </div>
            <div class="space-x-6 md:py-5 py-4">
                <span class="text-lg font-bold text-white bg-[#142850] px-3 py-[2px] rounded-full ">${work.time}</span>
                <span class="text-[#8695A4] font-normal text-xl ">${work.type}</span>
            </div>
            <p class="text-base font-normal md:w-[100%] ">${work.content}</p>
        </div>
    </div>
`;
    }
    return result;
}

document.getElementById("workmain").innerHTML = showWorks(workList);
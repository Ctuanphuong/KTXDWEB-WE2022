const blogList = [{
        id: 1,
        title: "UI Interactions of the week",
        time: "12 Feb 2019",
        type: "Express, Handlebars",
        content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
        id: 2,
        title: "UI Interactions of the week",
        time: "12 Feb 2019",
        type: "Express, Handlebars",
        content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
        id: 3,
        title: "UI Interactions of the week",
        time: "12 Feb 2019",
        type: "Express, Handlebars",
        content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
        id: 4,
        title: "UI Interactions of the week",
        time: "12 Feb 2019",
        type: "Express, Handlebars",
        content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
];

function showBlogs(blogs) {
    if (!Array.isArray(blogs) || blogs.length == 0) return false;

    let result = "";
    for (let i = 0; i < blogs.length; i++) {
        const blog = blogs[i];
        result += `
        <div class="border-b boder-[#E0E0E0] max-w-3xl mt-5 md:mt-8">
        <h3 class="text-[26px] md:text-3xl font-medium  hover:text-[#FF6464]">
            <a href="">${blog.title}</a></h3>
        <div class="my-4 text-xl space-x-4">
            <span>${blog.time}</span>
            <span>|</span>
            <span class="text-[#8695A4]">${blog.type}</span>
        </div>
        <p class="max-w-2xl pb-6 md:pb-[29px]">${blog.content}</p>
    </div>
`;
    }
    return result;
}

document.getElementById("blog").innerHTML = showBlogs(blogList);
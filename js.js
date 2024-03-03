let card = ""
function createCard(image, sub, link ) {
    card += `
    <div class="card min-h-24 max-w-72 bg-blue-600 flex flex-col justify-center items-center rounded-md border-2 border-cyan-700 p-6 gap-4">
    <div class="img">
        <img class=" w-44  h-44 object-fill object-bottom rounded-full" src="${image}" alt="">
    </div>
    <div class="txt text-xl font-semibold text-wrap  max-w-fit">
        <h1>
            ${sub}
        </h1>
    </div>
    <button class="py-2 px-16 bg-green-600 mt-5 font-semibold text-white rounded" ><a href="${link}">Browse notes</a></button>
 </div>
    `

    let cards = document.querySelector(".cards")
    cards.innerHTML = card;


}

function showSemester(semester) {
    card = ""; 
    if (semester === "Semester 1") {
        createCard("icons/sem1/sanskrit.jpg", "Sanskrit", "https://drive.google.com/drive/folders/1wNTNmRH8Y1q4pfEY7j2muE-XhpkcjsYr");
        createCard("icons/sem1/english.jpg", "English", "https://drive.google.com/drive/folders/1pTb3Ln22V5afmsZY0iQYS5MJHSDkMi32");
        createCard("icons/cf.png", "Computer Fundamemtal", "https://drive.google.com/drive/folders/1ONHM3A8jgY7YTVX2T37QtAlaY2i7EEL6");
        createCard("icons/C.png", "Programming in C", "https://drive.google.com/drive/folders/1613B-h4fkN2eA043rkAWzVydTMFt2d2Q");
        createCard("icons/os.jpg", "Operating System", "https://drive.google.com/drive/folders/1w9jSje8Jg9L7LP-_wUUNN-fnH-6DHKOA");
        createCard("icons/oa.jpg", "Office Automation", "https://drive.google.com/drive/folders/1pCbsFe6I6kJd6BlnnOKOzUJFY1TfSKu2");
        createCard("icons/math.jpg", "Discrete Mathematics", "https://drive.google.com/drive/folders/1LS9tiqer0LAzWG7oOer2WZPwNI__glJp");
        createCard("icons/stats.webp", "Statistic", "https://drive.google.com/drive/folders/1Lo0hVgFqWqMIcoMAKQCEKWG1t2aaWXyd");

    } else if (semester === "Semester 2") {
        createCard("icons/sanskrit.jpg", "Sanskrit", "https://drive.google.com/drive/folders/1wNTNmRH8Y1q4pfEY7j2muE-XhpkcjsYr");
        createCard("icons/english.jpg", "English", "https://drive.google.com/drive/folders/1pTb3Ln22V5afmsZY0iQYS5MJHSDkMi32");
        createCard("icons/cf.png", "System Analysis And Design", "https://drive.google.com/drive/folders/1ONHM3A8jgY7YTVX2T37QtAlaY2i7EEL6");
        createCard("icons/C.png", "Programming in 'C++'", "https://drive.google.com/drive/folders/1613B-h4fkN2eA043rkAWzVydTMFt2d2Q");
        createCard("icons/os.jpg", "Financial Accounting Tally", "https://drive.google.com/drive/folders/1w9jSje8Jg9L7LP-_wUUNN-fnH-6DHKOA");
        createCard("icons/oa.jpg", "Linux Operating System", "https://drive.google.com/drive/folders/1pCbsFe6I6kJd6BlnnOKOzUJFY1TfSKu2");
        createCard("icons/math.jpg", "E-commerce", "https://drive.google.com/drive/folders/1LS9tiqer0LAzWG7oOer2WZPwNI__glJp");
    }
    else if (semester === "Semester 3") {
        // createCard("icons/sanskrit.jpg", "Sanskrit", "https://drive.google.com/drive/folders/1wNTNmRH8Y1q4pfEY7j2muE-XhpkcjsYr");
        // createCard("icons/english.jpg", "English", "https://drive.google.com/drive/folders/1pTb3Ln22V5afmsZY0iQYS5MJHSDkMi32");
        createCard("icons/cf.png", "Computer Fundamemtal", "https://drive.google.com/drive/folders/1ONHM3A8jgY7YTVX2T37QtAlaY2i7EEL6");
        createCard("icons/C.png", "Programming in C", "https://drive.google.com/drive/folders/1613B-h4fkN2eA043rkAWzVydTMFt2d2Q");
        createCard("icons/os.jpg", "Operating System", "https://drive.google.com/drive/folders/1w9jSje8Jg9L7LP-_wUUNN-fnH-6DHKOA");
        createCard("icons/oa.jpg", "Office Automation", "https://drive.google.com/drive/folders/1pCbsFe6I6kJd6BlnnOKOzUJFY1TfSKu2");
        createCard("icons/math.jpg", "Discrete Mathematics", "https://drive.google.com/drive/folders/1LS9tiqer0LAzWG7oOer2WZPwNI__glJp");
        // createCard("icons/stats.webp", "Statistic", "https://drive.google.com/drive/folders/1Lo0hVgFqWqMIcoMAKQCEKWG1t2aaWXyd");
    }
    else if (semester === "Semester 4") {
        // createCard("icons/sanskrit.jpg", "Sanskrit", "https://drive.google.com/drive/folders/1wNTNmRH8Y1q4pfEY7j2muE-XhpkcjsYr");
        // createCard("icons/english.jpg", "English", "https://drive.google.com/drive/folders/1pTb3Ln22V5afmsZY0iQYS5MJHSDkMi32");
        // createCard("icons/cf.png", "Computer Fundamemtal", "https://drive.google.com/drive/folders/1ONHM3A8jgY7YTVX2T37QtAlaY2i7EEL6");
        // createCard("icons/C.png", "Programming in C", "https://drive.google.com/drive/folders/1613B-h4fkN2eA043rkAWzVydTMFt2d2Q");
        createCard("icons/os.jpg", "Operating System", "https://drive.google.com/drive/folders/1w9jSje8Jg9L7LP-_wUUNN-fnH-6DHKOA");
        createCard("icons/oa.jpg", "Office Automation", "https://drive.google.com/drive/folders/1pCbsFe6I6kJd6BlnnOKOzUJFY1TfSKu2");
        createCard("icons/math.jpg", "Discrete Mathematics", "https://drive.google.com/drive/folders/1LS9tiqer0LAzWG7oOer2WZPwNI__glJp");
        createCard("icons/stats.webp", "Statistic", "https://drive.google.com/drive/folders/1Lo0hVgFqWqMIcoMAKQCEKWG1t2aaWXyd");
    }
    else if (semester === "Semester 5") {
        // createCard("icons/sanskrit.jpg", "Sanskrit", "https://drive.google.com/drive/folders/1wNTNmRH8Y1q4pfEY7j2muE-XhpkcjsYr");
        // createCard("icons/english.jpg", "English", "https://drive.google.com/drive/folders/1pTb3Ln22V5afmsZY0iQYS5MJHSDkMi32");
        // createCard("icons/cf.png", "Computer Fundamemtal", "https://drive.google.com/drive/folders/1ONHM3A8jgY7YTVX2T37QtAlaY2i7EEL6");
        // createCard("icons/C.png", "Programming in C", "https://drive.google.com/drive/folders/1613B-h4fkN2eA043rkAWzVydTMFt2d2Q");
        // createCard("icons/os.jpg", "Operating System", "https://drive.google.com/drive/folders/1w9jSje8Jg9L7LP-_wUUNN-fnH-6DHKOA");
        createCard("icons/oa.jpg", "Office Automation", "https://drive.google.com/drive/folders/1pCbsFe6I6kJd6BlnnOKOzUJFY1TfSKu2");
        createCard("icons/math.jpg", "Discrete Mathematics", "https://drive.google.com/drive/folders/1LS9tiqer0LAzWG7oOer2WZPwNI__glJp");
        createCard("icons/stats.webp", "Statistic", "https://drive.google.com/drive/folders/1Lo0hVgFqWqMIcoMAKQCEKWG1t2aaWXyd");        
    }
    else if (semester === "Semester 6") {
        createCard("icons/sanskrit.jpg", "Sanskrit", "https://drive.google.com/drive/folders/1wNTNmRH8Y1q4pfEY7j2muE-XhpkcjsYr");
        // createCard("icons/english.jpg", "English", "https://drive.google.com/drive/folders/1pTb3Ln22V5afmsZY0iQYS5MJHSDkMi32");
        // createCard("icons/cf.png", "Computer Fundamemtal", "https://drive.google.com/drive/folders/1ONHM3A8jgY7YTVX2T37QtAlaY2i7EEL6");
        // createCard("icons/C.png", "Programming in C", "https://drive.google.com/drive/folders/1613B-h4fkN2eA043rkAWzVydTMFt2d2Q");
        // createCard("icons/os.jpg", "Operating System", "https://drive.google.com/drive/folders/1w9jSje8Jg9L7LP-_wUUNN-fnH-6DHKOA");
        // createCard("icons/oa.jpg", "Office Automation", "https://drive.google.com/drive/folders/1pCbsFe6I6kJd6BlnnOKOzUJFY1TfSKu2");
        // createCard("icons/math.jpg", "Discrete Mathematics", "https://drive.google.com/drive/folders/1LS9tiqer0LAzWG7oOer2WZPwNI__glJp");
        // createCard("icons/stats.webp", "Statistic", "https://drive.google.com/drive/folders/1Lo0hVgFqWqMIcoMAKQCEKWG1t2aaWXyd");
    }
   
}


createCard("icons/sanskrit.jpg", "Sanskrit", "https://drive.google.com/drive/folders/1wNTNmRH8Y1q4pfEY7j2muE-XhpkcjsYr");
    createCard("icons/english.jpg", "English", "https://drive.google.com/drive/folders/1pTb3Ln22V5afmsZY0iQYS5MJHSDkMi32");
    createCard("icons/cf.png", "Computer Fundamemtal", "https://drive.google.com/drive/folders/1ONHM3A8jgY7YTVX2T37QtAlaY2i7EEL6");
    createCard("icons/C.png", "Programming in C", "https://drive.google.com/drive/folders/1613B-h4fkN2eA043rkAWzVydTMFt2d2Q");
    createCard("icons/os.jpg", "Operating System", "https://drive.google.com/drive/folders/1w9jSje8Jg9L7LP-_wUUNN-fnH-6DHKOA");
    createCard("icons/oa.jpg", "Office Automation", "https://drive.google.com/drive/folders/1pCbsFe6I6kJd6BlnnOKOzUJFY1TfSKu2");
    createCard("icons/math.jpg", "Discrete Mathematics", "https://drive.google.com/drive/folders/1LS9tiqer0LAzWG7oOer2WZPwNI__glJp");
    createCard("icons/stats.webp", "Statistic", "https://drive.google.com/drive/folders/1Lo0hVgFqWqMIcoMAKQCEKWG1t2aaWXyd");

let bar = document.getElementById("bar")
let mobNav = document.querySelector(".mob-nav")
console.log(mobNav);
let toggle = 0;
bar.addEventListener("click", () => {
    if (toggle == 0) {
        mobNav.style.display = "block"
        toggle++
    }
    else {
        mobNav.style.display = "none"
        toggle = 0
    }
})














// const semester = {
//     sem1 : sem1(),
//     sem2 : sem2(),
//     sem3 : sem3(),
//     sem4 : sem4(),

// }

// function sem1() {
//     createCard("icons/sanskrit.jpg", "Sanskrit", "https://drive.google.com/drive/folders/1wNTNmRH8Y1q4pfEY7j2muE-XhpkcjsYr");
//     createCard("icons/english.jpg", "English", "https://drive.google.com/drive/folders/1pTb3Ln22V5afmsZY0iQYS5MJHSDkMi32");
//     createCard("icons/cf.png", "Computer Fundamemtal", "https://drive.google.com/drive/folders/1ONHM3A8jgY7YTVX2T37QtAlaY2i7EEL6");
//     createCard("icons/C.png", "Programming in C", "https://drive.google.com/drive/folders/1613B-h4fkN2eA043rkAWzVydTMFt2d2Q");
//     createCard("icons/os.jpg", "Operating System", "https://drive.google.com/drive/folders/1w9jSje8Jg9L7LP-_wUUNN-fnH-6DHKOA");
//     createCard("icons/oa.jpg", "Office Automation", "https://drive.google.com/drive/folders/1pCbsFe6I6kJd6BlnnOKOzUJFY1TfSKu2");
//     createCard("icons/math.jpg", "Discrete Mathematics", "https://drive.google.com/drive/folders/1LS9tiqer0LAzWG7oOer2WZPwNI__glJp");
//     createCard("icons/stats.webp", "Statistic", "https://drive.google.com/drive/folders/1Lo0hVgFqWqMIcoMAKQCEKWG1t2aaWXyd");
// }
function sem2() {
    createCard("icons/sanskrit.jpg", "Sanskrit", "https://drive.google.com/drive/folders/1wNTNmRH8Y1q4pfEY7j2muE-XhpkcjsYr");
    // createCard("icons/english.jpg", "English", "https://drive.google.com/drive/folders/1pTb3Ln22V5afmsZY0iQYS5MJHSDkMi32");
    // createCard("icons/cf.png", "Computer Fundamemtal", "https://drive.google.com/drive/folders/1ONHM3A8jgY7YTVX2T37QtAlaY2i7EEL6");
    // createCard("icons/C.png", "Programming in C", "https://drive.google.com/drive/folders/1613B-h4fkN2eA043rkAWzVydTMFt2d2Q");
    createCard("icons/os.jpg", "Operating System", "https://drive.google.com/drive/folders/1w9jSje8Jg9L7LP-_wUUNN-fnH-6DHKOA");
    createCard("icons/oa.jpg", "Office Automation", "https://drive.google.com/drive/folders/1pCbsFe6I6kJd6BlnnOKOzUJFY1TfSKu2");
    createCard("icons/math.jpg", "Discrete Mathematics", "https://drive.google.com/drive/folders/1LS9tiqer0LAzWG7oOer2WZPwNI__glJp");
    createCard("icons/stats.webp", "Statistic", "https://drive.google.com/drive/folders/1Lo0hVgFqWqMIcoMAKQCEKWG1t2aaWXyd");
}
// function sem3() {
//     createCard("icons/sanskrit.jpg", "Sanskrit", "https://drive.google.com/drive/folders/1wNTNmRH8Y1q4pfEY7j2muE-XhpkcjsYr");
//     createCard("icons/english.jpg", "English", "https://drive.google.com/drive/folders/1pTb3Ln22V5afmsZY0iQYS5MJHSDkMi32");
//     createCard("icons/cf.png", "Computer Fundamemtal", "https://drive.google.com/drive/folders/1ONHM3A8jgY7YTVX2T37QtAlaY2i7EEL6");
//     createCard("icons/C.png", "Programming in C", "https://drive.google.com/drive/folders/1613B-h4fkN2eA043rkAWzVydTMFt2d2Q");
//     createCard("icons/os.jpg", "Operating System", "https://drive.google.com/drive/folders/1w9jSje8Jg9L7LP-_wUUNN-fnH-6DHKOA");
//     createCard("icons/oa.jpg", "Office Automation", "https://drive.google.com/drive/folders/1pCbsFe6I6kJd6BlnnOKOzUJFY1TfSKu2");
//     createCard("icons/math.jpg", "Discrete Mathematics", "https://drive.google.com/drive/folders/1LS9tiqer0LAzWG7oOer2WZPwNI__glJp");
//     createCard("icons/stats.webp", "Statistic", "https://drive.google.com/drive/folders/1Lo0hVgFqWqMIcoMAKQCEKWG1t2aaWXyd");
// }
// function sem4() {
//     createCard("icons/sanskrit.jpg", "Sanskrit", "https://drive.google.com/drive/folders/1wNTNmRH8Y1q4pfEY7j2muE-XhpkcjsYr");
//     createCard("icons/english.jpg", "English", "https://drive.google.com/drive/folders/1pTb3Ln22V5afmsZY0iQYS5MJHSDkMi32");
//     createCard("icons/cf.png", "Computer Fundamemtal", "https://drive.google.com/drive/folders/1ONHM3A8jgY7YTVX2T37QtAlaY2i7EEL6");
//     createCard("icons/C.png", "Programming in C", "https://drive.google.com/drive/folders/1613B-h4fkN2eA043rkAWzVydTMFt2d2Q");
//     createCard("icons/os.jpg", "Operating System", "https://drive.google.com/drive/folders/1w9jSje8Jg9L7LP-_wUUNN-fnH-6DHKOA");
//     createCard("icons/oa.jpg", "Office Automation", "https://drive.google.com/drive/folders/1pCbsFe6I6kJd6BlnnOKOzUJFY1TfSKu2");
//     createCard("icons/math.jpg", "Discrete Mathematics", "https://drive.google.com/drive/folders/1LS9tiqer0LAzWG7oOer2WZPwNI__glJp");
//     createCard("icons/stats.webp", "Statistic", "https://drive.google.com/drive/folders/1Lo0hVgFqWqMIcoMAKQCEKWG1t2aaWXyd");
// }


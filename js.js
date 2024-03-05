let card = ""
function createCard(image, sub, link) {
    card += `
    <div class="card h-96 w-72 bg-blue-600 flex flex-col justify-center items-center rounded-md border-2 border-cyan-700 p-6 gap-4">
    <div class="img">
        <img class=" w-44  h-44 object-fill object-bottom rounded-full bg-white" src="${image}" alt="">
    </div>
    <div class="txt text-xl font-semibold text-wrap  w-[80%]">
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
        createCard("icons/sem1/cf1.png", "Computer Fundamemtal", "https://drive.google.com/drive/folders/1ONHM3A8jgY7YTVX2T37QtAlaY2i7EEL6");
        createCard("icons/sem1/C.png", "Programming in C", "https://drive.google.com/drive/folders/1613B-h4fkN2eA043rkAWzVydTMFt2d2Q");
        createCard("icons/sem1/os.jpg", "Operating System", "https://drive.google.com/drive/folders/1w9jSje8Jg9L7LP-_wUUNN-fnH-6DHKOA");
        createCard("icons/sem1/oa.jpg", "Office Automation", "https://drive.google.com/drive/folders/1pCbsFe6I6kJd6BlnnOKOzUJFY1TfSKu2");
        createCard("icons/sem1/math.jpg", "Discrete Mathematics", "https://drive.google.com/drive/folders/1LS9tiqer0LAzWG7oOer2WZPwNI__glJp");
        createCard("icons/sem1/stats.webp", "Statistic", "https://drive.google.com/drive/folders/1Lo0hVgFqWqMIcoMAKQCEKWG1t2aaWXyd");

    } else if (semester === "Semester 2") {
        createCard("icons/sem2/sanskrit.jpg", "Sanskrit", "https://drive.google.com/drive/folders/1C_bsYo7h6ToUacIBgBj-jspvAK8aIukB");
        createCard("icons/sem2/english.jpg", "English", "https://drive.google.com/drive/folders/1ABs-LmNIkCRy8fLfir97zogXgtVyTseZ");
        createCard("icons/sem2/SAAD.jpg", "System Analysis And Design", "https://drive.google.com/drive/folders/14eazmlNy25Wiwy1Aj6JlIkXXs0bsZqOl");
        createCard("icons/sem2/c++.jpg", "Programming in 'C++'", "https://drive.google.com/drive/folders/1yVTU3BYdZNC8JjBbr6I9dWko0qXmCQ5x");
        createCard("icons/sem2/tally.png", "Financial Accounting Tally", "https://drive.google.com/drive/folders/1IcHN94DH4f1XITD4LSt6n3AIv5M5dfEp");
        createCard("icons/sem2/linux.png", "Linux Operating System", "https://drive.google.com/drive/folders/1mGxC0xmzrtmhGdhe0UGlLcYEH2Y1B7wD");
        createCard("icons/sem2/e-com.png", "E-commerce", "https://drive.google.com/drive/folders/1nqMbZMzsMyozRHAjfNC0YdTfSoMvwtHj");
    }
    else if (semester === "Semester 3") {
        createCard("icons/sem3/cc.png", "Cloud Computing", "https://drive.google.com/drive/folders/1aeTUsLFx2SqdGcdGzwkoXS8qeUtydHWG");
        createCard("icons/sem3/ds.png", "Data Structure", "https://drive.google.com/drive/folders/1aatqH2VIWjcBj8Hw47ZgvQDffAGdPNcn");
        createCard("icons/sem3/dbms.webp", "DBMS", "https://drive.google.com/drive/folders/1a_GiqEdtSCWV1keGYhsKDLzMDAn1G3vL");
        createCard("icons/sem3/wt.jpg", "Web Technology-01", "https://drive.google.com/drive/folders/1pCbsFe6I6kJd6BlnnOKOzUJFY1TfSKu2");
        createCard("icons/sem3/math.jpg", "Discrete Mathematics", "https://drive.google.com/drive/folders/1adxlslS-u1t3G0TzzZ4qCeNgiYnMuSyp");
    }
    else if (semester === "Semester 4") {
        createCard("icons/sem4/se.png", "Software Engineering", "https://drive.google.com/drive/folders/1kGShoTpyOuqVt5DTj8gpCZFOgDF77Jwx");
        createCard("icons/sem4/pl.png", "SQL and Pl/SQL", "https://drive.google.com/drive/folders/1k7A25TYevxkiWLoxlNLNTD1W-90g8254");
        createCard("icons/sem4/iot.png", "Internet of Things", "https://drive.google.com/drive/folders/1kBUbDwH2VbHDIQpxLSO5h_QJzvfbz9Zs");
        createCard("icons/sem4/wt.jpg", "Web Technology-02", "https://drive.google.com/drive/folders/1k5uoVAbqXLMUJag66ROyRsX2RG-qNM4H");
        createCard("icons/sem4/de.png", "Digital Electronics", "https://drive.google.com/drive/folders/1kGu-4EMm_5-O0OuWMcBJuNu-RSatfzM4");
    }
    else if (semester === "Semester 5") {
        createCard("icons/sem5/java.png", "Core Java", "https://drive.google.com/drive/folders/1Dtx2xIff95fp_360w-hTMvBo_aowX4bi");
        createCard("icons/sem5/st.jpg", "Software Testing", "https://drive.google.com/drive/folders/1DtxKsBbbcRIaRKrDX276Id2wvNFBLpKf");
        createCard("icons/sem5/asp.webp", "ASP.NET", "https://drive.google.com/drive/folders/1Dxs0oELaC0ZRYoqx5YVApdcFIUaSL9cJ");
        createCard("icons/sem5/php.png", "PHP", "https://drive.google.com/drive/folders/1DwGNYY9ZH3d-mB-Q-QxzSeAJVnX5K4VG");

    }
    else if (semester === "Semester 6") {
        createCard("icons/sem6/studio.png", "Android Programming", "https://drive.google.com/drive/folders/1ehrncavMjb89xwLbSCoUDjAHyJXeCUF8");
        createCard("icons/sem6/py.png", "Python Programming", "");
        createCard("icons/sem6/cy.jpg", "Cyber Security", "");
        createCard("icons/sem6/dc.png", "Data communication And Network", "");

    }

}


createCard("icons/sem1/sanskrit.jpg", "Sanskrit", "https://drive.google.com/drive/folders/1wNTNmRH8Y1q4pfEY7j2muE-XhpkcjsYr");
createCard("icons/sem1/english.jpg", "English", "https://drive.google.com/drive/folders/1pTb3Ln22V5afmsZY0iQYS5MJHSDkMi32");
createCard("icons/sem1/cf1.png", "Computer Fundamemtal", "https://drive.google.com/drive/folders/1ONHM3A8jgY7YTVX2T37QtAlaY2i7EEL6");
createCard("icons/sem1/C.png", "Programming in C", "https://drive.google.com/drive/folders/1613B-h4fkN2eA043rkAWzVydTMFt2d2Q");
createCard("icons/sem1/os.jpg", "Operating System", "https://drive.google.com/drive/folders/1w9jSje8Jg9L7LP-_wUUNN-fnH-6DHKOA");
createCard("icons/sem1/oa.jpg", "Office Automation", "https://drive.google.com/drive/folders/1pCbsFe6I6kJd6BlnnOKOzUJFY1TfSKu2");
createCard("icons/sem1/math.jpg", "Discrete Mathematics", "https://drive.google.com/drive/folders/1LS9tiqer0LAzWG7oOer2WZPwNI__glJp");
createCard("icons/sem1/stats.webp", "Statistic", "https://drive.google.com/drive/folders/1Lo0hVgFqWqMIcoMAKQCEKWG1t2aaWXyd");

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


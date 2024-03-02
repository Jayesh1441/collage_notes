let card = ""
function createCard(image, sub, link) {
   card += `
    <div class="card min-h-24 max-w-80 bg-blue-400 flex flex-col justify-center items-center rounded-md border-2 border-cyan-700 p-6 gap-4">
    <div class="img w-44 ">
        <img class="object-cover rounded-full" src="${image}" alt="">
    </div>
    <div class="txt text-xl font-semibold text-wrap max-w-fit">
        <h1>
            ${sub}
        </h1>
    </div>
    <button class="py-2 px-16 bg-green-600 mt-5 font-semibold text-white rounded" ><a href="${link}">Browse notes</a></button>
 </div>
    `
    console.log(card);
 let cards =  document.querySelector(".cards")
 cards.innerHTML = card;
 console.log(cards);

}

createCard("icons/sanskrit.jpg", "Sanskrit", "https://drive.google.com/drive/folders/1wNTNmRH8Y1q4pfEY7j2muE-XhpkcjsYr");
createCard("icons/sanskrit.jpg", "English", "https://drive.google.com/drive/folders/1wNTNmRH8Y1q4pfEY7j2muE-XhpkcjsYr");
createCard("icons/sanskrit.jpg", "Computer Fundamemtal", "https://drive.google.com/drive/folders/1wNTNmRH8Y1q4pfEY7j2muE-XhpkcjsYr");
createCard("icons/sanskrit.jpg", "English", "https://drive.google.com/drive/folders/1wNTNmRH8Y1q4pfEY7j2muE-XhpkcjsYr");
createCard("icons/sanskrit.jpg", "English", "https://drive.google.com/drive/folders/1wNTNmRH8Y1q4pfEY7j2muE-XhpkcjsYr");
createCard("icons/sanskrit.jpg", "English", "https://drive.google.com/drive/folders/1wNTNmRH8Y1q4pfEY7j2muE-XhpkcjsYr");
createCard("icons/sanskrit.jpg", "English", "https://drive.google.com/drive/folders/1wNTNmRH8Y1q4pfEY7j2muE-XhpkcjsYr");

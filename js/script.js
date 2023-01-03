console.log("Pozdrawiam serdecznie wszystkich Polaków w kraju i za granicą!");

let changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
let header = document.querySelector(".js-section__header")
let changeImageButton = document.querySelector(".js-changeImageButton");
let image = document.querySelector(".js-section__image");

changeBackgroundButton.addEventListener("click", () => {
    header.classList.toggle("greenBackground");
})

changeImageButton.addEventListener("click", () => {
    if (image.getAttribute("src") === "images/burza.jpg") {
        image.setAttribute("src", "images/piorun.jpg");
        changeImageButton.innerText = "Zobacz burzę za dnia";
    }
    else {
        image.setAttribute("src", "images/burza.jpg");
        changeImageButton.innerText = "Zobacz burzę nocą";
    }
})
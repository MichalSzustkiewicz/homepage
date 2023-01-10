{
    const welcome = () => {
        console.log("Pozdrawiam serdecznie wszystkich Polaków w kraju i za granicą!");
    }

    const toggleBackground = () => {
        const header = document.querySelector(".js-section__header");
        header.classList.toggle("section__header--greyBackground");
    };

    const toggleImage = (changeImageButton) => {
        const image = document.querySelector(".js-section__image");
        if (image.getAttribute("src") === "images/burza.jpg") {
            image.setAttribute("src", "images/piorun.jpg");
            changeImageButton.innerText = "Zobacz burzę za dnia";
        }
        else {
            image.setAttribute("src", "images/burza.jpg");
            changeImageButton.innerText = "Zobacz burzę nocą";
        }
    };

    const init = () => {
        const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
        const changeImageButton = document.querySelector(".js-changeImageButton");
        changeBackgroundButton.addEventListener("click", toggleBackground);
        changeImageButton.addEventListener("click", toggleImage);

        welcome();
    };

    init();
}






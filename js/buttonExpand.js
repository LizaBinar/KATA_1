button = document.querySelector(".services__button-expand")
buttonText = button.querySelector("span")
buttonImg = button.querySelector("img")
elements = document.querySelectorAll(".swiper-slide")

button.onclick = () => {
    if (button.dataset.click === "false") {
        button.dataset.click = "true";
        buttonText.textContent = "Скрыть"
        buttonImg.style.transform = "rotate(180deg)"
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove("element")
        }
    } else {
        button.dataset.click = "false";
        buttonText.textContent = "Показать все"
        buttonImg.style.transform = " rotate(0deg)"
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.add("element")
        }
    }
    console.log(button.textContent)
}

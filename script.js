`use strict`;





const toggleBtn = document.querySelector(`.toggle--circle`);



toggleBtn.addEventListener(`click`, () => {
    toggleBtn.classList.toggle(`monthly`);
})
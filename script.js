`use strict`;





const toggleBtn = document.querySelector(`.toggle--circle`);
const priceArray = document.querySelectorAll(`.price`);


toggleBtn.addEventListener(`click`, () => {
    toggleBtn.classList.toggle(`monthly`);

    if (toggleBtn.classList.contains(`monthly`)) {
        priceArray.forEach((el, i) => {
            el.textContent = `${(String(parseInt(el.textContent)) + 9)}.99`
        })
    } else {
        priceArray.forEach((el, i) => {
            el.textContent = `${String(parseInt(el.textContent)).slice(0, -1)}.99`
        })
    }
    
})

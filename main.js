const modalEl = document.querySelector('.modalBlock');
const openModal = document.querySelector('.upScreen__nftButton');

openModal.addEventListener('click', (e) => {
    modalEl.classList.add('modalBlock__show');
    document.body.classList.add('stopScrollong');

})

modalEl.innerHTML = `
    <div class="movieModal">
    <div class="movieModal__container">
        <div class="movieModal__text">
            <div class="movieModal__title">
                Начни прямо сейчас!
            </div>
            <div class="movieModal__description">
                Получи все нужные навыки для заработка на NFT всего за 28 дней!
            </div>
            <input class="movieModal__input" type="text" placeholder="Ваш email"/>
            <div class="bottomBlock">
                <button class="upScreen__nftButton bottomBlock__modalNftButton">Оплатить</button>
            </div>
        </div>
        <img class="movieModal__closeButton" src="/imgs/Vector.png" alt="">
        </div>
    </div>`;
const bottomClose = document.querySelector('.movieModal__closeButton');
bottomClose.addEventListener('click', () => closeModal());

function closeModal() {
    modalEl.classList.remove('modalBlock__show');
    document.body.classList.remove('stopScrollong');
}

window.addEventListener("click", (e) => {
    if (e.target === modalEl) {
        closeModal();
    }
})

window.addEventListener("keydown", (e) => {
    if (e.keyCode === 27) {
        closeModal();
    }
})
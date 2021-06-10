const refs = {
    inputEl: document.querySelector('input'),
    renderEl: document.querySelector('[data-action="render"]'),
    destroyEl: document.querySelector('[data-action="destroy"]'),
    boxesContainer: document.querySelector('#boxes'),
};

refs.renderEl.addEventListener('click', createBoxes);
refs.destroyEl.addEventListener("click", destroyBoxes); 

let collection = [];

function createBoxes(amount) {
    amount = refs.inputEl.value;
    collection.length = amount; 
    collection.fill(0, 0, amount);

    let sizeDiv = 30;
    
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }; 

    const divCollection = collection.map((item, idx) => {
        if(idx!==0) {
            sizeDiv += 10;
        };

        const redColor = getRandomInt(0,255);
        const greenColor = getRandomInt(0,255);
        const blueColor = getRandomInt(0,255);

        const divEl = `<div style="width: ${sizeDiv}px; height: ${sizeDiv}px; background-color: rgb(${redColor}, ${greenColor}, ${blueColor})"></div>`;
        item === divEl;
        return divEl;
    });
    refs.boxesContainer.insertAdjacentHTML("beforeend", divCollection.join(''));
};

function destroyBoxes() {
    refs.inputEl.value = '';
        while (refs.boxesContainer.lastElementChild) {
            refs.boxesContainer.removeChild(refs.boxesContainer.lastElementChild);
    };
};
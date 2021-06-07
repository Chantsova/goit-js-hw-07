const ulRef = document.querySelector('ul#categories');
console.log(`В списке ${ulRef.children.length} категории.`);

const liRef = document.querySelectorAll('.item');
liRef.forEach(item => {
    console.log(`Категория: ${item.firstElementChild.textContent} Количество элементов:${item.lastElementChild.children.length}.`);
})

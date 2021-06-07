const counterValue = document.querySelector('#value');
const increment = document.querySelector('[data-action="increment"]');
const decrement = document.querySelector('[data-action="decrement"]');
let result=0;

increment.addEventListener('click', () => {
    result++;
    increment.addEventListener('click', (onResultSpan));
});

decrement.addEventListener('click', () => {
   result--;  
   decrement.addEventListener('click', (onResultSpan));
});

function onResultSpan () {
counterValue.innerHTML = result;
}

// Оно работает, но по условию отдельно нужно слушатель на обновление интерфейса. Почему?
//increaseBtn.addEventListener('click', () => {
//     result++;
//     counterValue.innerHTML = result;
// });

// decreaseBtn.addEventListener('click', () => {
//    result--;
//     counterValue.innerHTML = result;
// });
const counterValue = document.getElementById('#value');
const increaseBtn = document.querySelector('[data-action="increment"]');
const decreaseBtn = document.querySelector('[data-action="decrement"]');

let result = 0;

increaseBtn.addEventListener('click', () => {
    result +=1;
    console.log(result)
});

decreaseBtn.addEventListener('click', () => {
    result -=1;
    console.log(result)
});
                                                                                                                                                                                                                            
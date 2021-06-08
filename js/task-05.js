const refs = {
    inputEl: document.querySelector('#name-input'),
    outputEl: document.querySelector('#name-output'),
}

refs.inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value.trim() !== '') {
    refs.outputEl.textContent = event.currentTarget.value;
}
    if (event.currentTarget.value.trim() === '') {
    refs.outputEl.textContent = "незнакомец";
}
}
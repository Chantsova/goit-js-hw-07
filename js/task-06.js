const inputsValidation = document.getElementById('validation-input');
const data = document.querySelector('[data-length]');
const value = data.dataset.length;

inputsValidation.addEventListener ('blur', event => {
    if(event.currentTarget.value.length !== Number(value)) {
        event.currentTarget.classList.add("invalid");
        
    }
    else {
        event.currentTarget.classList.add("valid");
    }
    
});

inputsValidation.addEventListener ('focus', event => {
    if(event.currentTarget.classList.contains("invalid")) {
            event.currentTarget.classList.remove("invalid");
        }
    });

import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
let INPUTS_VALUE = JSON.parse(localStorage.getItem("feedback-form-state")) || {};

form.addEventListener('input', throttle(handlerSaveInputsValue, 500));
form.addEventListener('submit', handlerSubmitForm)

function handlerSaveInputsValue(event) {
    INPUTS_VALUE[event.target.name] = event.target.value   
    localStorage.setItem("feedback-form-state", JSON.stringify(INPUTS_VALUE)) 
}

function restoreInput() {
    for (let elem of form) {
        if (INPUTS_VALUE && Object.keys(INPUTS_VALUE).includes(elem.name)) {
            elem.value = INPUTS_VALUE[elem.name]
        }
    }  
}

restoreInput()

function handlerSubmitForm(event) {
    event.preventDefault();
    console.log(INPUTS_VALUE);
    event.currentTarget.reset();
    INPUTS_VALUE = {};
    localStorage.removeItem("feedback-form-state")
}
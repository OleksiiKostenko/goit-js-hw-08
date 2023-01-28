import throttle from 'lodash.throttle';

const STORAGE_FORM_VALUE = "feedback-form-state";

let formData = {};

const refs = {
    form: document.querySelector('form'),
    textarea: document.querySelector('textarea'),
    input: document.querySelector('input'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextInput, 500));

populateFormArea();

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log('Працює');
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_FORM_VALUE);
 }

function onTextInput(evt) { 
    formData[evt.target.name] = evt.target.value;
    console.log(formData);
    localStorage.setItem(STORAGE_FORM_VALUE, JSON.stringify(formData));

}

function populateFormArea() {
    const savedData = localStorage.getItem(STORAGE_FORM_VALUE);
    formData = JSON.parse(savedData) || {};

    console.log(savedData);

    formData.email ? refs.input.value = formData.email : refs.input.value = "";
    formData.message ? refs.textarea.value = formData.message : refs.textarea.value = "";
};



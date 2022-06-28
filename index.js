const valueEl = document.getElementById("value");
const inputEl = document.getElementById("input-value");
const appEl = document.getElementById("app");
const convertEl = document.getElementById("convert-button");
const metersFeetEl = document.getElementById("meters-feet");
const litersGallonsEl = document.getElementById("liters-gallons");
const kilosPoundsEl = document.getElementById("kilos-pounds");

function convertLength() {
    const feet = (Math.round((number * 3.281) * 100) / 100).toFixed(2);
    const meters = (Math.round((number / 3.281) * 100) / 100).toFixed(2);
    metersFeetEl.textContent = `${number} meters = ${feet} feet | ${number} feet = ${meters} meters`;
}

function convertVolume() {
    const gallons = (Math.round((number / 3.785) * 100) / 100).toFixed(2);
    const liters = (Math.round((number * 3.785) * 100) / 100).toFixed(2);
    litersGallonsEl.textContent = `${number} liters = ${gallons} gallons | ${number} gallons = ${liters} liters`;
}

function convertMass() {
    const pounds = (Math.round((number * 2.205) * 100) / 100).toFixed(2);
    const kilos = (Math.round((number / 2.205) * 100) / 100).toFixed(2);
    kilosPoundsEl.textContent = `${number} kilos = ${pounds} pounds | ${number} pounds = ${kilos} kilos`;
}

function calculateInput() {
    let inputValue = inputEl.value;
    if (Number(inputValue)) {
        valueEl.textContent = inputValue;
        number = inputValue;
        convertLength();
        convertVolume();
        convertMass();
        inputValue = "";
    } else {
        inputEl.value = "positive numbers only";
    }
}

function clearText() {
    inputEl.value = "";
}

function pageLoad() {
    convertLength();
    convertVolume();
    convertMass();
}

let number = 20;
valueEl.textContent = number;

inputEl.addEventListener("click", clearText);
convertEl.addEventListener("click",calculateInput);
app.onload = function() {pageLoad()};



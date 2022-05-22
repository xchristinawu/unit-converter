let valueEl = document.getElementById("value");
let metersFeetEl = document.getElementById("meters-feet");
let litersGallonsEl = document.getElementById("liters-gallons")
let kilosPoundsEl = document.getElementById("kilos-pounds")

let number = 20;
valueEl.textContent = number;

function convertLength() {
    let feet = (Math.round((number * 3.281) * 100) / 100).toFixed(2);
    let meters = (Math.round((number / 3.281) * 100) / 100).toFixed(2);
    metersFeetEl.textContent = number + " meters = " + feet + " feet | " + number + " feet = " + meters + " meters"
}

function convertVolume() {
    let gallons = (Math.round((number / 3.785) * 100) / 100).toFixed(2);
    let liters = (Math.round((number * 3.785) * 100) / 100).toFixed(2);
    litersGallonsEl.textContent = number + " liters = " + gallons + " gallons | " + number + " gallons = " + liters + " liters"
}

function convertMass() {
    let pounds = (Math.round((number * 2.205) * 100) / 100).toFixed(2);
    let kilos = (Math.round((number / 2.205) * 100) / 100).toFixed(2);
    kilosPoundsEl.textContent = number + " kilos = " + pounds + " pounds | " + number + " pounds = " + kilos + " kilos"
}

function calculateInput() {
    let inputValue = document.getElementById("input-value").value;
    valueEl.textContent = inputValue;
    number = inputValue;
    convertLength();
    convertVolume();
    convertMass();
    document.getElementById("input-value").value = '';
}

function clearText() {
    document.getElementById("input-value").value = ""
}
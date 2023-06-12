const centigrade = document.querySelector('.jsInputCentigrade');
const fahrenheit = document.querySelector('.jsInputFahrenheit');
let result = document.querySelector('.jsDivResult');


function changeToFahrenheit() {
    if (fahrenheit.value === '') {
        if (isNaN(centigrade.value)) {
            setTimeout(result.innerText = `Enter correct value as number`, 1000)
            centigrade.value = '';
        } else {
            let change = (centigrade.value * 9 / 5) + 32;
            result.innerText = `${change} fahrenheit degree `;
            centigrade.value = '';
        }
    } else if (centigrade.value === '') {
        if (isNaN(fahrenheit.value)) {
            alert("Enter correct value as number")
            fahrenheit.value = '';
        } else {
            let change = (fahrenheit.value - 32) * 5 / 9;
            result.innerText = `${change} centigrade degree`;
            fahrenheit.value = '';
        }
    }
}






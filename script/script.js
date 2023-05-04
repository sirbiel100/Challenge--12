// Error Message
const error_days = document.querySelector('#day-error');
const error_months = document.querySelector('#month-error');
const erro_years = document.querySelector('#year-error');
// Output
const daysResult = document.querySelector('#days');
const monthsResult = document.querySelector('#months');
const yearsResult = document.querySelector('#years');
// Inputs
let isValid = false;
const showDays = document.querySelector('#day');
const showMonths = document.querySelector('#month');
const showYears = document.querySelector('#year');

const submitBttn = document.querySelector('#submitButton');

submitBttn.addEventListener('click', CalculateDT)


showDays.addEventListener('input', (e) => {
    if(showDays.value > 31) {
        error_days.innerHTML = 'Must be a valid date';
        isValid = false;
        return;
    } else {
        isValid = true;
        error_days.innerHTML = '';
    }
    if (+showDays.value === 0) {
        isValid = false;
        error_days.innerHTML = 'This Field is requiered';
        isValid = false;
        return;
    } else {}
    
    
})

showMonths.addEventListener('input', (e) => {
    if(showMonths.value > 12) {
        error_months.innerHTML = 'Must be a valid date';
        isValid = false;
        return;
    } else {
        isValid = true;
        error_months.innerHTML = '';
    }
    if (+showMonths.value === 0) {
        isValid = false;
        error_months.innerHTML = 'This Field is requiered';
        isValid = false;
        return;
    } else {}
    
    
})

showYears.addEventListener('input', (e) => {
    if(showYears.value > 2023) {
        erro_years.innerHTML = 'Must be in the past';
        isValid = false;
        return;
    } else {
        isValid = true;
        erro_years.innerHTML = '';
    }
    if (+showYears.value === 0) {
        isValid = false;
        erro_years.innerHTML = 'This Field is requiered';
        isValid = false;
        return;
    } else {}
    
    
})

function CalculateDT() {
    
    if(isValid) {
        let birthday = `${showMonths.value}/${showDays.value}/${showYears.value}`;
        console.log(birthday)
        let birthdayObj = new Date(birthday);
        let ageDiffMill = Date.now() - birthdayObj;
        let ageDate = new Date(ageDiffMill);
        let ageYears = ageDate.getUTCFullYear() - 1970;
        let ageMonth = ageDate.getUTCMonth();
        let ageDay = ageDate.getUTCDay() - 1;
        daysResult.textContent = ageDay;
        monthsResult.textContent = ageMonth;
        yearsResult.textContent = ageYears;
    } else {
        alert('error');
    }
}





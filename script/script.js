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
//Label 
const labelDay = document.querySelector('#labelDay');
const labelMonth = document.querySelector('#labelMonth');
const labelYear = document.querySelector('#labelYear')
//Button
const submitBttn = document.querySelector('#submitButton');

submitBttn.addEventListener('click', CalculateDT)


showDays.addEventListener('input', (e) => {
    if(showDays.value > 31) {
        error_days.innerHTML = 'Must be a valid date';
        showDays.style.borderColor = 'hsl(0, 100%, 67%)';
        labelDay.style.color = 'hsl(0, 100%, 67%)'
        isValid = false;
        return;
    } else {
        isValid = true;
        error_days.innerHTML = '';
        showDays.style.borderColor = 'hsl(0, 0%, 86%)';
        labelDay.style.color = 'hsl(0, 1%, 44%)';
    }
    if (+showDays.value === 0) {
        isValid = false;
        error_days.innerHTML = 'This Field is requiered';
        showDays.style.borderColor = 'hsl(0, 100%, 67%)';
        labelDay.style.color = 'hsl(0, 100%, 67%)'
        isValid = false;
        return;
    } else {}
    
    
})

showMonths.addEventListener('input', (e) => {
    if(showMonths.value > 12) {
        error_months.innerHTML = 'Must be a valid date';
        showMonths.style.borderColor = 'hsl(0, 100%, 67%)';
        labelMonth.style.color = 'hsl(0, 100%, 67%)';
        isValid = false;
        return;
    } else {
        isValid = true;
        error_months.innerHTML = '';
        showMonths.style.borderColor = 'hsl(0, 0%, 86%)';
        labelMonth.style.color = 'hsl(0, 1%, 44%)';
    }
    if (+showMonths.value === 0) {
        isValid = false;
        error_months.innerHTML = 'This Field is requiered';
        showMonths.style.borderColor = 'hsl(0, 100%, 67%)';
        labelMonth.style.color = 'hsl(0, 100%, 67%)';
        isValid = false;
        return;
    } else {}
    
    
})

showYears.addEventListener('input', (e) => {
    if(showYears.value > 2023) {
        erro_years.innerHTML = 'Must be in the past';
        showYears.style.borderColor = 'hsl(0, 100%, 67%)';
        labelYear.style.color = 'hsl(0, 100%, 67%)';
        isValid = false;
        return;
    } else {
        isValid = true;
        erro_years.innerHTML = '';
        showYears.style.borderColor = 'hsl(0, 0%, 86%)';
        labelYear.style.color = 'hsl(0, 1%, 44%)';
    }
    if (+showYears.value === 0) {
        isValid = false;
        erro_years.innerHTML = 'This Field is requiered';
        showYears.style.borderColor = 'hsl(0, 100%, 67%)';
        labelYear.style.color = 'hsl(0, 100%, 67%)';
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
        let ageDay = ageDate.getUTCDay();
        daysResult.textContent = ageDay;
        monthsResult.textContent = ageMonth;
        yearsResult.textContent = ageYears;
    } else {
        alert('error');
    }
}





// Error Message
const days = document.querySelector('#day-error');
const months = document.querySelector('#month-error')
const years = document.querySelector('#year-error')
// Output
const daysResult = document.querySelector('#days')
const monthsResult = document.querySelector('#months')
const yearsResult = document.querySelector('#years')
// Inputs
const showDays = document.querySelector('#day')
const showMonths = document.querySelector('#month')
const showYears = document.querySelector('#year')

const TODAY = new Date() 
const date = date.gateDate();
const month = 1 + date.getMonth();
const year = date.getFullYear();


showDays.addEventListener('input', (dayEvent) => {
    const inputDay = dayEvent.target
    if (inputDay.validity.valid) {
        
    } else {
        if (inputDay.validity.valueMissing) {
            days.innerHTML = 'This field is requiered';
        } else if (inputDay.validity.patternMismatch) {
            days.innerHTML = 'Must be a valid day';
        } else if (inputElement.validity.typeMismatch || showDays.value > 31) {
            days.innerHTML = 'Must be a valid date';
        } else {days.innerHTML = ''}
    }
})

showMonths.addEventListener('input', (monthEvent) => {
    const inputDay = monthEvent.target
    if (inputDay.validity.valid) {
        
    } else {
        if (inputDay.validity.valueMissing) {
            months.innerHTML = 'This field is requiered';
        } else if (inputDay.validity.patternMismatch) {
            months.innerHTML = 'Must be a valid month';
        } else if (inputElement.validity.typeMismatch || showMonths.value > 12) {
            months.innerHTML = 'Must be a valid date';
        } else {months.innerHTML = ''}
    }
})

showYears.addEventListener('input', (yearEvent) => {
    const inputDay = yearEvent.target
    if (inputDay.validity.valid) {
        years.innerHTML = ''
    } else {
        if (inputDay.validity.valueMissing) {
            years.innerHTML = 'This field is requiered';
        } else if (inputDay.validity.patternMismatch) {
            years.innerHTML = 'Must be in the past';
            
        } else if (yearEvent.value > 2023) {
            years.innerHTML = 'Must be in the past'

        }else if (inputElement.validity.typeMismatch) {
            years.innerHTML = 'Must be a valid date';

        } else {years.innerHTML = ''}
    }
})

function submit () {
    window.alert('Oi')
}





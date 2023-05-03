// Error Message
const days = document.querySelector('#day-error');
const months = document.querySelector('#month-error')
const years = document.querySelector('#year-error')
const date = [days, months, years]
// Output
const ageDays = document.querySelector('#days')
const ageMonths = document.querySelector('#months')
const ageYears = document.querySelector('#years')
// Inputs
const showDays = document.querySelector('#day')
const showMonths = document.querySelector('#month')
const showYears = document.querySelector('#year')

function timeOfLiving (birthday) {
    const now = new Date() 
    const diff = now - birthday; 

    const day = Math.floor((diff / 1000 / 60 / 60 / 24) % 365.25);
    const month = Math.floor((diff / 30.4375));
    const year = Math.floor(diff / 1000 / 60 / 60 / 24 / 365.25);
}

showDays.addEventListener('input', (dayEvent) => {
    const inputDay = dayEvent.target
    if (inputDay.validity.valid) {
        const outPutDay = Math.floor((diff / 1000 / 60 / 60 / 24) % 365.25);
    } else {}
})





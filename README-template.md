# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![Desktop Preview](images/desktop-preview.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JS
- Mobile-first workflow
- SCSS


### What I learned

I learned a lot on this challenge, things like: javascript utc, how to use LET variable better and the 'Input' function.


```js
const proudOfThisFunc = input => {
  console.log('🎉')
}

const age = new Date()
 let ageYears = ageDate.getUTCFullYear() - 1970;
 let ageMonth = ageDate.getUTCMonth();
 let ageDay = ageDate.getUTCDay();
```

### Continued development

I want to continue developing and go deeper on Js functions and variables to get a better understanding


### Useful resources

- [Tech Upfront](https://www.youtube.com/watch?v=z_6aUavlRKI) - This guy helped me a lot to understand better the input function and UTC time zone in javascript.

## Author

- LinkedIn - [Gabriel Crispim](https://www.linkedin.com/in/gabriel-crispim-5b6945221/)
- Frontend Mentor - [sirbiel100](https://www.frontendmentor.io/profile/sirbiel100)

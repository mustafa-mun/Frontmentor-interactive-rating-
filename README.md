# Frontmentor-interactive-rating-

# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 


### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](frontmentor-projects/interactive-rating-component-main/solution-images/desktop-active.png)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla Javascript

### What I learned

I learned how to select multiple elements with same id and manipulate them with for loop.

```js
const rateBtn = document.querySelectorAll("#rate-btn")
for(let i = 0; i < rateBtn.length; i++) {
    if(rateBtn[i] !== rateBtn[0]) {
      rateBtn[i].style.backgroundColor = "hsl(218, 9%, 23%)"
      rateBtn[i].style.color = "hsl(217, 12%, 63%)"
    }
  }
```
### Continued development

I'm currently on freecodecamp JavaScript Algorithms and Data Structures course. With this challange, i understood that i need to focus more on the DOM and DOM manipulation because i struggled with the topics like selecting multiple elements with same id and concepts like innerHtml . I will look for some tutorials and docs for DOM and DOM manipulation.

### Useful resources

- [Media Queries](https://www.w3schools.com/css/css3_mediaqueries_ex.a) - This helped me with media queries for responsive design.
- [Stack overflow](https://stackoverflow.com/questions/3607291/javascript-and-getelementbyid-for-multiple-elements-with-the-same-id) - This helped me with selecting multiple elements with same id.
- [CSS Gradient](https://cssgradient.io/) - For background colors


## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/Mustafacmn)
- Twitter - [@yourusername](https://twitter.com/Mustafa33878)



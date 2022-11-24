const rateBtn = document.querySelectorAll("#rate-btn")
const submitBtn = document.getElementById("submit-btn");
const sectionContainer = document.querySelector("section")

let choice = 0;

rateBtn[0].addEventListener("click", function() {
  choice = 1
  rateBtn[0].style.backgroundColor = "hsl(25, 97%, 53%)"
  rateBtn[0].style.color = "white"
  for(let i = 0; i < rateBtn.length; i++) {
    if(rateBtn[i] !== rateBtn[0]) {
      rateBtn[i].style.backgroundColor = "hsl(218, 9%, 23%)"
      rateBtn[i].style.color = "hsl(217, 12%, 63%)"
    }
  }

  submitBtn.addEventListener("click", function() {
    sectionContainer.innerHTML = `
    <div class="thanks-container">
    <img class="thanks" src="images/illustration-thank-you.svg" alt="">
    <button class="thank-button">You selected ${choice} out of 5</button>
    <div class="text-container">
      <p class="new-white-text" style="margin-bottom:30px;">Thank you!</p>
      <p class="new-gray-text">We appricate you taking the time to give a rating.</p>
      <p class="new-gray-text">If you ever need more support,dont hesitate to</p>
      <p class="new-gray-text">get in touch!</p>
    </div>
    `
  })
});

rateBtn[1].addEventListener("click", function() {
  choice = 2

  rateBtn[1].style.backgroundColor = "hsl(25, 97%, 53%)"
  rateBtn[1].style.color = "white"

  for(let i = 0; i < rateBtn.length; i++) {
    if(rateBtn[i] !== rateBtn[1]) {
      rateBtn[i].style.backgroundColor = "hsl(218, 9%, 23%)"
      rateBtn[i].style.color = "hsl(217, 12%, 63%)"
    }
  }

  submitBtn.addEventListener("click", function() {
    sectionContainer.innerHTML = `
    <div class="thanks-container">
    <img class="thanks" src="images/illustration-thank-you.svg" alt="">
    <button class="thank-button">You selected ${choice} out of 5</button>
    <div class="text-container">
      <p class="new-white-text" style="margin-bottom:30px;">Thank you!</p>
      <p class="new-gray-text">We appricate you taking the time to give a rating.</p>
      <p class="new-gray-text">If you ever need more support,dont hesitate to</p>
      <p class="new-gray-text">get in touch!</p>
    </div>
    `
  })
});

rateBtn[2].addEventListener("click", function() {
  choice = 3
  rateBtn[2].style.backgroundColor = "hsl(25, 97%, 53%)"
  rateBtn[2].style.color = "white"
  for(let i = 0; i < rateBtn.length; i++) {
    if(rateBtn[i] !== rateBtn[2]) {
      rateBtn[i].style.backgroundColor = "hsl(218, 9%, 23%)"
      rateBtn[i].style.color = "hsl(217, 12%, 63%)"
    }
  }

  submitBtn.addEventListener("click", function() {
    sectionContainer.innerHTML = `
    <div class="thanks-container">
    <img class="thanks" src="images/illustration-thank-you.svg" alt="">
    <button class="thank-button">You selected ${choice} out of 5</button>
    <div class="text-container">
      <p class="new-white-text" style="margin-bottom:30px;">Thank you!</p>
      <p class="new-gray-text">We appricate you taking the time to give a rating.</p>
      <p class="new-gray-text">If you ever need more support,dont hesitate to</p>
      <p class="new-gray-text">get in touch!</p>
    </div>
    `
  })
});

rateBtn[3].addEventListener("click", function() {
  choice = 4
  rateBtn[3].style.backgroundColor = "hsl(25, 97%, 53%)"
  rateBtn[3].style.color = "white"
  for(let i = 0; i < rateBtn.length; i++) {
    if(rateBtn[i] !== rateBtn[3]) {
      rateBtn[i].style.backgroundColor = "hsl(218, 9%, 23%)"
      rateBtn[i].style.color = "hsl(217, 12%, 63%)"
    }
  }

  submitBtn.addEventListener("click", function() {
    sectionContainer.innerHTML = `
    <div class="thanks-container">
    <img class="thanks" src="images/illustration-thank-you.svg" alt="">
    <button class="thank-button">You selected ${choice} out of 5</button>
    <div class="text-container">
      <p class="new-white-text" style="margin-bottom:30px;">Thank you!</p>
      <p class="new-gray-text">We appricate you taking the time to give a rating.</p>
      <p class="new-gray-text">If you ever need more support,dont hesitate to</p>
      <p class="new-gray-text">get in touch!</p>
    </div>
    `
  })
});

rateBtn[4].addEventListener("click", function() {
  choice = 5
  rateBtn[4].style.backgroundColor = "hsl(25, 97%, 53%)"
  rateBtn[4].style.color = "white"
  for(let i = 0; i < rateBtn.length; i++) {
    if(rateBtn[i] !== rateBtn[4]) {
      rateBtn[i].style.backgroundColor = "hsl(218, 9%, 23%)"
      rateBtn[i].style.color = "hsl(217, 12%, 63%)"
    }
  }

  submitBtn.addEventListener("click", function() {
    sectionContainer.innerHTML = `
    <div class="thanks-container">
    <img class="thanks" src="images/illustration-thank-you.svg" alt="">
    <button class="thank-button">You selected ${choice} out of 5</button>
    <div class="text-container">
      <p class="new-white-text" style="margin-bottom:30px;">Thank you!</p>
      <p class="new-gray-text">We appricate you taking the time to give a rating.</p>
      <p class="new-gray-text">If you ever need more support,dont hesitate to</p>
      <p class="new-gray-text">get in touch!</p>
    </div>
    `
  })
});






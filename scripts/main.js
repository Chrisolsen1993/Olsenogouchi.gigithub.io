let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setFeedback() {
  let myFeedback = prompt('Please give me an feedback about my page.');
  if(!myFeedback) {
     setFeedback();
   }
else{
  localStorage.setItem('feedback', myFeedback);
  myHeading.innerHTML = 'Olsen your page is, ' + myFeedback;
}}


if(!localStorage.getItem('feedback')) {
  setFeedback();
}
else {
  let storedFeedback = localStorage.getItem('feedback');
  myHeading.textContent = 'Olsen your page is, ' + storedFeedback;
}
myButton.onclick = function() {
  setFeedback();
}

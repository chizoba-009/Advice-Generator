// function callAdvice() {
//   fetch('https://api.adviceslip.com/advice')
//     .then((response) => response.json())
//     // .then((data) => console.log(data))
//     .then((data) => {
//       const adviceId = document.querySelector('.advice-id')
//       const advice = document.querySelector('.advice')
//       let word = data.slip.advice
//       advice.innerText = `" ${word} "`
//       adviceId.innerText = data.slip.id
//     })
// }

// callAdvice()

window.onload = function callAdvice() {
  fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    // .then((data) => console.log(data))
    .then((data) => {
      const adviceId = document.querySelector('.advice-id')
      const advice = document.querySelector('.advice')
      let word = data.slip.advice
      advice.innerText = `" ${word} "`
      adviceId.innerText = data.slip.id
    })
}

let currentScoreTeam1 = 0
let currentScoreTeam2 = 0
let currentNameTeam1 = 'Team Corona'
let currentNameTeam2 = 'Team Bud'

//  else if (currentScoreTeam1 === 0) {
// } else if (currentScoreTeam1 === 0) {
// }
const main = () => {
  document.querySelector('.team-1-score').textContent = currentScoreTeam1
  document
    .querySelector('.team-1-add-1-button')
    .addEventListener('click', addScoreTeam1)
  document.querySelector('.team-1-score').textContent = currentScoreTeam1
  document
    .querySelector('.team-1-subtract-1-button')
    .addEventListener('click', subtractTeam1)

  document.querySelector('.team-2-score').textContent = currentScoreTeam2
  document
    .querySelector('.team-2-add-1-button')
    .addEventListener('click', addScoreTeam2)
  document.querySelector('.team-2-score').textContent = currentScoreTeam2
  document
    .querySelector('.team-2-subtract-1-button')
    .addEventListener('click', subtractTeam2)

  document.querySelector('.team-1-name').textContent = currentNameTeam1
  document
    .querySelector('.update-team-1-name')
    .addEventListener('click', updateNameTeam1)

  document.querySelector('.team-2-name').textContent = currentNameTeam2
  document
    .querySelector('.update-team-2-name')
    .addEventListener('click', updateNameTeam2)
  document
    .querySelector('.reset-both-team-scores')
    .addEventListener('click', resetScore)
}

const updateNameTeam1 = () => {
  // create a variable for the user input
  currentNameTeam1 = document.querySelector('.team-1-input').value
  // set  currentNameTeam1 equal to the variable for the user input
  // currentNameTeam1 = newTeamName1
  // set up text content
  document.querySelector('.team-1-name').textContent = currentNameTeam1
  // window.alert('hello there')
  // clear code
  document.querySelector('.team-1-input').value = ''
}
const updateNameTeam2 = () => {
  currentNameTeam2 = document.querySelector('.team-2-input').value
  document.querySelector('.team-2-name').textContent = currentNameTeam2
  document.querySelector('.team-2-input').value = ''
}
const addScoreTeam1 = () => {
  // increase the value of currentScoreTeam1 by a value of one
  currentScoreTeam1 += 1
  document.querySelector('.team-1-score').textContent = currentScoreTeam1
  if (currentScoreTeam1 >= 21) {
    window.alert('{currentNameTeam1} you win')
    document.querySelector('.team-1-add-1-button').disabled = true
    document.querySelector('.team-2-add-1-button').disabled = true
    document.querySelector('.team-1-subtract-1-button').disabled = true
    document.querySelector('.team-2-subtract-1-button').disabled = true
    document.querySelector('.update-team-1-name').disabled = true
    document.querySelector('.update-team-2-name').disabled = true
  } else if (
    currentScoreTeam1 >= 0 &&
    currentScoreTeam1 !== 21 &&
    currentScoreTeam2 !== 21
  ) {
    document.querySelector('.team-1-subtract-1-button').disabled = false
  }
}
const addScoreTeam2 = () => {
  currentScoreTeam2 += 1
  document.querySelector('.team-2-score').textContent = currentScoreTeam2
  if (currentScoreTeam2 >= 21) {
    window.alert('{currentNameTeam1} you win')
    document.querySelector('.team-1-add-1-button').disabled = true
    document.querySelector('.team-2-add-1-button').disabled = true
    document.querySelector('.team-1-subtract-1-button').disabled = true
    document.querySelector('.team-2-subtract-1-button').disabled = true
    document.querySelector('.update-team-1-name').disabled = true
    document.querySelector('.update-team-2-name').disabled = true
  } else if (
    currentScoreTeam2 >= 0 &&
    currentScoreTeam2 !== 21 &&
    currentScoreTeam1 !== 21
  ) {
    document.querySelector('.team-2-subtract-1-button').disabled = false
  }
}
const subtractTeam1 = () => {
  currentScoreTeam1 -= 1
  document.querySelector('.team-1-score').textContent = currentScoreTeam1
  if (currentScoreTeam1 <= 0) {
    document.querySelector('.team-1-subtract-1-button').disabled = true
  }
}
const subtractTeam2 = () => {
  currentScoreTeam2 -= 1
  document.querySelector('.team-2-score').textContent = currentScoreTeam2
  if (currentScoreTeam2 <= 0) {
    document.querySelector('.team-2-subtract-1-button').disabled = true
  }
}
const resetScore = () => {
  currentScoreTeam1 = 0
  document.querySelector('.team-1-score').textContent = currentScoreTeam1
  currentScoreTeam2 = 0
  document.querySelector('.team-2-score').textContent = currentScoreTeam2
}

document.addEventListener('DOMContentLoaded', main)

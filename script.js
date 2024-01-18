const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  calculateAverage()
})

function calculateAverage() {
  const averageElement = document.querySelector('.average')
  const grades = document.querySelector('.grades')
  const weights = document.querySelector('.weights')
  let sumGrades = 0.0
  let sumWeights = 0.0
  for (let i = 0; i <= 4; i++) {
    let gradeValue = parseFloat(grades.elements[i].value)
    let weightValue = parseFloat(weights.elements[i].value)
    sumGrades += gradeValue * weightValue
    sumWeights += weightValue
  }
  average = (sumGrades / sumWeights).toFixed(1)
  averageElement.textContent = average
}

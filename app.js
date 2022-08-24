// Initialize variables
const bananas = document.querySelector('#bananas')
const strawberries = document.querySelector('#strawberries')
const yogurt = document.querySelector('#yogurt')
const milk = document.querySelector('#milk')
const honey = document.querySelector('#honey')
const vanilla = document.querySelector('#vanilla')
const calories = document.querySelector('#calories')
const carbs = document.querySelector('#carbs')
const calcium = document.querySelector('#calcium')
const protein = document.querySelector('#protein')
const sugar = document.querySelector('#sugar')


// Default Values: 1 serving size
document.addEventListener('DOMContentLoaded', initialValues)

function initialValues(){
  bananas.appendChild(document.createTextNode('240'))
  strawberries.appendChild(document.createTextNode('220'))
  yogurt.appendChild(document.createTextNode('285'))
  milk.appendChild(document.createTextNode('120'))
  honey.appendChild(document.createTextNode('20'))
  vanilla.appendChild(document.createTextNode('2'))

  calories.appendChild(document.createTextNode('260'))
  carbs.appendChild(document.createTextNode('50'))
  calcium.appendChild(document.createTextNode('204'))
  protein.appendChild(document.createTextNode('14'))
  sugar.appendChild(document.createTextNode('34'))

}


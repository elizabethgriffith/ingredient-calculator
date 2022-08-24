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


let bananaVal
let strawberryVal
let yogurtVal
let milkVal
let honeyVal
let vanillaVal
let calVal
let carbVal
let calciumVal
let proteinVal
let sugarVal


// Listen for submit
document.getElementById('servingSizeForm').addEventListener('submit', loadingGIF)

// use loadingGIF for UI
function loadingGIF(e){
  // Hide Results + Show Loader
  document.getElementById('loading').style.display = 'block'
  document.getElementById('description').style.display = 'none'
  document.getElementById('recipe').style.display = 'none'
  
  setTimeout(areValuesDefined, 1500)

  e.preventDefault()

}

// determine if calculations have already ran
function areValuesDefined(){
  if (bananaVal === undefined){
    calculateResults()
  } else {
    removeOldVals()
  }
}

// remove the old text nodes to replace with new values
function removeOldVals(){
  bananaVal.parentNode.removeChild(bananaVal)
  strawberryVal.parentNode.removeChild(strawberryVal)
  yogurtVal.parentNode.removeChild(yogurtVal)
  milkVal.parentNode.removeChild(milkVal)
  honeyVal.parentNode.removeChild(honeyVal)
  vanillaVal.parentNode.removeChild(vanillaVal)
  calVal.parentNode.removeChild(calVal)
  carbVal.parentNode.removeChild(carbVal)
  calciumVal.parentNode.removeChild(calciumVal)
  proteinVal.parentNode.removeChild(proteinVal)
  sugarVal.parentNode.removeChild(sugarVal)

  calculateResults()

}

// update quantities based on serving size
function calculateResults(){
  // Get serving size input
  const serving = document.querySelector('#servingSize')
  const servingSize = parseFloat(serving.value)
  
  bananaVal = bananas.appendChild(document.createTextNode(servingSize*240))
  strawberryVal = strawberries.appendChild(document.createTextNode(servingSize*220))
  yogurtVal = yogurt.appendChild(document.createTextNode(servingSize*285))
  milkVal =milk.appendChild(document.createTextNode(servingSize*120))
  honeyVal =honey.appendChild(document.createTextNode(servingSize*20))
  vanillaVal = vanilla.appendChild(document.createTextNode(servingSize*2))

  calVal = calories.appendChild(document.createTextNode(servingSize*260))
  carbVal = carbs.appendChild(document.createTextNode(servingSize*50))
  calciumVal = calcium.appendChild(document.createTextNode(servingSize*204))
  proteinVal = protein.appendChild(document.createTextNode(servingSize*14))
  sugarVal = sugar.appendChild(document.createTextNode(servingSize*34))

  // Hide Loader + Show Results
  document.getElementById('recipe').style.display = 'block'
  document.getElementById('loading').style.display = 'none'
}
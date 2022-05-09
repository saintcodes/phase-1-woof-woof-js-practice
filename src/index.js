const dogFilter = document.querySelector("#good-dog-filter")
const dogBar = document.getElementById('dog-bar')
const dogInfo = document.getElementById('dog-info')

fetch('http://localhost:3000/pups')
  .then(res => res.json())
  .then(dogData => renderDogs(dogData))


  function renderDogs(dogData) {
    for (let dog of dogData) {
      createsDog(dog)
    }
  }

  function createsDog(dog) {
    let dogTag = document.createElement('span')
      dogTag.style.textAlign = 'center' 
      dogTag.innerHTML = dog.name
      dogBar.append(dogTag)
      dogTag.addEventListener('click', () => {showDog(dog)})
  }

  function showDog(dog) {
    dogInfo.innerHTML = ' '
    let dogCard = document.createElement('span')
    let dogName = document.createElement('h2')
    dogName.innerHTML = dog.name
    let dogImage = document.createElement('img')
    dogImage.src = dog.image
    let linebreak = document.createElement('br')
    let dogButton = document.createElement('button')
    dog.isGoodDog ? dogButton.innerHTML = "Good Dog" : dogButton.innerHTML = "Bad Dog"
    dogButton.addEventListener('click', (e) => {
      if (e.target.innerHTML === "Good Dog") {
        e.target.innerHTML = "Bad Dog"
      } else if (e.target.innerHTML === "Bad Dog") {
        e.target.innerHTML = "Good Dog"
      }
    })
    dogInfo.append(dogCard)
    dogCard.append(dogName, dogImage, linebreak, dogButton)
  }

  dogFilter.addEventListener('click', flipFilter)

  function flipFilter() {
    if(dogFilter.innerHTML === 'Filter good dogs: OFF') {
      dogFilter.innerHTML = 'Filter good dogs: ON'
      dogBar.innerHTML = ' '
      
    } else if (dogFilter.innerHTML === 'Filter good dogs: ON') {
        dogFilter.innerHTML = 'Filter good dogs: OFF'
    }
  }


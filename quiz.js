// API Courtesy of https://api.le-systeme-solaire.net/rest/bodies/ from https://api.le-systeme-solaire.net/en/


let playAgainButton = document.querySelector('#play-again-button')
let userAnswerElement = document.querySelector("#user-answer")
let resultTextElement = document.querySelector('#result') 


function celestialquiz() {
   
    let randomPlanetElement = document.querySelector('#random-body')
  
    let submitButton = document.querySelector("#submit-answer")

    let randomNumber = Math.floor(Math.random() * planetsAndDwarfs.length)
    console.log(randomNumber)
    
    let maxFailedAttempts = 3                                                   // Attempt count for failed connection
    planet(maxFailedAttempts)                                                   //  Initial call function one time to start

    planetsAndDwarfs[randomNumber]                                              // Selects planet in random--square brackets= index of array
    console.log(planetsAndDwarfs[randomNumber])  

    let randomPlanetObject = planetsAndDwarfs[randomNumber] 

    randomPlanetElement.innerHTML = randomPlanetObject.englishName

    let planetID = randomPlanetObject['id']                                     // Counting elements in planetsAndDwarfPlanets, not by "celestial-code"
    let url = `https://api.le-systeme-solaire.net/rest/bodies/${planetID}?format=json`

    console.log(planetsAndDwarfs)

    document.addEventListener('keyup', function(e) {                     
        if(e.key === 'Enter' || e.key === 13) {
            submitButton.click()
        }
       // console.log(e)
    })

    function planet(attempts) {
        if (attempts <= 0) {
            alert('Failed to contact Solaire.net server after several attempts')
            return
        }
    }

    fetch(url).then( (res) => {
        return res.json()
    }).then( (moonData) => {
        console.log(moonData)

        let moonArray = moonData.moons
        let moonCount

        if (moonArray == null) {
            moonCount = 0;
        } else {
            moonCount = moonArray.length
        }
    
        
                    
      

        submitButton.addEventListener('click', function() {
            
            
            if (userAnswerElement.value == moonCount) { 
                resultTextElement.innerHTML = "Correct"
            } else {
            resultTextElement.innerHTML = `Incorrect. The Correct Number is ${moonCount}`
             }
          //   console.log(userAnswerElement)
        })    
    }).catch( (err) => {
        console.log('ERROR!', err)
        alert(err)
    })
}


playAgainButton.addEventListener('click', function() {                  
    //alert('The button was clicked to play again')
 
    userAnswerElement.value = ''
    resultTextElement.innerHTML = ''
    celestialquiz()
})


celestialquiz()



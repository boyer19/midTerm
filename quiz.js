// API Courtesy of https://api.le-systeme-solaire.net/rest/bodies/ from https://api.le-systeme-solaire.net/en/


// Things to ask Clara about-
//     1- Why Enter button is not working
//     2- Null -  not returning 0
//     3- Error while returning to Home or another HTML
//      4- Count for "celestial code" off, counting order in array. How did she get "country-code"?


let playAgainButton = document.querySelector('#play-again-button')
let userAnswerElement = document.querySelector("#user-answer")
let resultTextElement = document.querySelector('#result') 


function celestialquiz() {
   
    let randomPlanetElement = document.querySelector('#random-body')
  
    let submitButton = document.querySelector("#submit-answer")

    let randomNumber = Math.floor(Math.random() * planetsAndDwarfs.length)
    console.log(randomNumber)
    
    let maxFailedAttempts = 3                                    // Attempt count for failed connection
    planet(maxFailedAttempts)                       //  Initial call function one time to start

    planetsAndDwarfs[randomNumber]                    // Selects planet in random--square brackets= index of array
    console.log(planetsAndDwarfs[randomNumber])  

    let randomPlanetObject = planetsAndDwarfs[randomNumber] 

    randomPlanetElement.innerHTML = randomPlanetObject.englishName

    let planetID = randomPlanetObject['id']                                             // Counting elements in planetsAndDwarfPlanets, not by "celestial-code"
    let url = `https://api.le-systeme-solaire.net/rest/bodies/${planetID}?format=json`

    console.log(planetsAndDwarfs)

    document.addEventListener('keyup', function(e) {                     // enter button - not working
        if(e.keycode === 13) {
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
    
        // let moonInfo = moonData.moons 
        // if (moonInfo.moons === '') {
        //     moonData.moons == 0;
        // } else {
        //     return moonData.moons;
        // }

         let moonCount = moonData.moons.length
                    
      

        submitButton.addEventListener('click', function() {
            // let moonInfo = moonData.moons 
            // if (moonData == null) {
            //     moonInfo.moons = 0;
            //    }  else {
            //        return moonData.length;
            //    }
            //    console.log(moonInfo)
            
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


playAgainButton.addEventListener('click', function() {                  // Error when going to another link without pressing "play again"
    //alert('The button was clicked to play again')
 
    userAnswerElement.value = ''
    resultTextElement.innerHTML = ''
    celestialquiz()
})


celestialquiz()



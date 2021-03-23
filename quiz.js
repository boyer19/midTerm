/* Website by Matt Boyer 3/23/2021 MidTerm ITEC 2560 Web Design
This page gives the javascript for the pages involved. 
 */

// API Courtesy of https://api.le-systeme-solaire.net/rest/bodies/ from https://api.le-systeme-solaire.net/en/


let playAgainButton = document.querySelector('#play-again-button')                      // Creates a playAgainButton based on id="play-again-button"
let userAnswerElement = document.querySelector("#user-answer")                          // Creates a userAnswerElement based on id="user-answer" input form
let resultTextElement = document.querySelector('#result')                               // Creates a resultTextElement based on id="result" for innerHtml answer message


function celestialquiz() {                                                              // Creates function to start quiz API
   
    let randomPlanetElement = document.querySelector('#random-body')                    // Creates a randomPlanetElement based on id="random-body" API pull- Placed on start.html line 42
  
    let submitButton = document.querySelector("#submit-answer")                         // Creates a submitButton based on id="submit-answer" button, also used for "Enter" key use

    let randomNumber = Math.floor(Math.random() * planetsAndDwarfs.length)       // Randomly chooses a number in planetsAndDwarfs.js-- Starts on 0, based on number of objects in planetsAndDwarfs.js file
    // console.log(randomNumber)                                                 // console log display of number chosen
    
    let maxFailedAttempts = 3                                                   // Attempt count for failed connection
    planet(maxFailedAttempts)                                                   //  Initial call function one time to start

    planetsAndDwarfs[randomNumber]                                              // Selects planet in random--square brackets= index of array
    // console.log(planetsAndDwarfs[randomNumber])                              

    let randomPlanetObject = planetsAndDwarfs[randomNumber]                     // Reassigns randomNumber to randomPlanetObject

    randomPlanetElement.innerHTML = randomPlanetObject.englishName              // Displays API information of englishName based on randomNumber "id" in planetsAndDwarfs.js

    let planetID = randomPlanetObject['id']                                     // Counting elements in planetsAndDwarfPlanets, not by "celestial-code"
    let url = `https://api.le-systeme-solaire.net/rest/bodies/${planetID}?format=json`

    // console.log(planetsAndDwarfs)
// Enter key
    document.addEventListener('keyup', function(e) {                     
        if(e.key === 'Enter' || e.key === 13) {
            submitButton.click()
        }
       // console.log(e)
    })
// Error loop for attempts if failed to connect to server
    function planet(attempts) {
        if (attempts <= 0) {
            alert('Failed to contact Solaire.net server after several attempts')
            return
        }
    }
// Fetch loop to got to url and retreive data
    fetch(url).then( (res) => {
        return res.json()
    }).then( (moonData) => {
        console.log(moonData)

        let moonArray = moonData.moons                                  // Assigns moonArray to data retrieved in API
        let moonCount
// Dealing with "null" information for bodies[moons:] in API
        if (moonArray == null) {
            moonCount = 0;                                              // Changes "null" data to number 0 for .length count
        } else {
            moonCount = moonArray.length                                // Assigns moonCount to the number length of 'moons' data 
        }
    
        
                    
      

        submitButton.addEventListener('click', function() {
            
            
            if (userAnswerElement.value == moonCount) {                     // Compares user answer to API data
                resultTextElement.innerHTML = "Correct"
            } else {
            resultTextElement.innerHTML = `Incorrect. The Correct Number is ${moonCount}`
             }
          //   console.log(userAnswerElement)
        }) 
 // Error checking          
    }).catch( (err) => {
        console.log('ERROR!', err)
        alert(err)
    })
}


playAgainButton.addEventListener('click', function() {                          // Outside of function celestialquiz------Note does produce error on index.html for value of 'null'. Does not seem to affect html            
    //alert('The button was clicked to play again')                             // Uncomment to verify button operates
 
    userAnswerElement.value = ''                                                // Clears user input text box   
    resultTextElement.innerHTML = ''                                            // Clears result
    celestialquiz()                                                             // Instructs to go celestialquiz
})

celestialquiz()                                                                 // Instructs to begin function



/* Website by Matt Boyer 3/23/2021 MidTerm ITEC 2560 Web Design
This javascript file was created and written by Matt Boyer using the data from the API provider */

// API Courtesy of https://api.le-systeme-solaire.net/rest/bodies/ from https://api.le-systeme-solaire.net/en/ //

let planetsAndDwarfs = [
    {"englishName":"Mercury","id":"mercure","celestial-code":"001"},                 // no moons
    {"englishName":"Venus","id":"venus","celestial-code":"002"},                    // no moons
    {"englishName":"Earth","id":"terre","celestial-code":"003"},                    // 1 moon
    {"englishName":"Mars","id":"mars","celestial-code":"004"},                      // 2 moons     
    {"englishName":"Jupiter","id":"jupiter","celestial-code":"005"},                // 79 moons
    {"englishName":"Saturn","id":"saturne","celestial-code":"006"},                 // 82 moons
    {"englishName":"Uranus","id":"uranus","celestial-code":"007"},                 // 27 moons    
    {"englishName":"Neptune","id":"neptune","celestial-code":"008"},                // 14 moons
    {"englishName":"Pluto","id":"pluton","celestial-code":"009"},                   // Dwarf, 5 moons
    {"englishName":"136108 Haumea","id":"haumea","celestial-code":"010"},           // Dwarf, 2 moons
    {"englishName":"136199 Eris","id":"eris","celestial-code":"015"},               // Dwarf, 1 moon
    {"englishName":"1 Ceres","id":"ceres","celestial-code":"017"},                  //Dwarf  no moons
    {"englishName":"136472 Makemake","id":"makemake","celestial-code":"018"},       // Dwarf, 5 moons

]
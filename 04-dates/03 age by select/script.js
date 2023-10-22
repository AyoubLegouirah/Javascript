/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click",function(){
        const jour = document.getElementById("dob-day").value
        const month = document.getElementById("dob-month").value
        const year = document.getElementById("dob-year").value

        const annif = new Date(year, month - 1, jour)
        const datemtn = new Date ()

        const datedelapersonne = datemtn - annif

        const age = Math.floor(datedelapersonne/(1000 * 60 * 60 * 24 *365.25)) 

        console.log("Voici ton age: " + age )

    })
})();


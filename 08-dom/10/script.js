/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.addEventListener("DOMContentLoaded", function(){
        const passone = document.getElementById("pass-one")
        const passtwo = document.getElementById("pass-two")

        const button = document.getElementById("run")
        const error = document.getElementById("error-message")

        button.addEventListener("click", function(){
            if( passone.value !== passtwo.value){
            error.innerText = "erreur"
            }
            else{
            }
        })
    })

})();
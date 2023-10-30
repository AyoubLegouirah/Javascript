/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
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

        button.addEventListener("click", function(){
            if (passone.value !== passtwo.value){
                passone.style.borderColor = "red"
                passtwo.style.borderColor = "red"
            }
            else{
        }
        })
    })
})();
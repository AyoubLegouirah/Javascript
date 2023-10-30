/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.addEventListener("DOMContentLoaded", function(){
        const pass = document.getElementById("pass-one")
        const nombre = document.getElementById("counter")
         
        const maxLength = 10

        pass.addEventListener("input", function (){
            const passL = pass.value
            const currentLength = passL.length;

            if( currentLength >maxLength ){
            pass.value = passL.slice(0,maxLength)
            }
            
            nombre.textContent = currentLength + "/" + maxLength;
        })
    })
})();

/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        function factorielle(n) {
            if (n === 0 || n === 1) {
                return 1;
            }
            return n * factorielle(n - 1);
        }
        

        const inputElement = document.getElementById("number");
        const nombre = parseInt(inputElement.value);
        const resultat = factorielle(nombre);
        console.log(`La factorielle de ${nombre} est ${resultat}`);
    });
})();



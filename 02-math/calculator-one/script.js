/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById("addition").addEventListener("click", () => {
        const operation1 = parseFloat(document.getElementById("op-one").value)
        const operation2 = parseFloat(document.getElementById("op-two").value)

        const resultat = operation1 + operation2
        alert("Résultat: " + resultat)
    });

    document.getElementById("substraction").addEventListener("click", () => {
        const operation1 = parseFloat(document.getElementById("op-one").value)
        const operation2 = parseFloat(document.getElementById("op-two").value)

        const resultat = operation1 - operation2
        alert("Résultat: " + resultat)
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        const operation1 = parseFloat(document.getElementById("op-one").value)
        const operation2 = parseFloat(document.getElementById("op-two").value)

        const resultat = operation1 * operation2
        alert("Résultat: " + resultat)
    });

    document.getElementById("division").addEventListener("click", () => {
        const operation1 = parseFloat(document.getElementById("op-one").value)
        const operation2 = parseFloat(document.getElementById("op-two").value)

        const resultat = operation1 / operation2
        alert("Résultat: " + resultat)
    });
})();
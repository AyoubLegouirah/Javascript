/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const performOperation = operation => {
        for (let i = 2; i <= 20; i += 2) {
            const square = i * i;
            console.log(`Le carré de ${i} est ${square}`);
        }
    }

    document.getElementById("run").addEventListener("click", () => {
        performOperation();
    });
})();

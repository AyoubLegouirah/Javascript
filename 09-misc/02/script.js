/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const variableText = document.getElementById("target");
    const Text = variableText.innerText;

    const vagueSize = ['100%', '120%', '130%', '120%', '110%'];
    variableText.innerHTML = '';

    function appendTextWithDelay(index) {
        if (index < Text.length) {
            setTimeout(() => {
                variableText.innerHTML += `<span style="font-size: ${vagueSize[index % vagueSize.length]}">${Text[index]}</span>`;
                appendTextWithDelay(index + 1);
            }, 100);
        }
    }

    appendTextWithDelay(0);
})();


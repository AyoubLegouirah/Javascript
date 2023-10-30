/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    (() => {
        const Vague = document.getElementById("target");
        const VagueTarget = Vague.innerText;
    
        const VagueSize = ['100%', '120%', '130%', '120%', '110%'];
        Vague.innerHTML = VagueTarget
            .split('')
            .map((char, index) => {
                const textSize = VagueSize[index % VagueSize.length]; 
                return `<span style="font-size: ${textSize}">${char}</span>`;
            })
            .join('');
    })();
    
})();
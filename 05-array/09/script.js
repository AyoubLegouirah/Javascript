/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        const numbers = [];
    
        for (let i = 0; i < 10; i++) {
            numbers.push(Math.floor(Math.random() * 100) + 1); 
        }
    
        
        for (let i = 0; i < numbers.length; i++) {
            document.getElementById(`n-${i + 1}`).textContent = numbers[i];
        }
    
        
        const min = Math.min(...numbers);
        document.getElementById("min").textContent = min;
    
       
        const max = Math.max(...numbers);
        document.getElementById("max").textContent = max;
    
        
        const sum = numbers.reduce((acc, current) => acc + current, 0);
        document.getElementById("sum").textContent = sum;
    
        
        const average = sum / numbers.length;
        document.getElementById("average").textContent = average.toFixed(2);
    });
    
})();
/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const performOperation = (operation) => {
      let op_one = parseFloat(document.getElementById("op-one").value);
      let op_two = parseFloat(document.getElementById("op-two").value);
  
      let result;
      switch (operation) {
        case "addition":
          result = op_one + op_two;
          break;
        case "substraction":
          result = op_one - op_two;
          break;
        case "multiplication":
          result = op_one * op_two;
          break;
        case "division":
          result = op_one / op_two;
          break;
      }
        alert(result);
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(($btn) =>
      $btn.addEventListener("click", () => performOperation($btn.id))
    );
  })();

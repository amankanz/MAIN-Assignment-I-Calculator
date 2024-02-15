// // "use strict";

// // let displayValue = "0";
// // let firstOperand = null;
// // let firstOperator = null;

// ////////////////////////////////////////////////////////////////////////

// // Register click event
// const calculator = document.querySelector(".calculator");
// const container = calculator.querySelector(".container");
// const keys = container.querySelectorAll("button");

// // Display
// const display = container.querySelector(".display");

// keys.forEach((key) => {
//   key.addEventListener("click", (e) => {
//     if (e.target.matches("button")) {
//       const action = key.dataset.action;
//       const key_content = key.textContent;
//       const display_value = display.textContent;

//       if (!action) {
//         console.log("number key!");
//       } else if (
//         action === "add" ||
//         action === "subtract" ||
//         action === "multiply" ||
//         action === "divide"
//       ) {
//         console.log("operator key");
//         key.classList.add("is-depressed");
//       }

//       if (action === "decimal") {
//         // console.log("decimal key!");
//         display.textContent = display_value + ".";
//       }

//       if (action === "clear") {
//         console.log("clear key!");
//       }

//       if (action === "equals") {
//         console.log("equals key!");
//       }
//       if (action === "sign") {
//         console.log("sign key!");
//       }
//       if (action === "percent") {
//         console.log("percent key!");
//       }

//       // Update Display
//       if (!action) {
//         if (display_value === "0") {
//           display.textContent = key_content;
//         } else {
//           if (display_value.length < 9) {
//             display.textContent = display_value + key_content;
//           } else {
//             display.textContent = display_value.substring(0, 9);
//           }
//         }
//       }

//       // Remove .is-depressed class
//     }
//   });
// });
/////////////////////////////////////////////////////////////////////////////

const display = document.querySelector(".display");
// console.log(display);
const control_buttons = document.getElementsByTagName("button");
// console.log(control_buttons);
const all_symbols = ["+", "-", "*", "/", "AC", "+/-", "%", "=", "."];

let firstValue = "";
let secondValue = "";
let symbol = "";
let result = "";

const operate = () => {
  firstValue = parseFloat(firstValue);
  secondValue = parseFloat(secondValue);

  if (symbol === "+") result = firstValue + secondValue;
  if (symbol === "-") result = firstValue - secondValue;
  if (symbol === "*") result = firstValue * secondValue;
  if (symbol === "/") {
    if (secondValue === 0) result += "lmao";
    else result = firstValue / secondValue;
  }
  if (symbol === "+/-") result = firstValue * -1;
  if (symbol === "%") result = firstValue % secondValue;
  if (symbol === ".") inputDecimal(".");

  display.innerText = result;
  firstValue = result.toString();
  secondValue = "";
};

// function inputDecimal(dot) {
//   if (firstValue || secondValue) {
//     display = "0";
//     display += dot;
//   } else if (!display.includes(dot)) {
//     display += dot;
//   }
// }

// Register click event
for (let button of control_buttons) {
  button.addEventListener("click", () => {
    const { innerText: btn_value } = button;
    const btn_value_is_symbol = all_symbols.includes(btn_value);

    if (!secondValue && btn_value === "=") {
      return null;
    }
    // Reset display
    if (btn_value === "AC") {
      firstValue = secondValue = symbol = "";
      return (display.innerText = "");
    }

    if (firstValue && btn_value_is_symbol) {
      secondValue && operate();
      symbol = btn_value;
    }
    // If there is no symbol, that means the user is inputting the firstValue
    else if (!symbol) firstValue += btn_value;
    // if there is symbol, that means firstValue is done, so add to the secondValue
    else if (symbol) secondValue += btn_value;

    if (btn_value !== "=") {
      display.innerText += btn_value;
    }
  });
}

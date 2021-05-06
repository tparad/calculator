const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operator");
const clearAllButton = document.querySelector("#clear");
const equalsButton = document.querySelector("#equals");
const deleteButton = document.querySelector("#delete");
const previousValue = document.querySelector("#previous-value");
const currentValue = document.querySelector("#current-value");
let currentOperation = "";

clearAll();

clearAllButton.addEventListener("click", clearAll);
deleteButton.addEventListener("click", deleteEndCharacter);
equalsButton.addEventListener("click", compute);

numberButtons.forEach(button => {
    button.addEventListener("click", function() {
        appendNumber(button.innerText);
    });
});

operationButtons.forEach(button => {
    button.addEventListener("click", function() {
        chooseOperation(button.innerText);
    });
});

function clearAll() {
    currentValueTemp = "";
    previousValueTemp = "";
    currentOperation = "";
    updateDisplay();
};

function deleteEndCharacter() {
    if (currentValueTemp === "") return;
    console.log("test");
    currentValueTemp = currentValueTemp.slice(0,-1);
    updateDisplay();
};

function chooseOperation(operation) {
    if (currentValueTemp === "") return;
    if (previousValueTemp !== "") {
        compute();
    };
    currentOperation = operation;
    previousValueTemp = currentValueTemp;
    currentValueTemp = "";
    updateDisplay();
};


function appendNumber(number) {
    if (number === "." && currentValueTemp.includes(".")) return;
    currentValueTemp  = currentValueTemp.toString() + number.toString();
    updateDisplay();
};

function updateDisplay() {
    currentValue.innerText = currentValueTemp;
    previousValue.innerText = `${previousValueTemp} ${currentOperation}`
}

function compute() {
    let previous = parseFloat(previousValueTemp);
    let current = parseFloat(currentValueTemp);
    let calculation;
    if (isNaN(previous) || isNaN(current)) return;
    switch (currentOperation) {
        case "+":
            calculation = previous + current;
            break;
        case "-":
            calculation = previous - current;
            break;
        case "x":
            calculation = previous * current;
            break;
        case "÷":
            calculation = previous / current;
            break;
    };
    currentOperation = "";
    currentValueTemp = calculation;
    previousValueTemp = "";
    updateDisplay();
};

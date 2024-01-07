let heightVal = document.querySelector('#height');
let weightVal = document.querySelector('#weight');
let result = document.querySelector("#result");
let btn = document.querySelector('button');

btn.addEventListener('click', (event) => {
    event.preventDefault();

    let heightValue = parseFloat(heightVal.value);
    let weightValue = parseFloat(weightVal.value);

    // Check if the input values are valid numbers
    if (!isNaN(heightValue) && !isNaN(weightValue)) {
        let calculationResult = weightValue / ((heightValue / 100) ** 2);
        result.innerHTML = `Your BMI is: ${calculationResult.toFixed(2)}`;
    } else {
        result.innerHTML = "Please enter valid numeric values for height and weight.";
    }
});


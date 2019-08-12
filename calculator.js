const numberInputs = document.getElementsByClassName('num-input');
const resultElement = document.getElementsByClassName('result')[0];
const operation = document.getElementsByClassName('operation')[0];



function operationHandler(){
	const num1 = Number(numberInputs[0].value);
	const num2 = Number(numberInputs[1].value);
	// if (operation.value === "+") {
	// 	const result = num1 + num2;
	// 	resultElement.value = result;
	// }
	//  else if (operation.value === "-") {
	// 	const result = num1 - num2;
	// 	resultElement.value = result;
	// }
	// else if (operation.value === "*") {
	// 	const result = num1 * num2;
	// 	resultElement.value = result;
	// }
	// else if (operation.value === "/") {
	// 	const result = num1 / num2;
	// 	resultElement.value = result;
	// }
	// else if (operation.value === "**") {
	// 	const result = Math.pow(num1, num2);
	// 	resultElement.value = result;
	// }
	
	// else if (operation.value === "%") {
	// 	const result = num1 % num2;
	// 	resultElement.value = result;
	// }
	


	let result=null
	switch (operation.value){
		case "+":
		result = num1 + num2;
		break;

		case "-":
		result = num1 - num2;
		break;

		case "*":
		result = num1 * num2;
		break;

		case "%":
		result = num1 % num2;
		break;

		case "**":
		result = Math.pow(num1, num2);
		break;
	}
	resultElement.value = result

}





// function funcSum(){
// 	const num1 = Number(numberInputs[0].value);
// 	const num2 = Number(numberInputs[1].value);
// 	const result = num1 + num2;
// 	resultElement.value = result;
// }
 

// function funcSubtraction(){
// 	const num1 = Number(numberInputs[0].value);
// 	const num2 = Number(numberInputs[1].value);
// 	const result = num1 - num2;
// 	resultElement.value = result;
// }

// function funcMultiplication(){
// 	const num1 = Number(numberInputs[0].value);
// 	const num2 = Number(numberInputs[1].value);
// 	const result = num1 * num2;
// 	resultElement.value = result;
// }

// function funcDivision(){
// 	const num1 = Number(numberInputs[0].value);
// 	const num2 = Number(numberInputs[1].value);
// 	const result = num1 / num2;
// 	resultElement.value = result;
// }

// function funcPower(){
// 	const num1 = Number(numberInputs[0].value);
// 	const num2 = Number(numberInputs[1].value);
// 	const result = Math.pow(num1, num2);
// 	resultElement.value = result;
// }





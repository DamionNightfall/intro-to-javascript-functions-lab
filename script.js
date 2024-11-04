// Exercise 1: Max of Two Numbers
function maxOfTwoNumbers() {
	const num1 = parseFloat(document.getElementById('num1').value);
	const num2 = parseFloat(document.getElementById('num2').value);
	document.getElementById('maxResult').innerText = `Max: ${Math.max(
		num1,
		num2
	)}`;
}

// Exercise 2: Is Adult
function isAdult() {
	const age = parseInt(document.getElementById('ageInput').value);
	document.getElementById('ageResult').innerText =
		age >= 18 ? 'Adult' : 'Minor';
}

// Exercise 3: Is Character a Vowel
function isCharAVowel() {
	const char = document.getElementById('charInput').value.toLowerCase();
	const isVowel = 'aeiou'.includes(char);
	document.getElementById('vowelResult').innerText = isVowel
		? 'Vowel'
		: 'Not a Vowel';
}

// Exercise 4: Generate Email
function generateEmail() {
	const name = document.getElementById('nameInput').value;
	const domain = document.getElementById('domainInput').value;
	document.getElementById('emailResult').innerText = `${name}@${domain}`;
}

// Exercise 5: Greet User
function greetUser() {
	const name = document.getElementById('userName').value;
	const time = document.getElementById('timeOfDay').value;
	document.getElementById('greetResult').innerText = `Good ${time}, ${name}!`;
}

// Exercise 6: Max of Three Numbers
function maxOfThree() {
	const numA = parseFloat(document.getElementById('numA').value);
	const numB = parseFloat(document.getElementById('numB').value);
	const numC = parseFloat(document.getElementById('numC').value);
	document.getElementById('maxThreeResult').innerText = `Max: ${Math.max(
		numA,
		numB,
		numC
	)}`;
}

// Exercise 7: Calculate Tip
function calculateTip() {
	const bill = parseFloat(document.getElementById('billAmount').value);
	const tip = parseFloat(document.getElementById('tipPercentage').value);
	document.getElementById('tipResult').innerText = `Tip Amount: ${
		bill * (tip / 100)
	}`;
}

// Exercise 8: Convert Temperature
function convertTemperature() {
	const temp = parseFloat(document.getElementById('tempInput').value);
	const unit = document.getElementById('tempUnit').value;
	const result = unit === 'CtoF' ? (temp * 9) / 5 + 32 : ((temp - 32) * 5) / 9;
	document.getElementById(
		'tempResult'
	).innerText = `Converted: ${result.toFixed(2)}`;
}

// Exercise 9: Basic Calculator
function basicCalculator() {
	const num1 = parseFloat(document.getElementById('calcNum1').value);
	const num2 = parseFloat(document.getElementById('calcNum2').value);
	const op = document.getElementById('operation').value;
	const result = eval(`${num1} ${op} ${num2}`);
	document.getElementById('calcResult').innerText = `Result: ${result}`;
}

// Exercise 10: Calculate Grade
function calculateGrade() {
	const score = parseFloat(document.getElementById('gradeInput').value);
	let grade = 'F';
	if (score >= 90) grade = 'A';
	else if (score >= 80) grade = 'B';
	else if (score >= 70) grade = 'C';
	else if (score >= 60) grade = 'D';
	document.getElementById('gradeResult').innerText = `Grade: ${grade}`;
}

// Exercise 11: Create Username
function createUsername() {
	const firstName = document.getElementById('firstName').value;
	const lastName = document.getElementById('lastName').value;
	document.getElementById('usernameResult').innerText = `${firstName.slice(
		0,
		3
	)}${lastName.slice(0, 3)}${firstName.length + lastName.length}`;
}

// Exercise 12: Number of Arguments
function numArgs() {
	const args = document.getElementById('argsInput').value.split(',');
	document.getElementById(
		'argsResult'
	).innerText = `Number of arguments: ${args.length}`;
}

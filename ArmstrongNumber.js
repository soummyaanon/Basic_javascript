function isArmstrongNumber(number) {
    // Convert the number to a string to find the number of digits
    const numStr = number.toString();
    const numDigits = numStr.length;

    // Calculate the sum of each digit raised to the power of the number of digits
    let sum = 0;
    for (let i = 0; i < numDigits; i++) {
        const digit = parseInt(numStr[i], 10);
        sum += Math.pow(digit, numDigits);
    }

    // Check if the sum is equal to the original number
    return sum === number;
}

// Example usage:
const inputNumber = 153; // Change this number as needed
if (isArmstrongNumber(inputNumber)) {
    console.log(`${inputNumber} is an Armstrong number.`);
} else {
    console.log(`${inputNumber} is not an Armstrong number.`);
}

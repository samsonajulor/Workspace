// ## introduction to js and ts

// ### Assignment: **Basic Temperature Converter**

// #### Problem:
// Create a simple program that converts temperatures between Celsius and Fahrenheit. The program should take user input and output the converted temperature.

// #### Requirements:

// 1. **JavaScript Version (Node.js)**
//     - Create a program that:
//       1. Takes in two parameters. a temperature value as a number and the unit of conversion as a string
//       2. if the unit is in Celsius, convert it to Fahrenheit and Viz-a-Viz
//       3. Based on the choice, convert the temperature and display the result.
//     - Implement the conversion formulas:
//       - Celsius to Fahrenheit: `(C * 9/5) + 32`
//       - Fahrenheit to Celsius: `(F - 32) * 5/9`

// #### Example of running the JavaScript version:
// ```bash
// node temperatureConverter.js
// ```

// ```
// Enter temperature value: 30
// Choose conversion: 'C' for Celsius to Fahrenheit, 'F' for Fahrenheit to Celsius: C
// Converted temperature: 86
// ```

// 2. **TypeScript Version**
//     - Convert the JavaScript version into TypeScript:
//       - Add **type annotations** for the temperature value and the conversion choice.
//       - Ensure type safety when accepting and parsing the user input.
//       - Handle invalid input with proper error handling, using **try-catch** where necessary.

// #### Example of running the TypeScript version:
// ```bash
// tsc temperatureConverter.ts
// node temperatureConverter.js
// ```

// ```
// Enter temperature value: 100
// Choose conversion: 'C' for Celsius to Fahrenheit, 'F' for Fahrenheit to Celsius: F
// Converted temperature: 37.78
// ```

// ### Expected Outcome:
// - A working temperature conversion program.
// - Both JavaScript and TypeScript versions should accept user input, perform the conversion, and display the result.

// enum in ts

enum UNIT {
  Celsius = 'c',
  Fahrenheit = 'f',
}

function TemperatureConverter(value: number, unit: UNIT): string {
  let result: number = 0;
  let finalUnit: string = '';
  if (unit === UNIT.Celsius) {
    result = (value * 9) / 5 + 32;
    finalUnit = UNIT.Fahrenheit;
  } else if (unit === UNIT.Fahrenheit) {
    result = ((value - 32) * 5) / 9;
    finalUnit = UNIT.Celsius;
  }

  // return String(result) + finalUnit; // concatenation
  return `${result}${finalUnit}`; // template literals.
}

TemperatureConverter(3, UNIT.Celsius);
const result = TemperatureConverter(3, UNIT.Celsius);

console.log({ result });

// enum UNIT {
//   Celsius = 'c',
//   Fahrenheit = 'f',
// }

// function TemperatureConverter(value: number, unit: UNIT): string {
//   let result: number = 0;
//   let finalUnit: string = '';
//   switch (unit) {
//     case UNIT.Celsius:
//       result = (value * 9) / 5 + 32;
//       finalUnit = UNIT.Fahrenheit;
//       break;
//     case UNIT.Fahrenheit:
//       result = ((value - 32) * 5) / 9;
//       finalUnit = UNIT.Celsius;
//       break;
//     default:
//       console.log('No unit.')
//   }
//   // if (unit === UNIT.Celsius) {
//   //   result = (value * 9) / 5 + 32;
//   //   finalUnit = UNIT.Fahrenheit;
//   // } else if (unit === UNIT.Fahrenheit) {
//   //   result = ((value - 32) * 5) / 9;
//   //   finalUnit = UNIT.Celsius;
//   // }

//   // return String(result) + finalUnit; // concatenation
//   return `${result}${finalUnit}`; // template literals.
// }

// TemperatureConverter(3, UNIT.Celsius);
// const result = TemperatureConverter(3, UNIT.Celsius);

// console.log({ result });

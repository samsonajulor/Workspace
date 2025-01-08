enum UNIT {
  Celsius = 'c',
  Fahrenheit = 'f',
}

function TemperatureConverter(value: number, unit: UNIT): string {
  let result: number = unit === UNIT.Celsius ? (value * 9) / 5 + 32 : ((value - 32) * 5) / 9;
  let finalUnit: string = unit === UNIT.Celsius ? UNIT.Fahrenheit : UNIT.Celsius;
  
  return `${result}${finalUnit}`;
}

TemperatureConverter(3, UNIT.Celsius);
const result = TemperatureConverter(3, UNIT.Celsius);

console.log({ result });

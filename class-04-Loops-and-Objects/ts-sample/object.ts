type CarType = {
  color: string;
  brand: string;
  speed?: number; // speed is an optional property.
};

interface CarInterface {
  color: string;
  brand: string;
  speed: string;
}

const car: CarType = {
  color: 'yellow',
  brand: 'ferrari',
  speed: 0,
};

console.log('the color of the car is: ', car.color);

car.color = 'blue';

delete car.speed;

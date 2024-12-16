// function greet(): void {
//   console.log(' I am greeting');
// }

const greetInit = (): string => {
  console.log('I am greeting');
  return 'I am greeting';
};

// it can take in a parameter
const greet = (name: string = 'samson'): void => {
  console.log({ name });
};

(() => {
  console.log('I am a callback function from log');
  return 'I am a callback function as the return value';
})(); // is called an IIFE - Immediately Invoked Function Execution

greet(); // invoking function greet // "samson"
// greet('samson'); invoking function greet as a string
// greet(greetInit()); // needs a parameter
// greet(() => {
//   console.log('I am a callback function');
//   return 'I am a callback function';
// }); // parameter is passed as a function directly without execution

greet(
  (() => {
    console.log('I am a callback function from iife log');
    return 'I am a callback function from iife return value';
  })()
); // parameter is passed as a function directly with execution

// inbuilt modules
// Commonly Used Built-in Modules:
// http: For creating an HTTP server.
// fs: For interacting with the file system.
// path: For handling file paths.
// os: For operating system-related utilities.
//import http module
import http from 'http';

// const createServerParams = (req: http.IncomingMessage, res: http.ServerResponse) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World\n');
// };
// const server = http.createServer(createServerParams);
// the function within another function is called a callback function
// the function that takes in the callback function is called the higher order function.
const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

let port = 16000
server.listen(port, () => {
  console.log(`listening on port ${port}`);
});

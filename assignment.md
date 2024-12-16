#### **1. Arithmetic and Comparison Operators**

**Task**: Write a JavaScript program to calculate the area of a rectangle, compare the area with a threshold value, and display appropriate messages using **Arithmetic** and **Comparison Operators**.

- **Input**: Length and Width of the rectangle.
- **Output**: Calculate the area and compare it with t dhe threshold of 100. Display if the area is greater than, equal to, or less than 100.

**Steps**:
1. Prompt the user for the length and width of the rectangle.
2. Calculate the area: `Area = Length * Width`.
3. Compare the area with the threshold of 100 using comparison operators (`==`, `>`, `<=`).
4. Output the result.

---

#### **2. Logical Operators (25 minutes)**

**Task**: Write a JavaScript program to check if a number is between 10 and 20, and print whether the number is **valid** or **invalid**.

- **Input**: A single number.
- **Output**: Print "Valid" if the number is between 10 and 20 (inclusive), and "Invalid" otherwise.

**Steps**:
1. Prompt the user for a number.
2. Check if the number is between 10 and 20 using logical **AND** (`&&`) and **OR** (`||`) operators.
3. Print "Valid" if true, otherwise print "Invalid".

---

### **Session 2: TypeScript (45 minutes)**

#### **1. Control Structures in TypeScript (15 minutes)**

**Task**: Write a TypeScript program that uses an `if-else` statement to determine if a person is eligible to vote based on their age.

- **Input**: Age of the person.
- **Output**: Print "Eligible to vote" if age is 18 or greater, and "Not eligible to vote" otherwise.

**Steps**:
1. Declare a variable `age` of type `number`.
2. Use an `if-else` statement to check if the person is eligible to vote.
3. Output the result.

---

#### **2. Switch-Case Statement (10 minutes)**

**Task**: Write a TypeScript program that uses a `switch-case` statement to output the name of a day of the week based on a number (1-7).

- **Input**: A number from 1 to 7 representing a day of the week.
- **Output**: Print the name of the day (e.g., "Monday", "Tuesday", etc.).

**Steps**:
1. Declare a variable `day` of type `number`.
2. Use a `switch` statement to print the corresponding day of the week.
3. Use a default case to print "Invalid day" if the number is not between 1 and 7.

---

#### **3. Ternary Operator and Type Guards (30 minutes)**

**Task 1**: Write a program using a **ternary operator** to check if a student has passed or failed based on their score.

- **Input**: A score between 0 and 100.
- **Output**: Print "Passed" if the score is greater than or equal to 50, else print "Failed".

**Steps**:
1. Declare a variable `score` of type `number`.
2. Use a ternary operator to check if the score is >= 50.
3. Output the result.

---

**Task 2**: Implement a function using **type guards** to greet a person. The function should check if the input is a `string` or `null` and print a greeting or a "No name provided" message.

- **Input**: A string (person's name) or `null`.
- **Output**: If a string, print "Hello, [name]"; if `null`, print "No name provided".

**Steps**:
1. Write a function `greet(person: string | null)` with a type guard to check if `person` is `null`.
2. If it’s not `null`, greet the person with "Hello, [name]".
3. If it is `null`, output "No name provided".

---

### **Session 3: TypeScript Functions (45 minutes)**

#### **1. TypeScript Functions (25 minutes)**

**Task 1**: Write a TypeScript function to calculate the area of a circle. The function should take the radius as an argument and return the area.

- **Input**: Radius of the circle (number).
- **Output**: Area of the circle.

**Steps**:
1. Define the function `calculateArea(radius: number): number`.
2. Inside the function, use the formula `Area = Math.PI * radius^2`.
3. Return the area and print it.

---

**Task 2**: Write a TypeScript function to calculate the price after applying a discount. The function should accept the original price and the discount percentage as parameters. If no discount is provided, it should apply a default discount of 10%.

- **Input**: Original price (`number`) and optional discount (`number`).
- **Output**: Price after discount.

**Steps**:
1. Define the function `calculateDiscountedPrice(price: number, discount: number = 10): number`.
2. Calculate the discounted price and return it.
    

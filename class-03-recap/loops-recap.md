### Expanded Intermediate Array Challenge with Loops

**Objective**: Extend the array challenge by incorporating loops for iteration and modification.

---

**Challenge: Advanced Inventory Management**

You are still managing the store inventory, but now you will use **loops** to iterate over and manipulate the inventory. Follow the steps below to complete the task.

---

### Starting Inventory

```javascript
const inventory = [
  { name: 'Apple', price: 2, quantity: 30 },
  { name: 'Banana', price: 1, quantity: 50 },
  { name: 'Orange', price: 3, quantity: 20 },
  { name: 'Mango', price: 4, quantity: 15 }
];
```

---

### Steps with Loops:

1. **Double the price of all items**: Use a `for` loop to iterate through the inventory and double the `price` of each item.

2. **Reduce quantity of each item by 5**: Use a `while` loop to reduce the `quantity` of each item by `5` as long as the item's `quantity` is greater than `5`.

3. **Find items under a specific price**: Use a `for...of` loop to create a new array of items with a `price` less than `5`.

4. **Count total items in inventory**: Use a `for...in` loop to iterate over the properties of each object and calculate the total `quantity` across all items.

5. **Recreate inventory**: Use a traditional `for` loop to create a new array of inventory items where each item's name is suffixed with `" (New)"` and the price is multiplied by `1.1` (a 10% markup).

---

### Expected Output:

```javascript
// After Step 1 (Double the price)
[
  { name: 'Apple', price: 4, quantity: 30 },
  { name: 'Banana', price: 2, quantity: 50 },
  { name: 'Orange', price: 6, quantity: 20 },
  { name: 'Mango', price: 8, quantity: 15 }
]

// After Step 2 (Reduce quantity)
[
  { name: 'Apple', price: 4, quantity: 25 },
  { name: 'Banana', price: 2, quantity: 45 },
  { name: 'Orange', price: 6, quantity: 15 },
  { name: 'Mango', price: 8, quantity: 10 }
]

// After Step 3 (Find items under price 5)
[
  { name: 'Apple', price: 4, quantity: 25 },
  { name: 'Banana', price: 2, quantity: 45 }
]

// After Step 4 (Total quantity)
Total Items: 95

// After Step 5 (Recreate inventory with markup)
[
  { name: 'Apple (New)', price: 4.4, quantity: 25 },
  { name: 'Banana (New)', price: 2.2, quantity: 45 },
  { name: 'Orange (New)', price: 6.6, quantity: 15 },
  { name: 'Mango (New)', price: 8.8, quantity: 10 }
]
```

---

### Tips:
- **Traditional `for` loop** is best when you need to control iteration or use the index.
- **`for...of`** is perfect for iterating directly over arrays.
- **`for...in`** is suitable for objects but can be adapted to arrays (iterate over keys).
- Use `array.push()` to build new arrays dynamically inside loops.
- Pay attention to conditions in `while` loops to avoid infinite loops.

---

Good luck adding loops to your inventory management system! 🎉
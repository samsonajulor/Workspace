### Intermediate Array Challenge

**Objective**: Solve a real-world problem by applying your understanding of arrays, including their methods and properties, in a hands-on coding task.

---

**Challenge: Inventory Management**

You are managing the inventory for a small store. The store tracks items in an array, with each item being represented as an object containing a `name`, `price`, and `quantity`. Your task is to write a series of operations to manage the inventory using array methods.

Here is your starting inventory:

```javascript
const inventory = [
  { name: 'Apple', price: 2, quantity: 30 },
  { name: 'Banana', price: 1, quantity: 50 },
  { name: 'Orange', price: 3, quantity: 20 }
];
```

---

**Steps**:

1. **Add a new item**: Add a new object representing a `Mango` with a price of `4` and a quantity of `15` to the inventory.

2. **Remove an item**: A shipment of `Bananas` was canceled. Remove the `Banana` item from the inventory.

3. **Update quantity**: Sell 10 `Oranges` and update its quantity in the inventory.

4. **Find an item**: Check if `Apple` is still in stock and print its details.

5. **Filter expensive items**: Create a new array of items with a price greater than `2`.

6. **Calculate total value**: Calculate and print the total value of the inventory. The total value of an item is `price * quantity`.

---

**Expected Output**:

```javascript
// After step 1
[
  { name: 'Apple', price: 2, quantity: 30 },
  { name: 'Banana', price: 1, quantity: 50 },
  { name: 'Orange', price: 3, quantity: 20 },
  { name: 'Mango', price: 4, quantity: 15 }
]

// After step 2
[
  { name: 'Apple', price: 2, quantity: 30 },
  { name: 'Orange', price: 3, quantity: 20 },
  { name: 'Mango', price: 4, quantity: 15 }
]

// After step 3
[
  { name: 'Apple', price: 2, quantity: 30 },
  { name: 'Orange', price: 3, quantity: 10 },
  { name: 'Mango', price: 4, quantity: 15 }
]

// After step 4
{ name: 'Apple', price: 2, quantity: 30 }

// After step 5
[
  { name: 'Orange', price: 3, quantity: 10 },
  { name: 'Mango', price: 4, quantity: 15 }
]

// After step 6
Total Inventory Value: 150
```

---

**Hints**:
- Use `push` to add items.
- Use `findIndex` and `splice` for removing items.
- Use `map` to update quantities.
- Use `find` to locate a specific item.
- Use `filter` to get expensive items.
- Use `reduce` to calculate the total inventory value. 

---

**Time Limit**: 5 minutes

Good luck! 🎉
### Task: Building and Interacting with a Complex Object

**Instructions:**  

1. **Create a `library` object**  
   Build an object using class syntax that represents a library system. Include the following:
   - Basic properties like `name`, `location`, and `numberOfBooks`.
   - A `categories` property that holds an array of strings (e.g., `"Fiction"`, `"Non-Fiction"`, `"Science"`).
   - A `books` property that is an array of objects, each representing a book. Each book should have:
     - `title`
     - `author`
     - `isAvailable` (boolean)
     - `ratings` (array of numbers).

2. **Add Methods to the Object**  
   Add the following methods:
   - `getAvailableBooks()`: Returns an array of book titles that are available.
   - `addBook(newBook)`: Adds a new book object to the `books` array.
   - `calculateAverageRating(title)`: Calculates and returns the average rating for a given book title. If the book doesn’t exist, return `null`.

3. **Interact with the Object**  
   - Add at least 3 books to the library using the `addBook` method.
   - Print the available books using the `getAvailableBooks` method.
   - Pick a book and calculate its average rating using the `calculateAverageRating` method.
   - Add a new category to the `categories` array and print the updated `categories`.

4. **Iterate Over the Object**  
   Write a `for...in` loop to iterate over the `library` object. For each key:
   - Print the key and its value.
   - If the value is an array, iterate over its elements.

5. **Compare Objects**  
   - Create a duplicate of the `library` object using the spread operator.
   - Compare the original and the duplicate using `==` and `===`. Explain the results in comments.

---

**Expected Output Example:**

```javascript
// Example output
Library Name: City Central Library
Available Books: ["The Great Gatsby", "To Kill a Mockingbird"]
Average Rating for "The Great Gatsby": 4.5
Updated Categories: ["Fiction", "Non-Fiction", "Science", "Technology"]
Object Comparison: false (due to reference differences)
```

---

**Hints:**
- Use concise and meaningful property names.
- Use `Array.prototype.filter` to get available books.
- Use `Array.prototype.reduce` to calculate the average rating.
- When iterating over the object, use `typeof` to handle different property types.
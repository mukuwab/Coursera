In this exercise, you will work with some data provided as an array of objects, listing information about dishes available in the Little Lemon restaurant.

You will need to write a function declaration which will be able to do two things:

If the function is called with the argument true, it will output the names of the dishes and calculate their final price (including 20% tax)

If the function is called with the argument false, it will output the names of the dishes and give their prices without the additional tax

The expected outcome is that all the dishes' names and prices will be shown in the console output.

The text below shows the output that your code should produce:

Prices with 20% tax:
Dish: Italian pasta Price: $ 11.46
Dish: Rice with veggies Price: $ 10.38
Dish: Chicken with potatoes Price: $ 18.66
Dish: Vegetarian Pizza Price: $ 7.74

Prices without tax:
Dish: Italian pasta Price (excl.tax): $ 9.55
Dish: Rice with veggies Price (excl.tax): $ 8.65
Dish: Chicken with potatoes Price (excl.tax): $ 15.55
Dish: Vegetarian Pizza Price (excl.tax): $ 6.45


Instructions
Lab instructions
0 of 1 completed


inLabInstructionsPart~djCr4a1zEe-EeAr_23icNw
​
Introduction:

In this lab, you will create two functions: getPrices() and getDiscount() to simulate the behavior of a receipt maker for the Little Lemon restaurant. You will work with a dataset representing dishes, their prices, and tax calculations. This lab reinforces the concepts of arrays, objects, loops, conditionals, and defensive coding in JavaScript.

Goal:

The goal of this lab is to build a dynamic receipt maker by implementing logic for calculating dish prices with or without tax and providing discounts based on the number of guests.

Objectives: 

Understand and apply loops and conditionals to manipulate and display array data.

Learn to handle parameters and arguments effectively in function definitions.

Practice defensive coding by validating inputs.

Use logical operations to implement dynamic pricing and discounts.





Learner Instructions: 

Steps:
Step 1: Open the fileProject.js file present under the LEARN folder. This is where you will write your JavaScript code.

Step 2: Define getPrices() function:

Add a parameter named taxBoolean to the getPrices() function.

Step 3: Loop over dishData array:

Inside the getPrices() function, create a for loop to iterate through all objects in the dishData array.

Step 4: Declare finalPrice variable:

Within the loop, declare a variable finalPrice without assigning a value.

Step 5: Handle conditional pricing: 

Add an if statement to check if taxBoolean is true.

Assign the current dish price to finalPrice. 

Step 6: Handle no-tax pricing:

Add an else if statement to check if taxBoolean is false.

Assign the current dish price to finalPrice.

Step 7: Add default case: 

In the else block, handle invalid inputs for taxBoolean: 

Log: "You need to pass a boolean to the getPrices call!"

Return to exit the function.

Step 8: Log dish details:

Still, inside the loop, log the following:

"Dish: ", the dish name, "Price: $", and finalPrice.

Step 9: Define getDiscount() function:

Add two parameters to the getDiscount() function: taxBoolean and guests. 

Step 10: Invoke getPrices():

On the first line, call getPrices() inside getDiscount() using taxBoolean as an argument.

Step 11: Validate input:

Use defensive coding to check:

guests is a number.

guests is greater than 0 and less than 30.

If the conditions are valid, execute the if block.

Otherwise, handle invalid inputs in the else block.

Step 12: Calculate discount:

In the if block:

Declare a variable discount and set it to 0.

Use if...else if to assign a discount:

If guests < 5, set the discount to 5.

Else, if guests >= 5, set the discount to 10.

Log: "Discount is: $" + discount. 

Step 13: Handle invalid input for guests:

In the else block:

Log: "The second argument must be a number between 0 and 30". 

Step 14: Test your code:

Call getDiscount() with various combinations of taxBoolean and guests to verify the functionality.

Example: 

12
getDiscount(true, 2);
getDiscount(false, 10);
Step 15: After successfully modifying the finalProject.js file, navigate to File > Save to save changes in the file.  

To execute your modified JavaScript code and verify the function is working:

Click the Run Code button in the top-right corner (shaped like a triangular "Play" button).

Key Takeaways:

Arrays of objects are powerful structures for representing data.

Loops combined with conditionals can dynamically process data. 

Defensive coding ensures functions handle invalid inputs gracefully.

Pseudo-code and clear task breakdown simplify complex implementations.

Final Step: Submit Your Code:

Go to File > Save to ensure your work is saved.

Submit your assignment: Click the "Submit Assignment" button in the Lab toolbar.  

Your code will be autograded and feedback will be available shortly on the Grades tab.

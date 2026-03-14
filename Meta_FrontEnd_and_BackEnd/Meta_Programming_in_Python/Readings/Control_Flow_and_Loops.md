# Controlling loops
So far, you have only looped over sequences based on the length of the data you wanted to iterate over. In many cases, this is not necessary and depending on the amount of the data it can also be quite costly. You'll now examine how you can control the flow of the loop and exit out when a specific condition is met. You will also look at control statements such as break, continue and pass. 

# If else
In many cases, you may need to search for a particular item in a list. Once the item is found, there is no need to continue looping over the other results. Using the same example as before, let's assume you only need to check if the dessert "Churros" is in the list and if it is, print a single statement. 


#Starter Code
favorites = ['Creme Brulee', 'Apple Pie', 'Churros', 'Tiramisú', 'Chocolate Cake']

for dessert in favorites:
    if dessert == 'Churros':
        print('Yes! One of my favorite desserts is', dessert)        

Running the above code will output the following:

Yes! One of my favorite desserts is Churros 

But what happens if you look for a dessert and that dessert is not on the list? The code above is currently not set up to handle this. Let's look for the dessert "Pudding" which is not on the list, and also add an else statement to handle the case of when it's not found. If the dessert is not part of the list, you will print a new statement.

#Starter Code
favorites = ['Creme Brulee', 'Apple Pie', 'Churros', 'Tiramisú', 'Chocolate Cake']

for dessert in favorites:
    if dessert == 'Pudding':
        print('Yes one of my favorite desserts is', dessert) 
    else:
        print('No sorry, that dessert is not on my list')


Running the above code will result in the following output:

No sorry, that dessert is not on my list

Note: As the code iterates through the list, it will print the statement above five times since there are five items in the list. There are more efficient ways to handle this scenario and print the message only once, such as using a for loop or creative applications of if-else statements. You will learn about these techniques soon enough as you progress in the course.

# Loop control statements


Break
The code works as intended but you may notice one flaw. If you change the search term to something that is on the list like "Churros" and run it again you will get the following output:

No sorry, that dessert is not on my list

No sorry, that dessert is not on my list

Yes one of my favorite desserts is Churros

No sorry, that dessert is not on my list

No sorry, that dessert is not on my list

This is not what you want! The dessert is on the list but it still printed out the else condition. To fix it, you need to use a control statement called break. 

Add the following:

#Starter Code
favorites = ['Creme Brulee', 'Apple Pie', 'Churros', 'Tiramisú', 'Chocolate Cake']

for dessert in favorites:
    if dessert == 'Pudding':
        print('Yes one of my favorite desserts is', dessert)
        break 
    else:
        print('No sorry, not a dessert on my list')

Running the above code will partially resolve the issue. The break statement is used to stop the loop, which in turn also stops the else condition. Without the break the loop will continue even after the if condition is satisfied.

The output of the code will be:

No sorry, not a dessert on my list

No sorry, not a dessert on my list

Yes one of my favorite desserts is Churros

While the break statement did stop the execution once "Churros" was found, the first two statements are not what we want here. We resolve this by modifying the if-else statement that we learnt earlier. Try changing the code above using this code block:


favorites = ['Creme Brulee', 'Apple Pie', 'Churros', 'Tiramisú', 'Chocolate Cake']

for dessert in favorites:
    if dessert == 'Churros':
        print('Yes, one of my favorite desserts is', dessert)
        break
else:  # This else belongs to the for loop, not the if statement
    print('No sorry, not a dessert on my list')



    What has changed here is the placement of the else block. The else will execute only once after the entire for loop is checked and if the dessert we want is not in the list. The else statement is used here in conjunction with the for loop, and so called the for-else. You will learn little more about it as you progress. 

# Continue
Similar to break, continue can be used to control the iteration of the loop. The key difference is that it can allow you to skip over a section of the loop but then continue on with the rest. If you change your code to this, you will notice the outcome will print everything except the Churros dessert.


#Starter Code
favorites = ['Creme Brulee', 'Apple Pie', 'Churros', 'Tiramisú', 'Chocolate Cake']

for dessert in favorites:
    if dessert == 'Churros':
        continue
    print('Other desserts I like are', dessert) 

# Pass
The pass statement in this case acts as a placeholder, allowing you to include an empty block of code without causing a syntax error. It does nothing and allows the program to continue execution normally.

#Starter Code
favorites = ['Creme Brulee', 'Apple Pie', 'Churros', 'Tiramisú', 'Chocolate Cake']

for dessert in favorites:
    if dessert == 'Churros':
        pass
    print('Other desserts I like are', dessert) 

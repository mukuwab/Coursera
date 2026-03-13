str = "Looping"

for item in str:
    print(item)

# will iterate through the string and print one letter at a time
# item -> variable to store the iterated value
# in -> keyword that specifies where you want to loop
# range -> keyword to specify the number of items in a range

for i in range(10):
    print("Looping...",i)

# Looping through arrays

fruits = ["apple", "banana", "lemon", "cherry", "pineapple"]

for item in fruits:
    print("I like this fruit:",item)

# while loop

count = 0

while count<len(fruits):
# the loop will run while the count is less than the length of the fruits array
    print('I like this fruit', fruits[count])
    
    # increment count so it matches the loop statement
    # need to avoid an infinite loop
    count +=1 # count = count + 1

# in a standard for loop you dont have access to the index but you can use the enumerate function
    # to access the index

for idx, item in enumerate(fruits):
    print("These fruits are great",item)

for idx, item in enumerate(fruits):
    print(idx,item)
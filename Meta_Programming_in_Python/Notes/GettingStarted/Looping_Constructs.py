str = "Looping"

for item in str:
    print(item)

# will iterate through the string and print one letter at a time
# item -> variable to store the iterated value
# in -> keyword that specifies where you want to loop
# range -> keyword to specify the number of items in a range

for i in range(10):
    print("Looping...",i)

#Looping through arrays

fruits = ["apple", "banana", "lemon", "cherry", "pineapple"]

for item in fruits:
    print("Fruit...",item)
# Lists -> sequence of one or more different similiar data types
    # dynamic array that can hold any data type

list1 = [1,2,3,4,5]
list2 = ["a", "b", "c"]

# can have lists of different data types
list3 = ["Spain", 5, False, 40.405]

# Lists are based on an index
print ( list3[0]) # Spain

# can have nested lists
list4 = [1, [2,3,4] ,5 ,6]

#printing lists 
print(*list3) #prints entire list

#print how it appears in code
print(list1, sep = " ")

print(list1)

#insert function
list1.insert(len(list1), 6)
print(list1) # [1, 2, 3, 4, 5, 6]
# looks for the index of where to insert to
# use the len function in the first argument to get the length of the list
# second argument will tell what the next index should be


# append function
    # dont have to specify the index or where the item should be placed

list1.append(7)
print(list1) # [1, 2, 3, 4, 5, 6, 7]

#extend function
    # accepts a list

list1.extend([8,9,10])
print(list1) # [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

#Removing items from lists

#pop method
    #specify index or location of the item you want to remove
list1.pop(4) # removes item at index 4 of list
print(list1) # [1, 2, 3, 4, 6, 7, 8, 9, 10]

# del keyword
del list1[0]
print(list1) # [2, 3, 4, 6, 7, 8, 9, 10]

#iterating through a list

for x in list1:
    print(x)

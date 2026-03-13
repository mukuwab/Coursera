my_tuple = (1, 'strings', 4.5, True)

print(my_tuple[1]) # strings

print(type(my_tuple)) # tuple

print(my_tuple.count('strings')) 
# looks for the number of occurances of that value in the tuple

print(my_tuple.index(4.5))
# returns the index of the location of the passed in value

#iterate through tuple and print values
for x in my_tuple:
    print(x)

#difference between list and tuples
    #tuple values are immutable --> cannot be changed

# my_tuple[0] = 1
# this will return an error
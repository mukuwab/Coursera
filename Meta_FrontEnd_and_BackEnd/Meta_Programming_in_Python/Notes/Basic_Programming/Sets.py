set_a = {1,2,3,4,5}

print(set_a)

# sets differ from lists
    # dont allow duplicate values

set_a = {1,2,3,4,5,5,5,5}
print(set_a) # {1, 2, 3, 4, 5}

# METHODS

set_a.add(6)
print(set_a) # {1, 2, 3, 4, 5, 6}

set_a.remove(3)
print(set_a) # {1, 2, 4, 5, 6}

# discard can be used in place of remove
#virtually the same

set_a.discard(2)
print(set_a) # {1, 4, 5, 6}


# SET OPERATORS

set_a = {1,2,3,4,5}
set_b = {5,6,7,8,9,10}

# union() --> joins one set to another
print( set_a.union(set_b) )
# {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
# also doesnt repeat duplicate values

# can also do union using |
print(set_a | set_b)
# {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}

# intersection -> displays common elements b/w sets
print(set_a.intersection(set_b)) # {5}

# can also use & to perform intersection()
print(set_a & set_b) # {5}

# difference()
print(set_a.difference(set_b)) # {1, 2, 3, 4}
# returns only elements in set_a that are NOT in set_b

# also can perform difference() using -
print( set_a - set_b) # {1, 2, 3, 4}

# symmetrical_difference()
print(set_a.symmetric_difference(set_b)) 
# {1, 2, 3, 4, 6, 7, 8, 9, 10}
# returns all elements present in set a or set b but not in both sets

# can also use ^ operator for symmetrical difference
print(set_a ^ set_b)

# A set is a collection with no duplicates but also a collection of unordered items
    # unlike a list, you cannot print values based on index

# print(set_a[0]) 
# this will error
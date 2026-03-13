# Sequence Data Types
#  3 types: Strings, Lists, Tuples




# String -> sequence of characters in '' or ""
name = "Jim"
print(   type(name)   ); # <class 'str'>




# Lists -> sequence of 1 or more similiar types
    #array+hold any type inside []

example_list = [1, 'hello', 4.5, "A"]
print(type (example_list))

print(   example_list[1]   )#access items by index




#Tuples
    #similar to lists
    #contain ordered sequence of one or more types
    #but are immutable (main diff) --> values inside
        #cannot be modified or changed
    #store data types in ()

example_tuple = (1, 'hello', 4.5, "A")

print(   example_tuple[1]   ) # hello




# Dictionary -> store data types in a key-value data structure
    # - each value accessed directly by key
    # - can store any data type

ed = {'a':22, 'b':44.4} #group of key-value pairs
# a --> key
# 22 -> value
print (  ed['a']   )  # 22
# print the value by enter its key



# Booleans
print( type(True)  )



#Set --> unordered and non indexed collection of non-
 # repeated values
 # use {}

example_set = {1, 'hello', 4.5, "A"}
print( type(example_set) ) # set


# when declaring a variable the data type is automatically
    # assigned by python based on its value

#decimals make floats
a = 10.5
print(type(a))#float

b = 1.0
print(type(a))#float

c= 'ashajsh'
print(type(c))#string

d= [1,2,3,4]
print(type(d))#list

#integers are non fractional numbers, pos or neg
e= 1
print(type(e))#integer

#Complex class -> used to represent complex numbers
    #made up of both real and imaginary numbers
f = 10 + 10j
print(type(f))#complex


# Type casting --> converting one data type to another

# 2 types of conversions:
    # 1. Implicit

    # 2. Explicit

# Implicit data type conversion performed automatically
    # by the compiler to prevent data loss
# will convert an int to a float if the inserted value 
    # is a decimal
# py can only convert values if the data types are compatible
    # like int and float
    # strings and int arent 
# TypeError will be thrown if data types arent compatible


# Explicit

# 3 common functions: str() int() float()


# str() --> converts any data type into string data type
a = str(11)
print(type(a)) #str
print(a)#11

# float()
b = float(2)
print(type(b))#float
print(b)#2.0

#int()
c = int(3.2)
print(type(c)) # int
print(c) #3

# Other type casting functions:

# ord() --> returns an integer representing the
    #underlying unicode character

# hex() --> converts an integer to a hexidecimal string

# oct() --> takes an integer and returns a string representing
    #an octal number

# tuple() set() list() dict()
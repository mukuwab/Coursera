# String Declarations

#single line
varA = "Hello World"

#multi line
varB = "This is too \
big to fit"

print(varB)

#Strings can be reassigned w/ a 2nd declaration

# Strings are essentially arrays.
# Each character can be accessed based on its index

name = 'John'
print (name[0]) #J

# len() -> can check the length of a string

print(len(name)) # 4

lastName = "Smith"

print(name,lastName) #John Smith
print(name+lastName) #JohnSmith
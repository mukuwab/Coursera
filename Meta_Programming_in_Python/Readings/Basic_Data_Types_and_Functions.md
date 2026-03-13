Operator    Meaning                   Example

==          Equals                    a == b

!=         Not Equal                  a != b

<          Less than                  a < b

>         Greater than               a > b          

<=       Less than or Equal to       a <= b

>=     Greater than or Equal to      a >= b


# Indentation
Indentation is used to define code blocks in Python. Unlike many programming languages that use braces {} to group code, Python uses indentation.

Indentation is mandatory in Python and is used to indicate which statements belong to loops, functions, conditionals, and other structures.

if x > 0:  # Colon indicates the start of the block
    print("Positive")  # Indented 
else:
    print("Non-positive") # Indented




Colon (:): Used to indicate the start of a code block, such as in loops, conditionals, and function definitions.

if x > 0:  # Colon starts the block
    print("Positive")


# input()
This function looks for the default input device, your keyboard, and captures the value. This value can then be assigned or used.

print("Where do you live?")
location = input()
print("So you live in " + location)



# str()
This function can be used to convert the provided value into a String

str(55)
'55'


# int()
This function can be used to convert the provided value into an int

int('75')
75



# float()
This function can be used to convert the provided value into a float

some_int = 10
float(some_int)
10.0


# Creating Functions
Functions in Python require a keyword to define them : def   followed by an identifier (a name) this forms the function signature. The body of the function contains the code to run when the function is called.


def say_hello():
    return "Hello there!"

# With parameters
def say_hello(you):
    return "Hello " +  you

'''
MATH OPERATORS
+ -> addition
- -> subtraction
/ -> division
* -> multiplication

LOGICAL OPERATORS
-used on conditional statements to determine if a statement is true or false

Operator            Meaning                 Example
and                 checks for both         a>5 and a<10
                    conditions to be 
                    true

or                  Checks for at least     a>5 or b>10
                    one condition to be
                    true    

not                 Returns false if the
                    result is true & vv     not(a>5)

'''

a = True
b = True
if a and b:
    print("All True") # output

# the 'and' statement needs both a and b to be true to execute
a = False
b = False
if a and b:
    print("All True") # no output

# w/ 'or' if either a or b is true the if statement is true
a = True
b = False
if a or b:
    print("True") # output

# the not operator will negate or return opposite of a and b
a = False
b = False
if not(a) or not(b):
    print("All True") # output
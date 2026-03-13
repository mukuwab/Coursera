# input()
    #gets data from a source of input

name = input("Please Enter Your Name: ")
print("Your name is {}".format(name))



# Reserved keywords of the print function that can be
    # passed as additional arguments

# object --> values that are printed on screen
# sep --> defines how the objects being printed are seperated
# end --> defines what gets printed at the end
# file --> specifies where values get printed to
    # by default is 'std out'
# flush --> boolean expression to flush the buffer 
    # moves the data from a temperary storage to the
    # computer's permenant storage

print('Hello', 'you!', sep=", ") # Hello, you!

# Direct Formatting
a = 10
b = 5
ans = a + b
print('Adding the value of {} and {} = {}'.format(a,b,ans))
# Adding the vaue of 10 and 5 = 15

print("I like {0} more than {1}.".format("oranges", "grapes"))
# I like oranges more than grapes


#args and kwargs (keyword args)
# can pass in any amount of non keyword variables and keyword arguments

# args
    # can pass in any amount of non-keyword variables/arguments
def sum_of(*args): #args will allow (n) any number of arguments through
    sum = 0
    for x in args:
        # add all values that are passed in through arg
        sum+= x
    return sum

print(sum_of(4,5,6))



#kwargs
#want to calculate total bill at restaurant
# can pass in any amount of keyword arguments

def sum_of(**kwargs): #args will allow (n) any number of arguments through
    #change parameter by adding another star and a 'kw'
    sum = 0
    for k,v in kwargs.items():
        # add all values that are passed in through arg
        # ensures that only the values are being added, doesnt make sense to add keys
        sum += v
    return round(sum,2)

print(sum_of(coffee=2.99, cake=4.55, juice=2.99))

'''
Function Syntax

def <function name>(<params>):
    <task to complete>
'''

def sum(x,y):
    return x+y

print( sum(2,3) )


# function for calculating tax amt.

bill = 175.00

tax_rate = 15

total_tax = (bill * tax_rate)/100.00

print('Total tax',total_tax)

############################

def calculateTax(bill, tax_rate):
    return round((bill *tax_rate) / 100.00, 2)

print ( 'Total Tax',calculateTax(175.00,15))
print ( 'Total Tax',calculateTax(164.33,22))

# use cls to clear the console
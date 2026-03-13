'''
Conditional
- if 
- else
- elif (else if)

Loops
- for loop
- while loop

if -> if the condition if true a function is performed
else -> catches anything that isnt caught by the preceding conditions
elif -> if the previous conditions were not true then try this condition

for loop -> checks for specific conditions then repeats and executes a block
            of code as long as those conditions are met

while loop -> repeats a specific block of code an unknown number of times until
              a condition is met
'''


bill_total = 210

discount1 = 10
discount2 = 20


if bill_total > 100 and bill_total < 200:
    print("Bill total is greater than 100")
    bill_total = bill_total - discount1
elif bill_total > 200:
    print("bill total is greater than 200")
else: 
    print("Bill is less than 100")

print("Total bill: "+str(bill_total))
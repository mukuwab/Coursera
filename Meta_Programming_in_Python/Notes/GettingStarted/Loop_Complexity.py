#outer loop
for i in range(10):
    # inner loop
    for j in range(10):
        print(0, end = " ") # ensures it prints evenly
    print()# print empty line so it goes to a new line with each iteration

import time 
# import time module to put a time stamp on what is printed
start_time = time.time()

for i in range(10):
    # inner loop
    for j in range(10):
        print(0, end = " ") # ensures it prints evenly
    print()# print empty line so it goes to a new line with each iteration

print("Time to run:",round((time.time() - start_time), 2), "secs")
# take the current time minus the start time

# round ((...), 2)
    # the second argument of the round function is the number of decimal places
        # you would like it to round to
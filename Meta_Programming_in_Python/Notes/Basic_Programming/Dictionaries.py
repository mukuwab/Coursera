# dictionaries access values based on keys and not an index position
    # faster and more flexible
# key is assigned to a specific value
    # key: value --> key-value pair
# dictionaries are mutable --> values can be changed or updated

sample_dict = {1:'Coffee', 2:'Tea', 3:'Juice'}
print(sample_dict[1]) # Coffee
# Entering the key returns the value

# you can change dictionary values
sample_dict[1] = 'Boba'
print(sample_dict[1])

# deleting items from dictionaries
del sample_dict[3]
print(sample_dict) # {1: 'Boba', 2: 'Tea'}

# ITERATION METHODS

my_d = {}
# {} can be a set but by default is an empty dictionary

# evaluate the type of my_d
print(type(my_d)) # <class 'dict'>

# add values into the dictionary

# key can be numeric or string
my_d1 = {3:'Test', 'Name':'Mukuwa'}
print(type(my_d1)) # <class 'dict'>

print(my_d1["Name"]) # Mukuwa

# adding a new key
my_d1["Last_Name"] = "Baffoe"
#{3: 'Test', 'Name': 'Mukuwa', 'Last_Name': 'Baffoe'}
print(my_d1)

#updating a key
my_d1["Name"] = "Ohemaa"
print(my_d1['Name'],my_d1['Last_Name']) # Ohemaa Baffoe

# trying to enter a duplicate key doesnt work
    #only overrides orgional

# deleting key from dictionary
del my_d1[3]
print(my_d1) # {'Name': 'Ohemaa', 'Last_Name': 'Baffoe'}

# iterating through dictionary
for x in my_d1:
    print(x) # only prints keys
    '''
    Name
    Last_Name
    '''
# to print both keys and items/values use items()
for key, value in my_d1.items():
    print(str(key) + " : "+value)
    '''
    Name : Ohemaa
    Last_Name : Baffoe
    '''
# great alternative for the match statement in the case of complex outcomes

http_status = 201

match http_status:
    case 200 | 201:
        print("Success")
        # | is an or operator so 200 or 201 will be successful
    case 400: 
        print("Not found")
    case 500:
        print("Server-side Error")
    case _:
        print("Unknown")
    
    #access the default class of the match statement with case _:
        # similiar to the else of the if statement
        # will run if no other conditions are met

    #TIP: cls clears the terminal
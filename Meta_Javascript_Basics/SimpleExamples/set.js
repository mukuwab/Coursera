let set = new Set();
    set.add(1);
    set.add(2);
    set.add(3);
    set.add(2);
    set.add(1);

    console.log(set);

    /* 
    A Set is a built-in JavaScript object that stores unique values — meaning it automatically 
    ignores duplicates.
   Each value in a Set can only appear once, even if you try to add it multiple times.


  Line	            Operation	                       Resulting Set
set.add(1)	         Adds 1	                               {1}
set.add(2)	         Adds 2	                              {1, 2}
set.add(3)	         Adds 3	                             {1, 2, 3}
set.add(2)	      2 already exists → ignored      	     {1, 2, 3}
set.add(1)	      1 already exists → ignored	         {1, 2, 3}

*/
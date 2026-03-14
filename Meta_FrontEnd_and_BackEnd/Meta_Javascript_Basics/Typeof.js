//Typeof operator
    //ids the data type of elements
    //evaluates a parameer + returns the data type as string

var test1 = typeof("What is this?");//string

var test2 = typeof(10);//number

var test3 = typeof(10.55);//number

var test4 = typeof(false);//boolean

var test5 = typeof(1<2); //boolean
//comparisons will evaluate to a single parameter

var test6 = typeof([1,2,3]);//object
//arrays in Javascript are actually objects

var test7 = typeof(function abc(){console.log("abc")});
//outputs: function
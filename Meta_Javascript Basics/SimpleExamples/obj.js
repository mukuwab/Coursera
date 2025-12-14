    let obj = {
        key: 1,
        value: 4
    };

    //copies all object properties into new variable, output
    let output = { ...obj };
    
    //Prints all of the object properties
    console.log(output);//{ key: 1, value: 3 }

    output.value -= obj.key;
    //output.value --> references the value property of obj --> stores 1
    //obj.key --> references the key property of obj --> stores 4
    //Subtract 4(value) - 1(key) = 3 --> assign new value back to object.value

    //Print
    console.log(output.value);


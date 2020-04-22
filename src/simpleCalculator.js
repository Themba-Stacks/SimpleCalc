function add (){
    var i;
    var sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
    
    //return num1+num2;

function multiply(){
    var i;
    var multiplied = 1;
    for (i = 0; i < arguments.length; i++) {
        multiplied = multiplied*arguments[i];
    }
    return multiplied;
}

multiply(1,2,3,4,5)
module.exports = {
    add:add,
    multiply:multiply
}

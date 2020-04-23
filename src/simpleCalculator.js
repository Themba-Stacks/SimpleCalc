function add (){
    var sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
    
    

function multiply(){
    var multiplied = 1;
    for (i = 0; i < arguments.length; i++) {
        multiplied = multiplied*arguments[i];
    }
    return multiplied;
}


module.exports = {
    add:add,
    multiply:multiply
}

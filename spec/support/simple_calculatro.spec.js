var mathFunction = require('/home/haplo/Documents/Umuzi/Techdep/SimpleCalc/src/simpleCalculator.js');

//import { add } from "/home/haplo/Documents/Umuzi/Techdep/SimpleCalc/src/simpleCalculator.js";

describe('Addition Math', function(){
    it("expects two positive numbers to be added", function(){
        //act
        const results = mathFunction.add(1,2);
        // arrange
        expect(results).toBe(3)
    })

    it("expects two negative numbers to be added", function(){
        const num1 = -1;
        const num2 = -1;
        //act
        const results = mathFunction.add(-1,-1);
        // arrange
        expect(results).toBe(-2)
    })

    it("expects more than two numbers to be added together", function(){
        //act
        const results = mathFunction.add(1,2,3,4,5);
        // arrange
        expect(results).toBe(15)
    })
});



describe('Multiplication Math', function(){
    it("expects two positive numbers to be multiplied together", function(){
        //act
        const results = mathFunction.multiply(1,3);
        // arrange
        expect(results).toBe(3)
    })

    it("expects a positive numbers to be multiplied by a negative number", function(){
        //act
        const results = mathFunction.multiply(-1,3);
        // arrange
        expect(results).toBe(-3)
    })

    it("expects to multiply more than two numbers", function(){
        //act
        const results = mathFunction.multiply(1,2,3,4,5);
        // arrange
        expect(results).toBe(120)
    })
});
    
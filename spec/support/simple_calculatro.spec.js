var mathFunction = require('/home/haplo/Documents/Umuzi/Techdep/SimpleCalc/src/simpleCalculator.js');

//import { add } from "/home/haplo/Documents/Umuzi/Techdep/SimpleCalc/src/simpleCalculator.js";

describe('Addition Math', function(){
    it("expects two positive numbers to be added", function(){
        const num1 = 2;
        const num2 = 1;
        //act
        const results = mathFunction.add(num1,num2);
        // arrange
        expect(results).toBe(3)


    })

    it("expects two negative numbers to be added", function(){
        const num1 = -1;
        const num2 = -1;
        //act
        const results = mathFunction.add(num1,num2);
        // arrange
        expect(results).toBe(-2)


    })

    it("expects more than two numbers to be added together", function(){
        const num1 = 1;
        const num2 = 2;
        const num3= 3;
        const num4 = 4;
        const num5= 5;
        //act
        const results = mathFunction.add(num1,num2,num3,num4,num5);
        // arrange
        expect(results).toBe(15)


    })
});



describe('Multiplication Math', function(){
    it("expects two positive numbers to be multiplied together", function(){
        const num1 = 3;
        const num2 = 1;
        //act
        const results = mathFunction.multiply(num1,num2);
        // arrange
        expect(results).toBe(3)


    })

    it("expects a positive numbers to be multiplied by a negative number", function(){
        const num1 = 3;
        const num2 = -1;
        //act
        const results = mathFunction.multiply(num1,num2);
        // arrange
        expect(results).toBe(-3)


    })

    it("expects to multiply more than two numbers", function(){
        const num1 = 1;
        const num2 = 2;
        const num3= 3;
        const num4 = 4;
        const num5= 5;
        //act
        const results = mathFunction.multiply(num1,num2,num3,num4,num5);
        // arrange
        expect(results).toBe(120)


    })
});
    //mutilply(1,2,3,4,5)
    // should return 120
    //multiply(1,3)
    // should still return 3
    //multiply(-1,3)
    // should still return -3
var mathFunction = require('../src/simple_calculator.js');


describe('Addition Math', function(){
    it("expects two positive numbers to be added", function(){
        const results = mathFunction.add(1,2);
        expect(results).toBe(3)
    })

    it("expects two negative numbers to be added", function(){
        const results = mathFunction.add(-1,-1);
        expect(results).toBe(-2)
    })

    it("expects more than two numbers to be added together", function(){
        const results = mathFunction.add(1,2,3,4,5);
        expect(results).toBe(15)
    })
});



describe('Multiplication Math', function(){
    it("expects two positive numbers to be multiplied together", function(){
        const results = mathFunction.multiply(1,3);
        expect(results).toBe(3)
    })

    it("expects a positive numbers to be multiplied by a negative number", function(){
        const results = mathFunction.multiply(-1,3);
        expect(results).toBe(-3)
    })

    it("expects to multiply more than two numbers", function(){
        const results = mathFunction.multiply(1,2,3,4,5);
        expect(results).toBe(120)
    })
});
    
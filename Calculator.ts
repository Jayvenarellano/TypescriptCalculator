class Calculator {
    add (a:number , b: number): number {
        return a + b;
    }
    subtract (a: number, b: number): number {
        return a - b;
    }
    displayResult (result: number): void {
        console.log (`result: ${result}`);
    }   
} 
    const calculator = new Calculator();
    const Sum = calculator.add(5,3);
    calculator.displayResult(Sum); 
    const Subtract = calculator.subtract(5,3);
    calculator.displayResult(Subtract); 

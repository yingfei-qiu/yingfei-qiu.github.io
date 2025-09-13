function calculate() {

    // YOUR CODE GOES HERE
    let num1obj = document.getElementById("number1");
    let num2obj = document.getElementById("number2");
    // console.log(num1);
    let num1 = parseInt(num1obj.value);
    let num2 = parseInt(num2obj.value);
    let sum = 0;
    for (i = num1; i <= num2;i++){
        sum += i;
    }
    
    let result = document.getElementById("result");
    result.innerText="The sum is "+sum;
    
}
// line 20: onclick will call the function;
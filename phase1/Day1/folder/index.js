const message = "Hello World"
console.log(message)

const num = 10

console.log(num)

// function addSum(num1, num2){
//     return  console.log(num1 + num2);
// }


const addSum = (num1, num2)=> {
    return  console.log(num1 + num2);

}

addSum(2, 2)
addSum(3,6)


function something(){
    let x = 2;
    console.log(x)
    function other(){
        let x = 5;
        console.log(x);
    }
    other();

}
something();


function multiplySum(num1,num2){
    return num1 * num2
}

console.log(multiplySum(2,4));



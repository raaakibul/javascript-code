// ... rest parameter 

function calculation(...numbers){
    let sum = 0
    for(let i of numbers){
        sum = sum +i
    }
    console.log("Sum = "+sum);
}
calculation(1)
calculation(1,2)
calculation(1,2,3)
calculation(1,2,3,4)
calculation(1,2,3,4,5)
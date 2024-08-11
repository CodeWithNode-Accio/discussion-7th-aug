

for(let i = 1; i<=5; i++){
    let sum = 0
    console.log("Number is",i)
    for(let k = 1; k<=i; k++){
        sum = sum + k
    }
    console.log(sum)
}

// i = 4, sum = 0

// Number is 4 

// k => 1  - 4 

// k = 1 =>  sum = sum + k = 1 
// k = 2 =>  sum = sum + k =>  3
// k = 3 =>  sum = sum + k => 6
// k = 4 =>  sum = sum + k => 6+4 = 10
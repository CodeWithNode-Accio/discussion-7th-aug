

let n = 100 

let countOfFactors = 0
for(let i = 2; i*i<=n; i++){

    if(n%i == 0){

        countOfFactors++
    }

}

// console.log(countOfFactors)

if(countOfFactors == 0){
    console.log("Prime")
}
else{
    console.log("Not Prime")
}


// 101 
// 2- 10




// 100
// √100 => 10
// 1     100   = 100
// 2      50
// 4      25
// 5      20
// 10     10


// 10 => 2*5


// 400 => 20 * 20



// https://course.acciojob.com/idle?question=d033636e-d994-4d87-8590-d11c23d94a92 => BigInt Questions.
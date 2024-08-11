// let n= 9
// let mid = (n+1)/2 // 5
// //upper part
// for(let i = 1; i<=mid; i++){
//     let row = ''
//     // no of space
//     for(let s = 1; s<=(mid-i); s++){
//         row = row + " "
//     }
//     // no of star
//     for(let r = 1; r<=(i*2-1); r++){
//         row = row + "*"
//     }
//    console.log(row)
// }
// //lower part
// for(let li = 1; li<=(mid-1); li++){
//     let lowerRow = ''
//     //no of space in lower part
//     for(let s1 = 1; s1<=li; s1++){
//         lowerRow = lowerRow + " "
//     }
//     //no of star in lower part
//     for(let r1 = 1; r1 <= 2*(mid-li)-1; r1++){
//         lowerRow = lowerRow + "*"
//     }
//     console.log(lowerRow);
// }

// console.log("##################################################")

function diamond(){

     let numberOfStars = 1 
     let numberOfSpaces = 4
     for(let line = 1; line<=9; line++){
          
        // space loop: 
        let spaceContainer=""
        for(space = 1; space<=numberOfSpaces; space++){
           spaceContainer = spaceContainer + "  "
        }
        
        let starCollection=""
        for(let col = 1; col<=numberOfStars; col++){
           starCollection = starCollection+ "* "
        }

        console.log(spaceContainer+starCollection)

       if(line<=4){
        numberOfSpaces--
        numberOfStars = numberOfStars+2
       }
       else if(line>=5){
        numberOfSpaces++
        numberOfStars = numberOfStars-2
       }

     }

}


diamond()
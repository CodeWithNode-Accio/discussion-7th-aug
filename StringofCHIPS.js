// https://course.acciojob.com/idle?question=32a5cb19-e075-4744-8c37-48646324cf41


function minMoves(s) {
    // s = "ohipo"
    let str = "chips"
    let count = 0
    for(i = 0 ; i<=s.length-1; i=i+5){
        // 0 - 4
          let word = s.slice(i,i+5) // ohipo
          if(word!="chips"){
              for(let j = 0; j<=4; j++){
                  if(word[j] != str[j]){
                      count++ // 2
                  }
              }
          }
    }

    return count

}
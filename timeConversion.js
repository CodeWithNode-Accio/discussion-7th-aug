// https://course.acciojob.com/idle?question=354f7964-86b9-4bcc-8f31-d070f1336bce 


function timeConversion(s) {
    // Write your code here
       let hr = +s.slice(0,2) // Number(s.slice(0,2))
       let amPm = s.slice(-2) //"PM"
  
      if(hr<12 && amPm=="AM"){
          console.log(s.slice(0,-2))
      }
      else if(hr<12 && amPm=="PM"){
          console.log(hr+12+s.slice(2,-2))
      }
      else if(hr == 12 &&  amPm=="PM"){
            console.log(s.slice(0,-2))
      }
      else if(hr == 12 &&  amPm=="AM"){
          console.log("00"+s.slice(2,-2))
      }
  
      // 12:36:12PM 
      // 12: 36:12AM => 00:36:12
  
  
  
      
  
      // console.log(s, typeof s)
  
      // 10:35:46AM =>   10:35:46
  
      // 10:35:46PM =>   22: 35:46
  
      
     
  
  
  
  
      
  }
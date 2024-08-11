let s = 'abcdefk'
let k = 2
let str = "abcdefghijklmnopqrstuvwxyz"
let shiftedstr = ''
for(let i = 0; i<=s.length-1;  i++){
    let originalPos = str.indexOf(s[i])
    // console.log(originalPos);
    let newpos = (originalPos + k)%26
    shiftedstr = shiftedstr + str[newpos]
}
console.log(shiftedstr)
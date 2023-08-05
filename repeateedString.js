
const repeatedString = (s, n) => {
    let length = s.length;
   
    const countA = (s) => {
        let count = 0;
        for(let i = 0; i < s.length; i++) {
            if(s[i] === 'a'){
                count += 1;
            }
        }
        console.log({count});
        return count;
        
    }
   
   
    const repeatedString = Math.floor(n / length) ;
    // console.log({repeatedString});
    const countInRepetition = countA(s) * repeatedString;
    console.log({countInRepetition});
    // const extraStringLength = n - (repeatedString * length)
    const extraStringLength = n % length
            console.log({extraStringLength});

    let total = countInRepetition + countA(s.slice(0, extraStringLength))
  return total
}
const s= 'aba'
const n = 10;

const countA = repeatedString (s,n)
console.log(countA);
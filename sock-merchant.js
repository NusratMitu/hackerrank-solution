const countPair = (a,n) => {
let count = {}
let duplicate = []
let sum = 0;
for (let i of a) {
    count[i] = count[i] + 1 || 1 ;
    console.log(count);
    if(count[i] % 2 === 0)
     sum += 1;
        console.log({sum});
}

return sum;

}


var a = [1, 2, 1, 2, 1, 3, 1, 2];
let n = a.length;
var result = countPair(a,n);
console.log(result);


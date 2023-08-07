const matchedItem = (a) => {
    let distance = [];
    for(let i = 0; i < a.length; i++) {
        for(let j = i+1; j < a.length; j++) {
            if(a[j] === a[i]){
                console.log(j -i);
                distance.push(j-i)
            }
            
        }}
        return distance
}
const a = [7, 1,3,4,1,7]
console.log(matchedItem(a));

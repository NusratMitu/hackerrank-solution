function countingValleys(steps, path) {
    // Write your code here
    let sea_level = 0, valley_count =0;
    for(let i = 0; i<= steps; i++){
        if(path[i] === "U")
        sea_level++;
        else sea_level--;
        if(sea_level === 0 && path[i] === "U")
        valley_count++
    }
    return valley_count

}

let steps = 8 
let path = ["D","D","U","U","U","U","D","D"]
let valley = countingValleys(steps, path)
console.log(valley);
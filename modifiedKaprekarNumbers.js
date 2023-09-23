const modifiedKaprekarNumbers = (p, q) => {
    let result = []
    while(p < q ) {
        let n =  p * p;
        // console.log({n});
        const numberString = n.toString()
        // console.log({numberString});
        const firstSplittedNumber = numberString.slice(0, (numberString.length)/2)
        // console.log({firstSplittedNumber});
        const secondSplittedNumber = numberString.slice((numberString.length)/2)
        // console.log({secondSplittedNumber});
        let sum = parseInt(firstSplittedNumber) + parseInt(secondSplittedNumber)
       
        if( sum == p ){
        // console.log({sum});
        result.push(sum)
    }
       
        p++; 

    }
    if(result.length === 0)
    console.log("INVALID RANGE.");
else console.log(...result);

}

// console.log(modifiedKaprekarNumbers(5,20));
modifiedKaprekarNumbers(1,100)
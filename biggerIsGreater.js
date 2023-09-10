const biggerIsGreater = (w) => {
    const charArray = w.split('');
    let i = charArray.length - 2; 
     // Find the first character that is smaller than the character next to it
    while (i >= 0 && charArray[i] >= charArray[i+1]){
        i--;
    }
    // console.log({i});
    if (i === -1) {
        return "no answer" // It's already the largest possible permutation
    }
     // Find the smallest character to the right of arr[i] but greater than arr[i]
    let j =  charArray.length - 1;
    while(charArray[j] <= charArray[i]){
        j--;
    }
    [charArray[i],charArray[j]] = [ charArray[j], charArray[i] ]
    const reversedSubArray =  charArray.slice(i+1).reverse();
    // console.log({reversedSubArray});
    charArray.splice(i+1, charArray.length - i - 1, ...reversedSubArray)
    return charArray.join('')
    }



console.log(biggerIsGreater("bdca"));  // ba
console.log(biggerIsGreater("mnfe"));  // no answer
console.log(biggerIsGreater("mmfe")); // hegf
console.log(biggerIsGreater("bb"));

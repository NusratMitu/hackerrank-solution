const biggerIsGreater = () => {
    const charArray = w.split('');
    const i = charArray.length - 2; 
    console.log({i});
    while (i >= 0 && charArray[i] > charArray[i+1]){
        i--;
    }
    if (i === -1) {
        return "no answer"
    }
    }

const w = 'abcdfe'
console.log(biggerIsGreater(w));




const matchedItem = (a) => {
    let distance = [];
    for(let i = 0; i < a.length; i++) {
        for(let j = i+1; j < a.length; j++) {
            if(a[j] === a[i]){
                // console.log(j -i);
                distance.push(j-i)
            }
           
        }
       
    }
    let temp = distance[0];
       
        if(distance?.length){
            for(let i = 0; i < distance?.length; i++) {
            
                if(distance[i] < temp){
                    temp = distance[i]
                }
              
             
            }
        //    console.log({temp});
           return temp;
        }
        else return -1
  
        }
        
// const a = [7, 1,3,4]
const a = [7, 1,3,4, 1, 7]
console.log(matchedItem(a));

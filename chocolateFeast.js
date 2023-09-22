function chocolateFeast(n, c, m) {
   let numOfChocolates = Math.floor(n / c)
   let numOfWrappers = numOfChocolates;
   
   while(numOfWrappers >= m) {
 numOfChocolates = Math.floor(numOfChocolates + numOfWrappers/m);
 numOfWrappers = Math.floor(numOfWrappers/m) + Math.floor(numOfWrappers%m);
   }
   return numOfChocolates 

}


console.log( chocolateFeast(15, 3, 2) );
function jumpingOnClouds(c) {
    let jump = 0;
    for(let i = 0; i < c.length; i++){
      
         if(c[i+2] === 0 && i+2 <= c.length){
             i++;
             jump++;
         }
        
         
      else if(c[i+1] === 0 && i+1 <= c.length ){
          jump++;
      }
    
      else {jump = jump;
     
      };
      
  }
  return jump;
}
console.log(jumpingOnClouds([0, 1, 0, 0, 0, 0, 1,0]))
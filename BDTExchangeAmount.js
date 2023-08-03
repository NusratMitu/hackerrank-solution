const numOFNotes =  (notes, amount) => {
    let noteCount= {};
    for(let i = notes.length; i >= 0; i--)
    if(amount >= notes[i]){
         console.log({amount})
         console.log(notes[i], "note")
        let count = Math.floor(amount/ notes[i]) 
        noteCount[notes[i]] = count
        amount = amount - (notes[i] * count) 
        
   
    console.log(amount)
    }
    return noteCount
}
const notes = [1,2,5,10,20,50,100]
let exchangeAmount = 48
const  exchangeNoteCount = numOFNotes(notes, exchangeAmount)
console.log(exchangeNoteCount)
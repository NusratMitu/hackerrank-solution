
const func = (bill, chargedBill, k) => {
    const sharedBills = (bill.filter((b, i) => i!== k ));
    const annasBill = sharedBills.reduce((acc, b) => { return (acc+b)}, 0)
    if (chargedBill > (annasBill/2)){
        return (chargedBill - (annasBill/2))
    }
    else if (chargedBill === (annasBill/2)) {
        return "Bon Appetit"
    }
}
let bill = [3, 10, 2, 9];
let chargedBill = 7;
let k = 1;
console.log(func(bill, chargedBill, k));

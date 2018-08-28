/*-----------------------------
LECTURE 23 - CODING CHALLANGE 3
-----------------------------*/
var bills = [124, 48, 268];
var tips = [];
var totals = [];

function calculateTip(bill) {
    let tip;
    let total;
    switch (true) {
        case bill < 50:
            // Calculate tip amount:
            tip = bill * 0.2;
            // Add tip to tips array:
            tips.push(tip);
            // Calculate total amount paid:
            total = bill + tip;
            // Add total to totals array:
            totals.push(total);
            break;
        case bill >= 50 && bill < 200:
            tip = bill * 0.15;
            tips.push(tip);
            total = bill + tip;
            totals.push(total);
            break;
        // Bill is more than $200:
        default:
            tip = bill * 0.1;
            tips.push(tip);
            total = bill + tip;
            totals.push(total);
            break;
    }
}

calculateTip(bills[0]);
calculateTip(bills[1]);
calculateTip(bills[2]);

console.log('Bills: ' + bills);
console.log('Tips: ' + tips);
console.log('Totals: ' + totals);

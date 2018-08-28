/*-----------------------------
LECTURE 30 - CODING CHALLANGE 5
-----------------------------*/

var johnBills, johnAvgTip, markBills, markAvgTip;
johnBills = {
    bills: [124, 48, 268, 180, 42],
    // tips: [],
    // totals: [],
    calcTips: function() {
        this.tips = [];
        this.totals = [];
        for (var i = 0; i < this.bills.length; i++) {
            var bill, percentage, tip, total;
            bill = this.bills[i];
            if (bill < 50) {
                percentage = 0.2;
                // tip = bill * percentage;
                // total = bill + tip;
                // this.tips.push(tip);
                // this.totals.push(total);
            }
            else if (bill >= 50 && bill < 200) {
                percentage = 0.15;
                // tip = bill * percentage;
                // total = bill + tip;
                // this.tips.push(tip);
                // this.totals.push(total);
            }
            else {
                percentage = 0.1;
                // tip = bill * percentage;
                // total = bill + tip;
                // this.tips.push(tip);
                // this.totals.push(total);
            }
            tip = bill * percentage;
            total = bill + tip;
            this.tips.push(tip);
            this.totals.push(total);
        }
    }
};
markBills = {
    bills: [77, 475, 110, 45],
    // tips: [],
    // totals: [],
    calcTips: function() {
        this.tips = [];
        this.totals = [];
        for (var i = 0; i < this.bills.length; i++) {
            var bill, percentage, tip, total;
            bill = this.bills[i];
            if (bill < 100) {
                percentage = 0.2;
                // tip = bill * percentage;
                // total = bill + tip;
                // this.tips.push(tip);
                // this.totals.push(total);
            }
            else if (bill >= 100 && bill < 300) {
                percentage = 0.1;
                // tip = bill * percentage;
                // total = bill + tip;
                // this.tips.push(tip);
                // this.totals.push(total);
            }
            else {
                percentage = 0.25;
                // tip = bill * percentage;
                // total = bill + tip;
                // this.tips.push(tip);
                // this.totals.push(total);
            }
            tip = bill * percentage;
            total = bill + tip;
            this.tips.push(tip);
            this.totals.push(total);
        }
    }
};

function calcTipAvg(tips) {
    var sumOfTips, avgTip;
    sumOfTips = 0;
    for (var i = 0; i < tips.length; i++) {
        sumOfTips = sumOfTips + tips[i];
    }
    avgTip = sumOfTips / tips.length;
    return avgTip;
}

johnBills.calcTips();
markBills.calcTips();

// johnAvgTip = calcTipAvg(johnBills.tips);
// markAvgTip = calcTipAvg(markBills.tips);
// Store the average tip in the object itself:
johnBills.avgTip = calcTipAvg(johnBills.tips);
markBills.avgTip = calcTipAvg(markBills.tips);

// if (johnAvgTip < markAvgTip) {
if (johnBills.avgTip < markBills.avgTip) {
    // console.log('Mark\'s family tips the most on average: ' + markAvgTip);
    console.log('Mark\'s family tips the most on average: ' + markBills.avgTip);
}
// else if (markAvgTip < johnAvgTip) {
else if (markBills.avgTip < johnBills.avgTip) {
    // console.log('John\'s family tips the most on average: ' + johnAvgTip);
    console.log('John\'s family tips the most on average: ' + johnBills.avgTip);
}
else {
    // console.log('Both families tips equaly on average: ' + johnAvgTip);
    console.log('Both families tips equaly on average: ' + johnBills.avgTip);
}

console.log("lo");

// BMI = mass / (height * height)

// var markMass, markHeight, johnMass, johnHeight;

// markMass = 64;
// markHeight = 1.91;
// johnMass = 78;
// johnHeight = 1.75;

// var markBMI = markMass / (markHeight * markHeight);

// var johnBMI = johnMass / (johnHeight * johnHeight);

// var isMark = markBMI > johnBMI;
// console.log(isMark);

// var teamJohn = [140, 120, 103]
// var teamMike = [116, 94, 123]
// var getSum = function(total,num) {
//     return total + num;
// }

// var avgTeamJohn = teamJohn.reduce(getSum, 0)
// var avgTeamMike = teamMike.reduce(getSum, 0)

// if (avgTeamJohn > avgTeamMike) {
//     console.log('Team John win at '+ avgTeamJohn );
// } else if (avgTeamJohn === avgTeamMike) {
//     console.log('This is a draw');
// } else if (avgTeamJohn < avgTeamMike) {
//         console.log('Team Mike win at '+ avgTeamMike );
//     }



// //////

// // var bills = [124, 48, 268];

// var tipCalculator = function (bills) {
    
//     var tips = [];
//     var finalAmount = [];

//     for (let i = 0; i < bills.length; i++) {

//         if (bills > 200) {
//             tips.push(bills[i] * 0.1);
//             finalAmount.push(bills[i] + bills[i] * 0.1);
//         } else if (bills <= 200 && bills >= 50){
//             tips.push(bills[i] * 0.15);
//             finalAmount.push(bills[i] + bills[i] * 0.15);
//         } else {
//             tips.push(bills[i] * 0.2);
//             finalAmount.push(bills[i] + bills[i] * 0.2);
//         }    
//     }
//     console.log(tips);
//     console.log(finalAmount);
// }

// tipCalculator([124, 48, 268]);

// //////

// var john = {
//     fullName: "John Smith",
//     mass: 64,
//     height: 1.81
// }

// var Mark = {
//     fullName: "Mark Bain",
//     mass: 75,
//     height: 1.91,
//     calculateBMI: function() {
//         Mark.BMI = this.mass / (this.height * this.height);
//     }
    
// }

// console.log(john);
// console.log(Mark);

////


// var bills = [124, 48, 268];

var johnBills = {
    value: [124, 48, 268, 180, 42],
    tips: [],
    totals: [],
    calcTip: function() {
        
        for (let i = 0; i < this.value.length; i++) {
            var currentTip = 0;
            if (this.value[i] > 200) {
                this.tips.push(this.value[i] * 0.1);
                this.totals.push(this.value[i] + this.value[i] * 0.1);
            } else if (this.value[i] <= 200 && this.value[i] >= 50){
                this.tips.push(this.value[i] * 0.15);
                this.totals.push(this.value[i] + this.value[i] * 0.15);
            } else {
                this.tips.push(this.value[i] * 0.2);
                this.totals.push(this.value[i] + this.value[i] * 0.2);
            } 
        }
    },
}


var markBills = {
    value: [77,375,110,45],
    tips: [],
    totals: [],
    calcTip: function() {
        
        for (let i = 0; i < this.value.length; i++) {

            if (this.value[i] > 300) {
                this.tips.push(this.value[i] * 0.25);
                this.totals.push(this.value[i] + this.value[i] * 0.25);
            } else if (this.value[i] <= 300 && this.value[i] >= 100){
                this.tips.push(this.value[i] * 0.1);
                this.totals.push(this.value[i] + this.value[i] * 0.1);
            } else {
                this.tips.push(this.value[i] * 0.2);
                this.totals.push(this.value[i] + this.value[i] * 0.2);
            } 
        }
    },
}

johnBills.calcTip();
markBills.calcTip();
console.log(johnBills);
console.log(markBills);

var tipAverage = function (tippies) {
    var tipsSum = 0;

    for (let i = 0; i < tippies.length; i++) {
        tipsSum += tippies[i];
    }

    return tipsSum / tippies.length;
}

var johnFinal = tipAverage(johnBills.tips);
var markFinal = tipAverage(markBills.tips);
console.log(johnFinal);
console.log(markFinal);

johnFinal > markFinal ? console.log('John paid the highest tips') : console.log('Mark paid the most tips');

// var tipCalculator = function (bills) {
    
//     var tips = [];
//     var finalAmount = [];

//     for (let i = 0; i < bills.length; i++) {

//         if (bills > 200) {
//             tips.push(bills[i] * 0.1);
//             finalAmount.push(bills[i] + bills[i] * 0.1);
//         } else if (bills <= 200 && bills >= 50){
//             tips.push(bills[i] * 0.15);
//             finalAmount.push(bills[i] + bills[i] * 0.15);
//         } else {
//             tips.push(bills[i] * 0.2);
//             finalAmount.push(bills[i] + bills[i] * 0.2);
//         }    
//     }
//     console.log(tips);
//     console.log(finalAmount);
// }

// tipCalculator([124, 48, 268]);
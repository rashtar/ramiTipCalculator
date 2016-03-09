// Create a constant for HST
var HST = 0.13;
// Retrieve command line arguments
var args = process.argv.splice(process.execArgv.length + 2);
// Exit if args not == 2
if (args.length !== 2) {
    console.log('You need to enter the meal price and satisfaction level (terrible, unsatisfied, satisfied, verySatisfied)');
    process.exit();
}
// Create a variable for the meal price
// TODO this should be input from the user
var mealPrice = args[0];
var userSatisfaction = args[1];
// Satisfaction measured on 3 levels:
// 0 = Waiter spat in your food, 0% tip
// 1 = Unsatisfied, 10% tip
// 2 = Satisified, 15% tip
// 3 = Extremely Satisfied, 20% tip
var satisfaction;
(function (satisfaction) {
    satisfaction[satisfaction["terrible"] = 0] = "terrible";
    satisfaction[satisfaction["unsatisfied"] = 0.1] = "unsatisfied";
    satisfaction[satisfaction["satisfied"] = 0.15] = "satisfied";
    satisfaction[satisfaction["verySatisfied"] = 0.2] = "verySatisfied";
})(satisfaction || (satisfaction = {}));
console.log('Given that the meal price was ' + mealPrice + ' and the user was ' + userSatisfaction);
console.log('The total bill will be: ' + calculateTip(mealPrice, satisfaction[userSatisfaction]));
function calculateTip(mealPrice, satisfaction) {
    return mealPrice * (HST + 1) * (satisfaction + 1);
}

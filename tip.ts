// Create a constant for HST
const HST : number = 0.13;

// Retrieve command line arguments
var args = process.argv.splice(process.execArgv.length + 2);

// Exit if args not == 2
if ( args.length !== 2 ) {
	console.log('You need to enter the meal price and satisfaction level (terrible, unsatisfied, satisfied, verySatisfied)');
	process.exit();
}

// Create a variable for the meal price
// TODO this should be input from the user
var mealPrice : number = args[0];
var userSatisfaction : string = args[1];

// Satisfaction measured on 3 levels:
// 0 = Waiter spat in your food, 0% tip
// 1 = Unsatisfied, 10% tip
// 2 = Satisified, 15% tip
// 3 = Extremely Satisfied, 20% tip
enum satisfaction {
	terrible = 0,
	unsatisfied = 0.10,
	satisfied = 0.15,
	verySatisfied = 0.20
}

console.log('Given that the meal price was ' + mealPrice + ' and the user was ' + userSatisfaction);
console.log('The total bill will be: ' + calculateTip(mealPrice, satisfaction[userSatisfaction]));

function calculateTip(mealPrice:number, satisfaction:number) : number {
	return mealPrice * (HST + 1) * (satisfaction + 1);
}


// Create a constant for HST
const HST : number = 0.13;

// Create a variable for the meal price
// TODO this should be input from the user
var mealPrice : number = 10;

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

console.log('Given that the meal price was ' + mealPrice);
console.log('Waiter spat in my food: ' + calculateTip(mealPrice, satisfaction.terrible));
console.log('Unsatisfied: ' + calculateTip(mealPrice, satisfaction.unsatisfied));
console.log('Satisfied: ' + calculateTip(mealPrice, satisfaction.satisfied));
console.log('Extremely Satisfied: ' + calculateTip(mealPrice, satisfaction.verySatisfied));

function calculateTip(mealPrice:number, satisfaction:number) : number {
	return mealPrice * (HST + 1) * (satisfaction + 1);
}


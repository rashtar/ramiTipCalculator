export const HST : number = 0.13;
var mealPrice : number = 10;
var satisfaction : number;

// Satisfaction measured on 3 levels:
// 0 = Waiter spat in your food, 0% tip
// 1 = Unsatisfied, 10% tip
// 2 = Satisified, 15% tip
// 3 = Extremely Satisfied, 20% tip

console.log('Given that the meal price was ' + mealPrice);
console.log('Waiter spat in my food: ' + calculateTip(mealPrice, 0));
console.log('Unsatisfied: ' + calculateTip(mealPrice, 0.10));
console.log('Satisfied: ' + calculateTip(mealPrice, 0.15));
console.log('Extremely Satisfied: ' + calculateTip(mealPrice, 0.20));



function calculateTip(mealPrice:number, satisfaction:number) : number {
	return mealPrice * (HST + 1) * (satisfaction + 1);
}


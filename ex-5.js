// Start coding here
// function findMinNumber(a, b) {
// 	let lastNumber = 0;
// 	if (a > b) {
// 		lastNumber = b;
// 	} else if (a < b) {
// 		lastNumber = a;
// 	} else {
// 		lastNumber = "no number or The numbers are the same";
// 	}
// 	return lastNumber;
// }
function findMinNumber(a, b) {
	let lastNumber = Math.min(a, b);
	return lastNumber;
}

const minNumber = findMinNumber(10, 20);

console.log(minNumber); // 10

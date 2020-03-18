// // let a = 35;
// // let b = 6;
// // let c = false;


let a = +prompt("Enter 1 number","");
let b = +prompt("Enter 2 number","");
let c = confirm("OK - for thue, cansel - for false");


// if (c == "false") {
// 	c = false;
// } else {
// 	c = true;
// }


function test() {
	console.log(a);
	console.log(b);
	console.log(c);

	if (c == true) {
		if (a < b) {
			console.log(b);
		} else {
			console.log(a);
		}
	} else {
		if (a < b) {
			console.log(a);
		} else {
			console.log(b);
		}
	}
}

test()



// let purchaseValue = +prompt("Enter total price of products","");
// let discount;

// if (purchaseValue < 1000) {
// 	discount = 0.03;
// } else if (purchaseValue >= 1000 && purchaseValue < 5000) {
// 	discount = 0.05;
// } else {
// 	discount = 0.07;
// }

// function costWithDiscount() {
// 	console.log(purchaseValue - (purchaseValue * discount));
// }

// costWithDiscount()
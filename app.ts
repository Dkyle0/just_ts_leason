interface PriceParams  {
	price: number
	discount: number
	isInstallment: boolean
	months?: number
}


const totalPrice = ({ price, discount, isInstallment, months } : PriceParams) : number => {
	let res: number;

	if (isInstallment && months) {
		res = (price - price / 100 * discount) / months
	}
	else {
		res = price - price / 100 * discount
	}

	return res;
};

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price); // 6250

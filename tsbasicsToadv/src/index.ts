function calculateTax(income: number): number {
	if (income <= 100000) {
		return income * 1.2;
	}
    return 0;
}
console.log(calculateTax(120000));

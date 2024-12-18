const data = [
	{
		id: 1289,
		storeName: 'Goodsense Extra Strength Cold and Hot medicated',
		takeOutQuantity: 95,
		takeOutSalesAmount: 49600,
		uberQuantity: 24,
		uberSalesAmount: 75380,
		deliveryQuantity: 13,
		deliverySalesAmount: 69326,
		menuQuantity: 52,
		menuSalesAmount: 62366,
		date: '2024-11-05',
	},
	{
		id: 7586,
		storeName: 'GENTAMICIN SULFATE',
		takeOutQuantity: 72,
		takeOutSalesAmount: 32463,
		uberQuantity: 49,
		uberSalesAmount: 24087,
		deliveryQuantity: 77,
		deliverySalesAmount: 54243,
		menuQuantity: 67,
		menuSalesAmount: 78033,
		date: '2024-11-06',
	},
	{
		id: 5546,
		storeName: 'K-Vescent',
		takeOutQuantity: 72,
		takeOutSalesAmount: 47573,
		uberQuantity: 29,
		uberSalesAmount: 81461,
		deliveryQuantity: 39,
		deliverySalesAmount: 17774,
		menuQuantity: 51,
		menuSalesAmount: 82528,
		date: '2024-11-07',
	},
	{
		id: 6153,
		storeName: 'Enoxaparin Sodium',
		takeOutQuantity: 85,
		takeOutSalesAmount: 33735,
		uberQuantity: 76,
		uberSalesAmount: 53309,
		deliveryQuantity: 59,
		deliverySalesAmount: 98957,
		menuQuantity: 77,
		menuSalesAmount: 26077,
		date: '2024-11-08',
	},
	{
		id: 8465,
		storeName: 'Torsemide',
		takeOutQuantity: 89,
		takeOutSalesAmount: 75893,
		uberQuantity: 81,
		uberSalesAmount: 30606,
		deliveryQuantity: 19,
		deliverySalesAmount: 32798,
		menuQuantity: 17,
		menuSalesAmount: 22826,
		date: '2024-11-09',
	},
	{
		id: 4321,
		storeName: 'Xenon Gas',
		takeOutQuantity: 100,
		takeOutSalesAmount: 55000,
		uberQuantity: 55,
		uberSalesAmount: 25000,
		deliveryQuantity: 32,
		deliverySalesAmount: 40200,
		menuQuantity: 60,
		menuSalesAmount: 70000,
		date: '2024-11-10',
	},
	{
		id: 3762,
		storeName: 'Vitamin C Serum',
		takeOutQuantity: 65,
		takeOutSalesAmount: 31456,
		uberQuantity: 45,
		uberSalesAmount: 22580,
		deliveryQuantity: 88,
		deliverySalesAmount: 50560,
		menuQuantity: 53,
		menuSalesAmount: 63100,
		date: '2024-11-11',
	},
	{
		id: 2147,
		storeName: 'Aspirin Pain Relief',
		takeOutQuantity: 80,
		takeOutSalesAmount: 42000,
		uberQuantity: 62,
		uberSalesAmount: 32000,
		deliveryQuantity: 56,
		deliverySalesAmount: 46300,
		menuQuantity: 68,
		menuSalesAmount: 75000,
		date: '2024-11-12',
	},
	{
		id: 1935,
		storeName: 'Metformin',
		takeOutQuantity: 58,
		takeOutSalesAmount: 20000,
		uberQuantity: 39,
		uberSalesAmount: 15800,
		deliveryQuantity: 27,
		deliverySalesAmount: 29450,
		menuQuantity: 43,
		menuSalesAmount: 39100,
		date: '2024-11-13',
	},
	{
		id: 8710,
		storeName: 'Ibuprofen Tablets',
		takeOutQuantity: 95,
		takeOutSalesAmount: 61500,
		uberQuantity: 50,
		uberSalesAmount: 23500,
		deliveryQuantity: 33,
		deliverySalesAmount: 30100,
		menuQuantity: 59,
		menuSalesAmount: 68200,
		date: '2024-11-14',
	},
]

export const getData = (
	startDate: Date | null,
	endDate: Date | null,
	searchText: string
) => {
	let result = data

	if (startDate) {
		result = result.filter((item) => new Date(item.date) >= startDate)
	}

	if (endDate) {
		result = result.filter((item) => new Date(item.date) <= endDate)
	}

	if (searchText) {
		result = result.filter((item) =>
			item.storeName.toLowerCase().includes(searchText.toLowerCase())
		)
	}

	return result
}

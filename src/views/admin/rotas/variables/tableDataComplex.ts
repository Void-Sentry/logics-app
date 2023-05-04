type RowObj = {
	name: string;
	status: string;
	date: string;
	progress: number;
};

// [
// 	{
// 		name: 'Test Content PRO',
// 		progress: 75.5,
// 		status: 'Approved',
// 		date: '12 Jan 2021'
// 	},
// 	{
// 		name: 'Test Content Free',
// 		progress: 25.5,
// 		status: 'Disable',
// 		date: '21 Feb 2021'
// 	},
// 	{
// 		name: 'Weekly Update',
// 		progress: 90,
// 		status: 'Error',
// 		date: '13 Mar 2021'
// 	},
// 	{
// 		name: 'Marketplace',
// 		progress: 50.5,
// 		status: 'Approved',
// 		date: '24 Oct 2022'
// 	}
// ];

const items = (): RowObj[] => {
	const data: RowObj[] = [{
		name: 'Test Content PRO',
		progress: 75.5,
		status: 'Approved',
		date: '12 Jan 2021'
	}];

	for (let i = 0; i < 100; i++)
		data.push(data[0]);
	
	return data;
};

const tableDataComplex: RowObj[] = items();

export default tableDataComplex;

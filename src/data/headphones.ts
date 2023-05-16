export interface IHeadphone {
	id: number;
	img: string;
	title: string;
	price: number;
	rate: number;
	wireless: boolean;
}

export const headphones: IHeadphone[] = [
	{
		id: 1432,
		img: '/src/assets/images/1.png',
		title: 'Apple BYZ S852I',
		price: 2927,
		rate: 4.7,
		wireless: false
	},
	{
		id: 5431,
		img: '/src/assets/images/2.png',
		title: 'Apple EarPods',
		price: 2327,
		rate: 4.5,
		wireless: false
	},
	{
		id: 3543,
		img: '/src/assets/images/3.png',
		title: 'HONOR Choice Earbuds',
		price: 1631,
		rate: 4.5,
		wireless: false
	},
	{
		id: 4456,
		img: '/src/assets/images/2.png',
		title: 'A3 PRO WHITE PODS',
		price: 1804,
		rate: 4.1,
		wireless: false
	},
	{
		id: 5143,
		img: '/src/assets/images/3.png',
		title: 'JBL Tune 650',
		price: 1999,
		rate: 4.3,
		wireless: false
	},
	{
		id: 8769,
		img: '/src/assets/images/2.png',
		title: 'QuietComfort 45',
		price: 1234,
		rate: 3.9,
		wireless: false
	},
	{
		id: 7543,
		img: '/src/assets/images/10.png',
		title: 'Apple AirPods',
		price: 9527,
		rate: 4.7,
		wireless: true
	},
	{
		id: 7890,
		img: '/src/assets/images/11.png',
		title: 'GERLAX GH-04',
		price: 6527,
		rate: 4.7,
		wireless: true
	},
	{
		id: 7711,
		img: '/src/assets/images/12.png',
		title: 'BOROFONE BO4',
		price: 7527,
		rate: 4.7,
		wireless: true
	}
];

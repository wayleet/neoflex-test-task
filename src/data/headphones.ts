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
		img: 'https://i.imgur.com/rjEWDLY.png',
		title: 'Apple BYZ S852I',
		price: 2927,
		rate: 4.7,
		wireless: false
	},
	{
		id: 5431,
		img: 'https://i.imgur.com/5f80MeC.png',
		title: 'Apple EarPods',
		price: 2327,
		rate: 4.5,
		wireless: false
	},
	{
		id: 3543,
		img: 'https://i.imgur.com/fAZcVnf.png',
		title: 'HONOR Choice Earbuds',
		price: 1631,
		rate: 4.5,
		wireless: false
	},
	{
		id: 4456,
		img: 'https://i.imgur.com/fAZcVnf.png',
		title: 'A3 PRO WHITE PODS',
		price: 1804,
		rate: 4.1,
		wireless: false
	},
	{
		id: 5143,
		img: 'https://i.imgur.com/rjEWDLY.png',
		title: 'JBL Tune 650',
		price: 1999,
		rate: 4.3,
		wireless: false
	},
	{
		id: 8769,
		img: 'https://i.imgur.com/bXSNxSo.png',
		title: 'QuietComfort 45',
		price: 1234,
		rate: 3.9,
		wireless: false
	},
	{
		id: 7543,
		img: 'https://i.imgur.com/3zXZdi5.png',
		title: 'Apple AirPods',
		price: 9527,
		rate: 4.7,
		wireless: true
	},
	{
		id: 7890,
		img: 'https://i.imgur.com/uMVK3Br.png',
		title: 'GERLAX GH-04',
		price: 6527,
		rate: 4.7,
		wireless: true
	},
	{
		id: 7711,
		img: 'https://i.imgur.com/ICGhgvT.png',
		title: 'BOROFONE BO4',
		price: 7527,
		rate: 4.7,
		wireless: true
	}
];

import { IHeadphone } from '../data/headphones';

export interface CartShop {
	headphone: IHeadphone;
	quantity: number;
	cost: number;
}

export interface CartState {
	list: CartShop[];
	totalAmount: number;
	grandTotalMoney: number;
}

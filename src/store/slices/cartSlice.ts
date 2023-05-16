import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IHeadphone } from '../../data/headphones';
import { CartShop, CartState } from '../../types';

const initialState: CartState = {
	list: [],
	totalAmount: 0,
	grandTotalMoney: 0
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<IHeadphone>) => {
			state.list.push({
				headphone: action.payload,
				quantity: 1,
				cost: action.payload.price
			});
			state.totalAmount += 1;
		},
		deleteItem: (state, action: PayloadAction<number>) => {
			state.list = state.list.filter(
				(item: CartShop) => item.headphone.id !== action.payload
			);
			state.totalAmount -= 1;
		},
		increaseQuantity: (state, action: PayloadAction<number>) => {
			state.list.map((el) => {
				if (el.headphone.id === action.payload) {
					el.quantity += 1;
					el.cost += el.headphone.price;
				}
			});
		},
		decreaseQuantity: (state, action: PayloadAction<number>) => {
			state.list.map((el) => {
				if (el.headphone.id === action.payload) {
					el.quantity -= 1;
					el.cost -= el.headphone.price;
				}
			});
		},
		calculateGrandTotalMoney: (state) => {
			state.grandTotalMoney = state.list.reduce(
				(sum, current) => sum + current.cost,
				0
			);
		}
	}
});

export const {
	addItem,
	deleteItem,
	increaseQuantity,
	decreaseQuantity,
	calculateGrandTotalMoney
} = cartSlice.actions;
export default cartSlice.reducer;

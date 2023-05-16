import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks';
import { calculateGrandTotalMoney } from '../store/slices/cartSlice';

const Invoice = () => {
	const { list } = useAppSelector((state) => state.rootReducer.cartReducer);
	const { grandTotalMoney } = useAppSelector(
		(state) => state.rootReducer.cartReducer
	);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(calculateGrandTotalMoney());
	}, [dispatch, list]);

	return (
		<Paper
			elevation={8}
			sx={{
				width: '350px',
				height: '120px',
				bgcolor: '#fff',
				borderRadius: '30px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between'
			}}
		>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					mx: '21px',
					mt: '1.5rem'
				}}
			>
				<Typography variant='h5'>ИТОГО</Typography>
				<Typography variant='h5'>₽ {grandTotalMoney}</Typography>
			</Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					bgcolor: '#000',
					weight: '349px',
					height: '65px',
					borderRadius: '30px'
				}}
			>
				<Typography
					variant='h5'
					sx={{
						color: '#fff',
						cursor: 'pointer'
					}}
				>
					Перейти к оформлению
				</Typography>
			</Box>
		</Paper>
	);
};

export default Invoice;

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Card from '../components/card';
import Invoice from '../components/invoice';
import { useAppSelector } from '../hooks';

const Cart = () => {
	const goods = useAppSelector((state) => state.rootReducer.cartReducer.list);
	return (
		<Container sx={{ maxWidth: '1110px', mt: '1.5rem', mb: '2rem' }}>
			<Typography variant='body1'>Корзина</Typography>
			<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					{goods.map((good) => {
						return (
							<Card
								key={good.headphone.id}
								id={good.headphone.id}
								img={good.headphone.img}
								title={good.headphone.title}
								price={good.headphone.price}
							/>
						);
					})}
				</Box>
				<Box sx={{ mt: '15px' }}>
					<Invoice />
				</Box>
			</Box>
		</Container>
	);
};

export default Cart;

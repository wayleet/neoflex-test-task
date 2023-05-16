import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { Paper } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { useAppDispatch, useAppSelector } from '../hooks';
import {
	decreaseQuantity,
	deleteItem,
	increaseQuantity
} from '../store/slices/cartSlice';

interface CardProps {
	img: string;
	title: string;
	price: number;
	id: number;
}
const Card: FC<CardProps> = ({ img, price, title, id }) => {
	const dispatch = useAppDispatch();
	const { list } = useAppSelector((state) => state.rootReducer.cartReducer);
	const elem = list.find((el) => el.headphone.id === id);

	return (
		<Paper
			elevation={8}
			sx={{
				width: '633px',
				height: '218px',
				borderRadius: '30px',
				my: '1rem'
			}}
		>
			<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<Box sx={{ display: 'flex' }}>
					<Box>
						<Box
							component='img'
							sx={{
								mt: '1rem',
								ml: '10px',
								height: '136px',
								width: '147px'
							}}
							src={img}
						/>
						<Box sx={{ display: 'flex', justifyContent: 'center' }}>
							<IconButton
								onClick={() => {
									dispatch(
										elem?.quantity === 1
											? deleteItem(id)
											: decreaseQuantity(id)
									);
								}}
							>
								<RemoveCircleIcon
									fontSize='large'
									sx={{ color: '#FFCE7F' }}
								/>
							</IconButton>

							<Typography sx={{ mx: '12px', mt: '10px' }}>
								{elem?.quantity}
							</Typography>
							<IconButton
								onClick={() => dispatch(increaseQuantity(id))}
							>
								<AddCircleIcon
									fontSize='large'
									sx={{ color: '#FFCE7F' }}
								/>
							</IconButton>
						</Box>
					</Box>

					<Box sx={{ mt: '5rem' }}>
						<Typography variant='h5'>{title}</Typography>
						<Typography
							variant='h5'
							color='#AAAAAA'
							sx={{ mt: '12px' }}
						>
							{price} ₽
						</Typography>
					</Box>
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
						mt: '18px',
						mr: '10px'
					}}
				>
					<IconButton>
						<DeleteForeverOutlinedIcon
							onClick={() => dispatch(deleteItem(id))}
							sx={{ color: '#DF6464' }}
						/>
					</IconButton>
					<Typography variant='h5' color='1C1C27' sx={{ mr: '10px' }}>
						{elem?.cost} ₽
					</Typography>
				</Box>
			</Box>
		</Paper>
	);
};

export default Card;

import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import StarRateIcon from '@mui/icons-material/StarRate';
import { Paper } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks';
import { addItem, deleteItem } from '../store/slices/cartSlice';
import { IHeadphone } from '../data/headphones';

interface CardProps {
	headphone: IHeadphone;
}
const MediaCard: FC<CardProps> = ({ headphone }) => {
	const { img, title, rate, price, id } = headphone;
	const { list } = useAppSelector((state) => state.rootReducer.cartReducer);
	const isFound = list.some((el) => el.headphone.id === id);
	const dispatch = useAppDispatch();
	return (
		<Paper
			elevation={8}
			sx={{
				width: '350px',
				height: '407px',
				borderRadius: '30px',
				mx: '15px',
				mb: '30px'
			}}
		>
			<Box
				component='img'
				sx={{
					height: '237px',
					width: '220px',
					mt: '2rem',
					mx: '4.2rem'
				}}
				src={img}
			/>
			<Box sx={{ mx: '1.3rem' }}>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						mt: '40px',
						mb: '20px'
					}}
				>
					<Typography variant='h5'>{title}</Typography>
					<Typography variant='h5' color='#FFA542'>
						{price} ₽
					</Typography>
				</Box>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between'
					}}
				>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row'
						}}
					>
						<StarRateIcon
							sx={{ color: '#FFCE7F', fontSize: '26px' }}
						/>
						<Typography
							variant='h5'
							color='#838383'
							sx={{ mt: '4px' }}
						>
							{rate}
						</Typography>
					</Box>
					<Typography
						onClick={() => {
							!isFound
								? dispatch(addItem(headphone))
								: dispatch(deleteItem(id));
						}}
						sx={{ cursor: 'pointer' }}
						variant='h5'
					>
						{!isFound ? 'Купить' : 'В корзине'}
					</Typography>
				</Box>
			</Box>
		</Paper>
	);
};

export default MediaCard;

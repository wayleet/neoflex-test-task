import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/material';

const Footer = () => {
	const navigate = useNavigate();
	return (
		<Container>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					width: '1110px',
					height: '149px',
					bgcolor: '#fff',
					borderRadius: '30px 30px 0px 0px',
					ml: '1rem',
					bottom: 0
				}}
			>
				<Box>
					<Typography
						variant='h6'
						component='div'
						sx={{
							flexGrow: 1,
							mt: '2rem',
							ml: '2rem',
							cursor: 'pointer'
						}}
						onClick={() => navigate('/')}
					>
						QPICK
					</Typography>
				</Box>

				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						mt: '2rem'
					}}
				>
					<Typography
						variant='body2'
						sx={{ mb: '5px', cursor: 'pointer' }}
					>
						Избранное
					</Typography>
					<Typography
						variant='body2'
						sx={{ my: '5px', cursor: 'pointer' }}
					>
						Корзина
					</Typography>
					<Typography
						variant='body2'
						sx={{ my: '2px', cursor: 'pointer' }}
					>
						Контакты
					</Typography>
				</Box>
				<Box sx={{ mt: '2rem' }}>
					<Typography variant='body2' sx={{ cursor: 'pointer' }}>
						Условия сервиса
					</Typography>
					<Box sx={{ display: 'flex', mt: '2rem', ml: '-8px' }}>
						<Box
							component='img'
							src='src/assets/social/RU.png'
							sx={{
								width: '20px',
								height: '20px',
								mx: '8px'
							}}
						/>
						<Typography
							sx={{
								fontSize: '15px',
								fontWeight: '600',
								mx: '8px',
								color: '#FFA542'
							}}
						>
							Рус
						</Typography>
						<Typography
							sx={{
								fontSize: '15px',
								fontWeight: '600',
								mx: '8px',
								color: '#000000'
							}}
						>
							Eng
						</Typography>
					</Box>
				</Box>
				<Box sx={{ mr: '2rem', mt: '2rem' }}>
					<Box
						component='img'
						src='src/assets/social/VK.png'
						sx={{ mx: '9px', mb: '6px', cursor: 'pointer' }}
					/>
					<Box
						component='img'
						src='src/assets/social/Telegram.png'
						sx={{ mx: '9px', cursor: 'pointer' }}
					/>
					<Box
						component='img'
						src='src/assets/social/Whatsapp.png'
						sx={{ mx: '9px', cursor: 'pointer' }}
					/>
				</Box>
			</Box>
		</Container>
	);
};

export default Footer;

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/material';
import { useAppSelector } from '../hooks';

const Header = () => {
	const navigate = useNavigate();
	const { totalAmount } = useAppSelector(
		(state) => state.rootReducer.cartReducer
	);
	return (
		<Container sx={{ maxWidth: '1135px' }}>
			<Box
				sx={{
					display: 'flex'
				}}
			>
				<Box
					sx={{
						flexGrow: 1
					}}
				>
					<AppBar position='static' elevation={0} color='transparent'>
						<Toolbar>
							<Typography
								variant='h6'
								component='div'
								sx={{
									flexGrow: 1,
									cursor: 'pointer'
								}}
								onClick={() => navigate('/')}
							>
								QPICK
							</Typography>
							<IconButton size='large' sx={{ mx: '1rem' }}>
								<Badge badgeContent={4} color='error'>
									<FavoriteBorderIcon />
								</Badge>
							</IconButton>
							<IconButton
								size='large'
								onClick={() => navigate('/cart')}
							>
								<Badge
									onClick={() => navigate('/cart')}
									badgeContent={totalAmount}
									color='error'
								>
									<ShoppingCartOutlinedIcon />
								</Badge>
							</IconButton>
						</Toolbar>
					</AppBar>
				</Box>
			</Box>
		</Container>
	);
};

export default Header;

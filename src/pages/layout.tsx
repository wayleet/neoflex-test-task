import React from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Header from '../components/header';
import Footer from '../components/footer';

const Layout = () => {
	return (
		<Box
			sx={{
				overflow: 'hidden',
				minHeight: '100%',
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				position: 'relative',
				bgcolor: '#EAEAEA',
				flex: '1 1 auto'
			}}
		>
			<Header />
			<Box
				sx={{
					flex: '1 1 auto'
				}}
			>
				<Outlet />
			</Box>
			<Footer />
		</Box>
	);
};

export default Layout;

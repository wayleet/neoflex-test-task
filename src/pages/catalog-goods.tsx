import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { headphones } from '../data/headphones';
import MediaCard from '../components/media-card';

const CatalogGoods = () => {
	return (
		<Container sx={{ mt: '1.5rem', mb: '2rem' }}>
			<Box>
				<Typography
					variant='body1'
					sx={{ mb: '20px', pl: '15px', color: '#838383' }}
				>
					Наушники
				</Typography>
				<Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
					{headphones.map((item) => {
						if (!item.wireless) {
							return <MediaCard key={item.id} headphone={item} />;
						}
						return null;
					})}
				</Box>
			</Box>
			<Box>
				<Typography
					variant='body1'
					sx={{ mb: '20px', pl: '15px', color: '#838383' }}
				>
					Беспроводные наушники
				</Typography>
				<Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
					{headphones.map((item) => {
						if (item.wireless) {
							return <MediaCard key={item.id} headphone={item} />;
						}
						return null;
					})}
				</Box>
			</Box>
		</Container>
	);
};

export default CatalogGoods;

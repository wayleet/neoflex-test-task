import { createTheme } from '@mui/material';

export const theme = createTheme({
	palette: {
		error: {
			main: '#FFA542',
			light: '#EAEAEA',
			contrastText: '#fff'
		}
	},
	typography: {
		fontFamily: 'Montserrat',
		h6: {
			fontWeight: 700,
			fontSize: '25px'
		},
		h5: {
			fontWeight: 600,
			fontSize: '17px'
		},
		body1: {
			fontWeight: 600,
			fontSize: '20px'
		},
		body2: {
			fontWeight: 400,
			fontSize: '17px'
		}
	}
});

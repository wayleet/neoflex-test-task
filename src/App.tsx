import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/layout';
import CatalogGoods from './pages/catalog-goods';
import Cart from './pages/cart';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<CatalogGoods />} />
				<Route path='cart' element={<Cart />} />
				<Route path='*' element={<CatalogGoods />} />
			</Route>
		</Routes>
	);
};

export default App;

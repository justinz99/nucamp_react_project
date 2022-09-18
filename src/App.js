import './App.css';
import { Route, Routes } from 'react-router-dom'
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCampsites } from './features/campsites/campsitesSlice';
import { fetchPartners } from './features/partners/partnersSlice';
import { fetchPromotions } from './features/promotions/promotionsSlice';
import { fetchComments } from './features/comments/CommentsSlice';
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './app/pages/HomePage'
import AboutPage from './app/pages/AboutPage'
import ContactPage from './app/pages/ContactPage'
import CampsitesDirectoryPage from './app/pages/CampsitesDirectoryPage'
import CampsiteDetailPage from './app/pages/CampsiteDetailPage';

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
        dispatch(fetchCampsites())
		dispatch(fetchPartners())
		dispatch(fetchPromotions())
		dispatch(fetchComments())
    }, [dispatch])

	return (
    	<div className="App">
			<Header /> 
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='about' element={<AboutPage/>} />
				<Route path='contact' element={<ContactPage />} />
				<Route path='directory' element={<CampsitesDirectoryPage/>} />
				<Route 
					path='directory/:campsiteId'
					element={<CampsiteDetailPage />} 
				/>
			</Routes>
			<Footer />
    	</div>
  	);
}

export default App;

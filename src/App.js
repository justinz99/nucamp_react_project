import './App.css';
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './app/pages/HomePage'
import AboutPage from './app/pages/AboutPage'
import ContactPage from './app/pages/ContactPage'
import CampsitesDirectoryPage from './app/pages/CampsitesDirectoryPage'
import CampsiteDetailPage from './app/pages/CampsiteDetailPage';

function App() {
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

import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import CampsitesDirectoryPage from './app/pages/CampsitesDirectoryPage';

function App() {
	return (
    	<div className="App">
			<Header />
			<CampsitesDirectoryPage/>
			<Footer />
    	</div>
  	);
}

export default App;

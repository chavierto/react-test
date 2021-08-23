import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import KanyeDaily from './KanyeDaily';

function App() {
	const [kanyeQuote, setKanyeQuote] = useState([]);

	useEffect(() => {
		async function getQuote() {
			const quote = await axios
				.get(`https://api.kanye.rest/`)
				.catch((err) => console.log(err));
			setKanyeQuote(quote);
		}
		getQuote();
	}, []);

	return (
		<div className='App'>
			<h1>React Test</h1>
			<KanyeDaily kanyeQuote={kanyeQuote} />
		</div>
	);
}

export default App;

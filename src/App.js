import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import KanyeDaily from './KanyeDaily';
import PokemonList from './PokemonList';

function App() {
	const [kanyeQuote, setKanyeQuote] = useState({});
	const [pokemons, setPokemons] = useState([]);

	useEffect(() => {
		async function getQuote() {
			const quote = await axios
				.get(`https://api.kanye.rest/`)
				.catch((err) => console.log(err));
			setKanyeQuote(quote.data.quote);
		}
		getQuote();
	}, []);

	useEffect(() => {
		async function getPokemons() {
			const pokemons = await axios
				.get(`https://pokeapi.co/api/v2/pokemon/`)
				.catch((err) => console.log(err));
			setPokemons(pokemons.data.results);
		}

		getPokemons();
	}, []);

	return (
		<div className='App'>
			<h1>React Test</h1>
			<KanyeDaily kanyeQuote={kanyeQuote} />
			<PokemonList pokemons={pokemons} />
		</div>
	);
}

export default App;

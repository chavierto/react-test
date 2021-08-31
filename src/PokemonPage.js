import React from 'react';
import './App.css';

function PokemonPage(props) {
	const pokemon = props.chosenPokemon;
	const pokemonNumber = pokemon.url.slice(34, -1);
	const imageLink =
		'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

	return (
		<div>
			<h1>{`${pokemon.name}`}</h1>
			<img
				className='pokeImage'
				src={`${imageLink}${pokemonNumber}.png`}
				alt=''
			/>
		</div>
	);
}

export default PokemonPage;

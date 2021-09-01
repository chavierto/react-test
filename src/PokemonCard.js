import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function PokemonCard(props) {
	const pokemon = props.pokemon;
	const i = props.i;
	const setChosenPokemon = props.setChosenPokemon;
	const imageLink =
		'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

	return (
		<div
			className='pokeCard'
			key={pokemon.name}
			onClick={(e) => setChosenPokemon(pokemon)}>
			<Link to='/:pokemon.name'>
				<img className='pokeThumb' src={`${imageLink}${i + 1}.png`} alt='' />
			</Link>

			<div>{`${pokemon.name}`}</div>
		</div>
	);
}

export default PokemonCard;

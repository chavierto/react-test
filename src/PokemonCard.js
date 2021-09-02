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
			key={i}
			onClick={(e) => setChosenPokemon(pokemon)}>
			<Link className='link' to='/:pokemon.name'>
				<img className='pokeThumb' src={`${imageLink}${i + 1}.png`} alt='' />
				<div className='cardTitle'>{`${pokemon.name}`}</div>
			</Link>
		</div>
	);
}

export default PokemonCard;

import React from 'react';
import './App.css';
import PokemonCard from './PokemonCard';

function PokemonList(props) {
	const setChosenPokemon = props.setChosenPokemon;
	const pokemons = props.pokemons;

	return (
		<div>
			<h3>Pokemons</h3>
			<div className='pokeGrid'>
				{pokemons &&
					pokemons.map((pokemon, i) => {
						return (
							<PokemonCard
								key={i}
								pokemon={pokemon}
								i={i}
								setChosenPokemon={setChosenPokemon}
							/>
						);
					})}
			</div>
		</div>
	);
}

export default PokemonList;

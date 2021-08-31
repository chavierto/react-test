import React from 'react';
import './App.css';

function PokemonList(props) {
	const setChosenPokemon = props.setChosenPokemon;
	const pokemons = props.pokemons;
	const imageLink =
		'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';
	const handleSubmit = (event) => {
		event.preventDefault();
		setChosenPokemon();
	};

	return (
		<div>
			<h3>Pokemons</h3>
			<div className='pokeGrid'>
				{pokemons &&
					pokemons.map((pokemon, i) => {
						return (
							<div
								className='pokeCard'
								key={pokemon.name}
								onClick={(e) => setChosenPokemon(pokemon.url)}>
								<img
									className='pokeImage'
									src={`${imageLink}${i + 1}.png`}
									alt=''
								/>

								<div>{`${pokemon.name}`}</div>
							</div>
						);
					})}
			</div>
		</div>
	);
}

export default PokemonList;

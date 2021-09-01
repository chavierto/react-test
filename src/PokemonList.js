import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function PokemonList(props) {
	const setChosenPokemon = props.setChosenPokemon;
	const pokemons = props.pokemons;
	const imageLink =
		'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

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
								onClick={(e) => setChosenPokemon(pokemon)}>
								<Link to='/:chosenPokemon.name'>
									<img
										className='pokeThumb'
										src={`${imageLink}${i + 1}.png`}
										alt=''
									/>
								</Link>

								<div>{`${pokemon.name}`}</div>
							</div>
						);
					})}
			</div>
		</div>
	);
}

export default PokemonList;

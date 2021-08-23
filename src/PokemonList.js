import React from 'react';
import './App.css';

function PokemonList(props) {
	const pokemons = props.pokemons;
	const imageLink =
		'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

	return (
		<div>
			<h3>Pokemons</h3>
			<div>
				{pokemons &&
					pokemons.map((pokemon, i) => {
						return (
							<div key={pokemon.name}>
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

import React from 'react';

function PokemonList(props) {
	const pokemons = props.pokemons;

	return (
		<div>
			<h3>Pokemons</h3>
			<div>
				{pokemons &&
					pokemons.map((pokemon, i) => {
						return (
							<div>
								<div>
									<img
										src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i+1}.png`}
										alt=''
									/>
								</div>
								<div key={pokemon.name}>{`${pokemon.name}`}</div>
							</div>
						);
					})}
			</div>
		</div>
	);
}

export default PokemonList;

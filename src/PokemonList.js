import React from 'react';

function PokemonList(props) {
	const pokemons = props.pokemons;

	return (
		<div>
			<h3>Pokemons</h3>
			<div>
				{pokemons &&
					pokemons.map((pokemon) => {
						return <div key={pokemon.name}>{`${pokemon.name}`}</div>;
					})}
			</div>
		</div>
	);
}

export default PokemonList;

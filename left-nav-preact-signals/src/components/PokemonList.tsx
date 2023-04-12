// @ts-ignore
import React, { useState, useEffect } from 'react';
import '../index.css';
import  Pokemon  from '../types/Pokemon';

const PokemonList: React.FC = () => {
    const [pokemon, setPokemon] = useState<Pokemon[] | null>(null);

    useEffect(() => {
        fetchPokemon();
    }, []);

    const fetchPokemon = async () => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
            const data = await response.json();
            const fetchedPokemon: Pokemon[] = data.results.map((p: any, index: number) => ({
                id: index + 1,
                name: p.name,
                sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
            }));
            setPokemon(fetchedPokemon);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="pokemon-list">
            {pokemon ? (
                pokemon.map((p: Pokemon) => (
                    <div key={p.id} className="pokemon-item">
                        <img src={p.sprite} alt={p.name} className="pokemon-img" />
                        <div className="pokemon-name">{p.name}</div>
                    </div>
                ))
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default PokemonList;

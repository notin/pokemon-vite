// @ts-ignore
import React from 'react';

// @ts-ignore
import {experimental_use as use, Suspense, useState, useEffect} from "react";
import '../index.css';
import Pokemon from '../types/Pokemon';
import useCachedFetch from "../hooks/useCachedFetch";

const PokemonList: React.FC = async () => {
        // const [pokemon, setPokemon] = useState<Pokemon[] | null>(null);
        //
        // useEffect(() => {
        //     fetchPokemon();
        // }, []);
        //
        // // @ts-ignore
        // const fetchPokemon = async () => {
        //     try {
        //         const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
        //         const data = await response.json();
        //         const fetchedPokemon: Pokemon[] = data.results.map((p: any, index: number) => ({
        //             id: index + 1,
        //             name: p.name,
        //             sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
        //         }));
        //         setPokemon(fetchedPokemon);
        //     } catch (error) {
        //         console.error(error);
        //     }
        // };

        let pokemon = await useCachedFetch('https://pokeapi.co/api/v2/pokemon?limit=10');

        return (
            <div className="pokemon-list">
                {pokemon ? (
                    pokemon.map((p: Pokemon) => (
                        <div key={p.id} className="pokemon-item">
                            <img src={p.sprite} alt={p.name} className="pokemon-img"/>
                            <div className="pokemon-name">{p.name}</div>
                        </div>
                    ))
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        );
    }
;

export default PokemonList;

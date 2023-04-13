// @ts-ignore
import React from 'react';

// @ts-ignore
import {experimental_use as use, Suspense, useState, useEffect} from "react";
import '../index.css';
import Pokemon from '../types/Pokemon';
import useCachedFetch from "../hooks/useCachedFetch";

const PokemonList = () => {

        const fetchPokemon = (data) => {
            try {
                const fetchedPokemon: Pokemon[] = data.results.map((p: any, index: number) => ({
                    id: index + 1,
                    name: p.name,
                    sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
                }));
                return fetchedPokemon;
            } catch (error) {
                console.error(error);
            }
        };

        let key = 'https://pokeapi.co/api/v2/pokemon?limit=10';
        let pokemon =  use(useCachedFetch(key, fetchPokemon));

        function getPokemonItem(p: Pokemon) {
            let pokemon = <div key={p.id} className="pokemon-item">
                <img src={p.sprite} alt={p.name} className="pokemon-img"/>
                <div className="pokemon-name">{p.name}</div>
            </div>;
            console.log(p);
            return pokemon;
        }

        function getPokemonList() {
            return (
                <div className="pokemon-list">
                    {pokemon ? (
                        pokemon.map((p: Pokemon) => getPokemonItem(p))
                    ) : (
                        <div>Loading...</div>
                    )}
                </div>
            );
        }

        return getPokemonList();
    }
;

export default PokemonList;

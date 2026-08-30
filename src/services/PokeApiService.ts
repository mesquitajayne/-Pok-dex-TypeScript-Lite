import { PokemonApiResponse, PokemonResumo } from "../models/Pokemon.js";

export class PokeApiService {
    async buscarPokemon(nomeOuId: string): Promise<PokemonResumo | null> {
    try {
    const url = `https://pokeapi.co/api/v2/pokemon/${nomeOuId}`;

    const resposta = await fetch(url);

    if (!resposta.ok) {
        throw new Error(`Pokémon não encontrado: ${nomeOuId}`);
    }

    const dados: PokemonApiResponse = await resposta.json();

    const pokemon: PokemonResumo = {
    id: dados.id,
    nome: dados.name,
    tipos: dados.types.map((item) => item.type.name),
    altura: dados.height,
    peso: dados.weight
};

return pokemon;
    
} catch (erro) {
    console.log(`[ERRO] Não foi possível buscar o Pokémon: ${nomeOuId}`);
    return null;
}
    }
}
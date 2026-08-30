import { readFile, writeFile } from "node:fs/promises";
import { PokemonResumo } from "../models/Pokemon.js";

export class BoxService {
    private caminhoArquivo = "./pc_box.json";

    async listar(): Promise<PokemonResumo[]> {
        try {
            const conteudo = await readFile(this.caminhoArquivo, "utf-8");

            return JSON.parse(conteudo) as PokemonResumo[];
        } catch (erro) {
            console.log("[ERRO] Não foi possível ler o catálogo.");
            return [];
        }
    }

    async salvar(pokemons: PokemonResumo[]): Promise<void> {
        try {
            await writeFile(
                this.caminhoArquivo,
                JSON.stringify(pokemons, null, 2),
                "utf-8"
            );
        } catch (erro) {
            console.log("[ERRO] Não foi possível salvar o catálogo.");
        }
    }
}
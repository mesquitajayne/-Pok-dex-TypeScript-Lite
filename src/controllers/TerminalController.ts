import { PokeApiService } from "../services/PokeApiService.js";
import { CatalogoPokemon } from "../models/CatalogoPokemon.js";

export class TerminalController {
    constructor(
        private api: PokeApiService,
        private catalogo: CatalogoPokemon
    ) {}

    async executar(): Promise<void> {
        const pikachu = await this.api.buscarPokemon("pikachu");

        if (pikachu !== null) {
            this.catalogo.adicionar(pikachu);
        }

        const charmander = await this.api.buscarPokemon("charmander");

        if (charmander !== null) {
            this.catalogo.adicionar(charmander);
        }

        const pikachuDuplicado = await this.api.buscarPokemon("pikachu");

        if (pikachuDuplicado !== null) {
            this.catalogo.adicionar(pikachuDuplicado);
        }

        await this.api.buscarPokemon("pokemon-inexistente");

        this.catalogo.listar();

        this.catalogo.remover(25);

        this.catalogo.listar();
    }
}
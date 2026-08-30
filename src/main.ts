import { PokeApiService } from "./services/PokeApiService.js";
import { CatalogoPokemon } from "./models/CatalogoPokemon.js";
import { TerminalController } from "./controllers/TerminalController.js";

async function main() {
    const api = new PokeApiService();
    const catalogo = new CatalogoPokemon();

    const controller = new TerminalController(api, catalogo);

    await controller.executar();
}

main();
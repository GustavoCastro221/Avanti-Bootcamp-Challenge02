import { Router } from "express";
import { FindAllPlayersController } from "./controllers/FindAllPlayersController";
import { FindOnePlayerController } from "./controllers/FindOnePlayerController";
import { CreatePlayerController } from "./controllers/CreatePlayerController";
import { UpdatePlayerController } from "./controllers/UpdatePlayerController";
import { DeletePlayerController } from "./controllers/DeletePlayerController";
import { CreateTeamController } from "./controllers/CreateTeamController";

const router = Router();
const findAllPlayers = new FindAllPlayersController();
const findOnePlayer = new FindOnePlayerController();
const createPlayer = new CreatePlayerController();
const updatePlayer = new UpdatePlayerController();
const deletePlayer = new DeletePlayerController();
const createTeam = new CreateTeamController();

// Rotas de Jogadores
router.get("/players", findAllPlayers.handle)
router.get("/player/:id", findOnePlayer.handle)
router.post("/player", createPlayer.handle)
router.put("/player/:id", updatePlayer.handle)
router.delete("/player/:id", deletePlayer.handle)

//Rotas de Times
router.post("/team", createTeam.handle)

//Rotas de Campeonatos

// Rotas de associação (tabela _ChampionshipToTeam A é id do campeonato, B é id do Time)
export { router };
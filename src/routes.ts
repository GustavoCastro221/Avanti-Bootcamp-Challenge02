import { Router } from "express";
import { CreatePlayerController } from "./controllers/CreatePlayerController";
import { CreateTeamController } from "./controllers/CreateTeamController";
const router = Router();
const createPlayer = new CreatePlayerController();
const createTeam = new CreateTeamController();

// Rotas de Jogadores
//router.get("/players", findAllPlayers.handle)
//router.get("/player/:id", findOnePlayer.handle)
router.post("/player", createPlayer.handle)
//router.put("/player/:id", updatePlayer.handle)
//router.delete("/player/:id", deletePlayer.handle)

//Rotas de Times
router.post("/team", createTeam.handle)

//Rotas de Campeonatos

// Rotas de associação (tabela _ChampionshipToTeam A é id do campeonato, B é id do Time)
export { router };
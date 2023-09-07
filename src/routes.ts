import { Router } from "express";
import { FindAllPlayersController } from "./controllers/FindAllPlayersController";
import { FindOnePlayerController } from "./controllers/FindOnePlayerController";
import { CreatePlayerController } from "./controllers/CreatePlayerController";
import { UpdatePlayerController } from "./controllers/UpdatePlayerController";
import { DeletePlayerController } from "./controllers/DeletePlayerController";
import { CreateTeamController } from "./controllers/CreateTeamController";
import { DeleteTeamController } from "./controllers/DeleteTeamController"
import { FindAllTeamsController } from "./controllers/FindAllTeamController";
import { FindOneTeamController } from "./controllers/FindOneTeamController";
import { UpdateTeamController } from "./controllers/UpdateTeamController";
import { CreateChampionshipController } from "./controllers/CreateChampionshipControlller";
import { DeleteChampionshipController } from "./controllers/DeleteChampionshipController";
import { FindAllChampioshipController } from "./controllers/FindAllChampionshipController";
import { FindOneChampionshipController } from "./controllers/FindOneChampionshipController";
import { UpdateChampionshipController } from "./controllers/UpdateChampionshipController";


const router = Router();
const findAllPlayers = new FindAllPlayersController();
const findOnePlayer = new FindOnePlayerController();
const createPlayer = new CreatePlayerController();
const updatePlayer = new UpdatePlayerController();
const deletePlayer = new DeletePlayerController();
const createTeam = new CreateTeamController();
const deleteTeam = new DeleteTeamController();
const findAllTeam = new FindAllTeamsController();
const findOneTeam = new FindOneTeamController();
const updateTeam = new UpdateTeamController();
const createChampionship = new CreateChampionshipController();
const deleteChampionship = new DeleteChampionshipController();
const findAllChampionships = new FindAllChampioshipController();
const findOneChampionship = new FindOneChampionshipController();
const updateChampionship = new UpdateChampionshipController();

// Rotas de Jogadores
router.get("/players" , findAllPlayers.handle)
router.get("/player/:id", findOnePlayer.handle)
router.post("/player", createPlayer.handle)
router.put("/player/:id", updatePlayer.handle)
router.delete("/player/:id", deletePlayer.handle)

//Rotas de Times
router.post("/team", createTeam.handle)
router.delete("/team", deleteTeam.handle)
router.get("/teams", findAllTeam.handle)
router.get("/team/:id", findOneTeam.handle)
router.put("/team/:id", updateTeam.handle)
//Rotas de Campeonatos
router.post("/championship", createChampionship.handle)
router.delete("/championship", deleteChampionship.handle)
router.get("/championships", findAllChampionships.handle)
router.get("/championship/:id", findOneChampionship.handle)
router.put("/championship/:id", updateChampionship.handle)
// Rotas de associação (tabela _ChampionshipToTeam A é id do campeonato, B é id do Time)
export { router };
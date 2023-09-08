import { Router } from "express";
import { FindAllPlayersController } from "./controllers/playerControllers/FindAllPlayersController";
import { FindOnePlayerController } from "./controllers/playerControllers/FindOnePlayerController";
import { CreatePlayerController } from "./controllers/playerControllers/CreatePlayerController";
import { UpdatePlayerController } from "./controllers/playerControllers/UpdatePlayerController";
import { DeletePlayerController } from "./controllers/playerControllers/DeletePlayerController";
import { CreateTeamController } from "./controllers/teamControllers/CreateTeamController";
import { DeleteTeamController } from "./controllers/teamControllers/DeleteTeamController"
import { FindAllTeamsController } from "./controllers/teamControllers/FindAllTeamController";
import { FindOneTeamController } from "./controllers/teamControllers/FindOneTeamController";
import { UpdateTeamController } from "./controllers/teamControllers/UpdateTeamController";
import { CreateChampionshipController } from "./controllers/championshipControllers/CreateChampionshipControlller";
import { DeleteChampionshipController } from "./controllers/championshipControllers/DeleteChampionshipController";
import { FindAllChampioshipController } from "./controllers/championshipControllers/FindAllChampionshipController";
import { FindOneChampionshipController } from "./controllers/championshipControllers/FindOneChampionshipController";
import { UpdateChampionshipController } from "./controllers/championshipControllers/UpdateChampionshipController";


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
router.delete("/team/:id", deleteTeam.handle)
router.get("/teams", findAllTeam.handle)
router.get("/team/:id", findOneTeam.handle)
router.put("/team/:id", updateTeam.handle)

//Rotas de Campeonatos
router.post("/championship", createChampionship.handle)
router.delete("/championship/:id", deleteChampionship.handle)
router.get("/championships", findAllChampionships.handle)
router.get("/championship/:id", findOneChampionship.handle)
router.put("/championship/:id", updateChampionship.handle)

export { router };
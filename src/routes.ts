import { Router } from "express";
import { CreatePlayerController } from "./controllers/CreatePlayerController";
import { CreateTeamController } from "./controllers/CreateTeamController";
const router = Router();
const createPlayer = new CreatePlayerController();
const createTeam = new CreateTeamController();

router.post("/player", createPlayer.handle)
router.post("/team", createTeam.handle)

export { router };
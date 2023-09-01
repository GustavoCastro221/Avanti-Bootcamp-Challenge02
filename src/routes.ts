import { Router } from "express";
import { CreatePlayerController } from "./controllers/CreatePlayerController";

const router = Router();
const createPlayer = new CreatePlayerController();

router.post("/player", createPlayer.handle)

export { router };
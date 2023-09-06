import {Request, Response} from 'express'
import {prismaClient} from "../database/prismaClient"

export class CreatePlayerController{
    async handle(req: Request, res: Response){
        try {
            const {playerName, playerNumber, associatedTeamId } = req.body;

            const player = await prismaClient.player.create({
            data:{
                playerName,
                playerNumber,
                associatedTeamId
            },
        });
            return res.status(201).json(player);
        } catch (error) {
            return res.status(500).json({error: 'An error ocurred when creating player'})
        }
        

    }
}
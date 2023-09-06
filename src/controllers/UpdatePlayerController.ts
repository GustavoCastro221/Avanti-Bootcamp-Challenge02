import {Request, Response} from 'express'
import {prismaClient} from "../database/prismaClient"

export class UpdatePlayerController{
    async handle(req: Request, res: Response){
        const { id } = req.params;
        const {playerName, playerNumber} = req.body;
        try { 
            const player = await prismaClient.player.update({
                where:{ id :id },
                data:{
                    playerName,
                    playerNumber
                }
        });
            return res.status(200).json(player);
        } catch (error) {
            return res.status(500).json({error: 'An error ocurred when updating a player'})
        }
        

    }
}
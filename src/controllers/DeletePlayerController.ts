import {Request, Response} from 'express'
import {prismaClient} from "../database/prismaClient"

export class DeletePlayerController{
    async handle(req: Request, res: Response){
        const { id } = req.params;
        try {
            
            const player = await prismaClient.player.delete({
                where:{
                    id,
                }
        });
            return res.status(200).json(player);
        } catch (error) {
            return res.status(500).json({error: 'An error ocurred when deleting a player'})
        }
        

    }
}
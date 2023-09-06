import {Request, Response} from 'express'
import {prismaClient} from "../database/prismaClient"

export class FindOnePlayerController{
    async handle(req: Request, res: Response){
        try {
            const { id } = req.params;
            const player = await prismaClient.player.findFirstOrThrow({
                where:{
                    id,
                }
        });
            return res.status(200).json(player);
        } catch (error) {
            return res.status(500).json({error: 'An error ocurred when retriving a player'})
        }
        

    }
}
import {Request, Response} from 'express'
import {prismaClient} from "../database/prismaClient"

export class FindAllPlayersController{
    async handle(req: Request, res: Response){
        try {
            const players = await prismaClient.player.findMany({});
            return res.status(200).json(players);
        } catch (error) {
            return res.status(500).json({error: 'An error ocurred when retriving all players'})
        }
        

    }
}
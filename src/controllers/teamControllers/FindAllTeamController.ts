import {Request, Response} from 'express'
import {prismaClient} from "../../database/prismaClient"

export class FindAllTeamsController{
    async handle(req: Request, res: Response){
        try {
            const teams = await prismaClient.team.findMany({});
            return res.status(200).json(teams);
        } catch (error) {
            return res.status(500).json({error: 'An error ocurred when retriving all teams'})
        }
    }
}
import {Request, Response} from 'express'
import {prismaClient} from "../database/prismaClient"

export class CreateChampionshipController{
    async handle(req: Request, res: Response){
        try {
            const {championshipName, startingDate, endDate, competingTeams } = req.body;

            const Championship = await prismaClient.championship.create({
            data:{
                championshipName,
                startingDate,
                endDate,
                competingTeams
            },
        });
            return res.status(201).json(Championship);
        } catch (error) {
            return res.status(500).json({error: 'An error ocurred when creating championship'})
        }
        

    }
}
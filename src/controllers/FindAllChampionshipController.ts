import {Request, Response} from 'express'
import {prismaClient} from "../database/prismaClient"

export class FindAllChampioshipController{
    async handle(req: Request, res: Response){
        try {
            const championships = await prismaClient.championship.findMany({});
            return res.status(200).json(championships);
        } catch (error) {
            return res.status(500).json({error: 'An error ocurred when retriving all championships'})
        }
        

    }
}
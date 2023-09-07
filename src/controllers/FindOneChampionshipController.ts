import {Request, Response} from 'express'
import {prismaClient} from "../database/prismaClient"

export class FindOneChampionshipController{
    async handle(req: Request, res: Response){
        try {
            const { id } = req.params;
            const championship = await prismaClient.championship.findFirstOrThrow({
                where:{
                    id,
                }
        });
            return res.status(200).json(championship);
        } catch (error) {
            return res.status(500).json({error: 'An error ocurred when retriving a championship'})
        }
        

    }
}
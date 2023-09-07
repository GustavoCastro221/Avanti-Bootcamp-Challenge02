import {Request, Response} from 'express'
import {prismaClient} from "../database/prismaClient"

export class UpdateChampionshipController{
    async handle(req: Request, res: Response){
        const { id } = req.params;
        const {championshipName, startingDate, endDate} = req.body;
        try { 
            const championship = await prismaClient.championship.update({
                where:{ id :id },
                data:{
                    championshipName,
                    startingDate,
                    endDate,
                },
        });
            return res.status(200).json(championship);
        } catch (error) {
            return res.status(500).json({error: 'An error ocurred when updating a championship'})
        }
        

    }
}
import {Request, Response} from 'express'
import {prismaClient} from "../database/prismaClient"

export class DeleteChampionshipController{
    async handle(req: Request, res: Response){
        const { id } = req.params;
        try {
            
            const championship = await prismaClient.championship.delete({
                where:{
                    id,
                }
        });
            return res.status(200).json(championship);
        } catch (error) {
            return res.status(500).json({error: 'An error ocurred when deleting a championship'})
        }
        

    }
}
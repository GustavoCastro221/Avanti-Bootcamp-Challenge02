import {Request, Response} from 'express'
import {prismaClient} from "../database/prismaClient"

export class DeleteTeamController{
    async handle(req: Request, res: Response){
        const { id } = req.params;
        try {
            
            const team = await prismaClient.team.delete({
                where:{
                    id,
                }
        });
            return res.status(200).json(team);
        } catch (error) {
            return res.status(500).json({error: 'An error ocurred when deleting a team'})
        }
        

    }
}
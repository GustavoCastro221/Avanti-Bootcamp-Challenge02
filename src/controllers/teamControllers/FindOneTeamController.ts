import {Request, Response} from 'express'
import {prismaClient} from "../../database/prismaClient"

export class FindOneTeamController{
    async handle(req: Request, res: Response){
        try {
            const { id } = req.params;
            const team = await prismaClient.team.findFirstOrThrow({
                where:{
                    id,
                }
        });
            return res.status(200).json(team);
        } catch (error) {
            return res.status(500).json({error: 'An error ocurred when retriving a team'})
        }
    }
}
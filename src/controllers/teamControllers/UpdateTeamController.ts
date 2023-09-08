import {Request, Response} from 'express'
import {prismaClient} from "../../database/prismaClient"

export class UpdateTeamController{
    async handle(req: Request, res: Response){
        const { id } = req.params;
        const {teamName, teamFounded} = req.body;
        try { 
            const team = await prismaClient.team.update({
                where:{ id :id },
                data:{
                    teamName,
                    teamFounded
                },
        });
            return res.status(200).json(team);
        } catch (error) {
            return res.status(500).json({error: 'An error ocurred when updating a team'})
        }
    }
}
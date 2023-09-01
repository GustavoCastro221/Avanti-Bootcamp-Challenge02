import {Request, Response} from 'express'
import {prismaClient} from "../database/prismaClient"

export class CreateTeamController{
    async handle(req: Request, res: Response){
        try {
            const {teamName, teamFounded} = req.body;

            const team = await prismaClient.team.create({
            data:{
                teamName,
                teamFounded
            },
        });
            return res.status(201).json(team);
        } catch (error) {
            return res.status(500).json({error: 'An error ocurred when creating team'})
        }
        

    }
}
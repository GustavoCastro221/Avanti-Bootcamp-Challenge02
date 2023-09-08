import {Request, Response} from 'express'
import {prismaClient} from "../../database/prismaClient"

export class UpdateChampionshipController{
    async handle(req: Request, res: Response){
        const { id } = req.params;
        const {championshipName, startingDate, endDate, teamIds} = req.body;
        try { 
            const championship = await prismaClient.championship.update({
                where:{ id :id },
                data:{
                    championshipName,
                    startingDate,
                    endDate,
                    competingTeams: {
                        set: teamIds.map((id: string) => ({ id })),
                    },
                },
                include: { competingTeams: true },
        });
            return res.status(200).json(championship);
        } catch (error) {
            return res.status(500).json({error: 'An error ocurred when updating a championship'})
        }
    }
}
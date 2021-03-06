import { Request, Response } from "express";
import DeleteTechnologyCommand  from "../../../application/commands/technology/delete.technology.command";
import DeleteTechnologyHandler from "../../../application/handlers/technology/delete.technology.handler";

class DeleteTechnologyAction {
    async run(req: Request, res: Response) {
        const command: DeleteTechnologyCommand = new DeleteTechnologyCommand(req.params.id);

        try {
            await DeleteTechnologyHandler.execute(command);
            return res.status(201).json({message: "Technology deleted"});
        } catch (error) {
            // @ts-ignore
            return res.status(404).json({message: error.message});
        }

        //return res.status(204).send();
    }
}

export default new DeleteTechnologyAction();
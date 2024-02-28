import { Request, Response } from "express";
import { DeleteAllPostUseCase } from "../../application/deleteAllPostUseCase";

export class deleteAllPostController {
  constructor(readonly deleteAllPostUseCase: DeleteAllPostUseCase) {}

  async run(req: Request, res: Response) {
    try {
      await this.deleteAllPostUseCase.run();
      res.status(200).json({ message: "All posts deleted" });
      console.log("All posts deleted");
    } catch (error: any) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  }
}

import { Request, Response } from "express";
import { DeleteByIdPostUseCase } from "../../application/deleteByIdPostUseCase";

export class deleteByIdPostController {
  constructor(readonly deleteByIdPostUseCase: DeleteByIdPostUseCase) {}

  async run(req: Request, res: Response) {
    try {
      await this.deleteByIdPostUseCase.run(Number(req.params.id));
      res.status(200).json({ message: "Post deleted" });
      console.log("Post deleted");
    } catch (error: any) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  }
}

import cors from "cors";
import express, { Express, NextFunction, Request, Response } from "express";
import { SampleRouter } from "./routes/sample.router";
import { PORT } from "./config";

export default class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.configure();
    this.routes();
    this.handleError();
  }

  private configure() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private routes() {
    const sampleRouter = new SampleRouter();

    this.app.use("/samples", sampleRouter.getRouter());
  }

  private handleError() {
    this.app.use(
      (
        error: Error,
        request: Request,
        response: Response,
        next: NextFunction
      ) => {
        response.status(400).send(error.message);
      }
    );
  }

  public start() {
    this.app.listen(PORT, () => {
      console.log(`server runnning on PORT : ${PORT}`);
    });
  }
}

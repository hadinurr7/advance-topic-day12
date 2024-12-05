import { Router } from "express";
import { SampleController } from "../controllers/sample.controller";
import { validateCreateSample } from "../validators/sample.validator";
import { uploader } from "../lib/multer";

export class SampleRouter {
  private SampleController: SampleController;
  private router: Router;

  constructor() {
    this.SampleController = new SampleController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", this.SampleController.getSampleData);
    this.router.post(
    "/",
    uploader().single("image"),
    validateCreateSample, 
    this.SampleController.createSampleData);
  }

  public getRouter() {
    return this.router;
  }
}

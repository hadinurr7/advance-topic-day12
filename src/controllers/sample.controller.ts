import { NextFunction, Request, Response } from "express";
import { getSamplesService } from "../services/sample/get-samples.services";
import { createSampleService } from "../services/sample/create-sample.services";
import { transporter } from "../lib/nodemailer";

export class SampleController {
  async getSampleData(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const query = {
        take: parseInt(request.query.take as string) || 5,
        page: parseInt(request.query.page as string) || 1,
        sortBy: (request.query.sortBy as string) || "createdAt",
        sortOrder: (request.query.sortOrder as string) || "desc",
      };
      const result = await getSamplesService(query);
      response.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async createSampleData(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const result = await createSampleService(request.body, request.file);

      response.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}

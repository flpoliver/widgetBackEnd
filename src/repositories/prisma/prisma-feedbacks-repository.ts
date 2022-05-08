import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "../feedbacks-repository";

interface FeedbackCreateDataResponse {
  id: string;
  type: string;
  comment: string;
  screenshot: string | null;
}

export class PrismaFeedbacksRepository implements FeedbacksRepository {
 async create({type, comment, screenshot}: FeedbackCreateData): Promise<FeedbackCreateDataResponse> {
   const result =  await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      }
    })

    return result;
  }
}
import { FeedbackDTO } from './feedback-dto';
import { KeywordDTO } from './keyword-dto';

export class PostDTO {
  id: string;
  title: string;
  summary: string;
  post: string;
  createdDateTime: string;
  keywords: KeywordDTO[];
  feedbacks: FeedbackDTO[];
}

// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Answers, Questions, AnswersQuestions } = initSchema(schema);

export {
  Answers,
  Questions,
  AnswersQuestions
};
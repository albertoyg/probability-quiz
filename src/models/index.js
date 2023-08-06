// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Difficulty = {
  "EASY": "EASY",
  "MEDIUM": "MEDIUM",
  "HARD": "HARD"
};

const { Scores, Quiz, Answers, Questions, AnswersQuestions } = initSchema(schema);

export {
  Scores,
  Quiz,
  Answers,
  Questions,
  AnswersQuestions,
  Difficulty
};
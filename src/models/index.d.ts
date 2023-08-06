import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerAnswers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Answers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly text?: string | null;
  readonly Questions?: (AnswersQuestions | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAnswers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Answers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly text?: string | null;
  readonly Questions: AsyncCollection<AnswersQuestions>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Answers = LazyLoading extends LazyLoadingDisabled ? EagerAnswers : LazyAnswers

export declare const Answers: (new (init: ModelInit<Answers>) => Answers) & {
  copyOf(source: Answers, mutator: (draft: MutableModel<Answers>) => MutableModel<Answers> | void): Answers;
}

type EagerQuestions = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Questions, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly text?: string | null;
  readonly answerss?: (AnswersQuestions | null)[] | null;
  readonly AcceptedAnswer?: Answers | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly questionsAcceptedAnswerId?: string | null;
}

type LazyQuestions = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Questions, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly text?: string | null;
  readonly answerss: AsyncCollection<AnswersQuestions>;
  readonly AcceptedAnswer: AsyncItem<Answers | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly questionsAcceptedAnswerId?: string | null;
}

export declare type Questions = LazyLoading extends LazyLoadingDisabled ? EagerQuestions : LazyQuestions

export declare const Questions: (new (init: ModelInit<Questions>) => Questions) & {
  copyOf(source: Questions, mutator: (draft: MutableModel<Questions>) => MutableModel<Questions> | void): Questions;
}

type EagerAnswersQuestions = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AnswersQuestions, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly answersId?: string | null;
  readonly questionsId?: string | null;
  readonly answers: Answers;
  readonly questions: Questions;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAnswersQuestions = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AnswersQuestions, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly answersId?: string | null;
  readonly questionsId?: string | null;
  readonly answers: AsyncItem<Answers>;
  readonly questions: AsyncItem<Questions>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AnswersQuestions = LazyLoading extends LazyLoadingDisabled ? EagerAnswersQuestions : LazyAnswersQuestions

export declare const AnswersQuestions: (new (init: ModelInit<AnswersQuestions>) => AnswersQuestions) & {
  copyOf(source: AnswersQuestions, mutator: (draft: MutableModel<AnswersQuestions>) => MutableModel<AnswersQuestions> | void): AnswersQuestions;
}
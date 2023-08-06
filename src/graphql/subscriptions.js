/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateScores = /* GraphQL */ `
  subscription OnCreateScores($filter: ModelSubscriptionScoresFilterInput) {
    onCreateScores(filter: $filter) {
      id
      score
      Quiz {
        id
        difficulty
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      scoresQuizId
      __typename
    }
  }
`;
export const onUpdateScores = /* GraphQL */ `
  subscription OnUpdateScores($filter: ModelSubscriptionScoresFilterInput) {
    onUpdateScores(filter: $filter) {
      id
      score
      Quiz {
        id
        difficulty
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      scoresQuizId
      __typename
    }
  }
`;
export const onDeleteScores = /* GraphQL */ `
  subscription OnDeleteScores($filter: ModelSubscriptionScoresFilterInput) {
    onDeleteScores(filter: $filter) {
      id
      score
      Quiz {
        id
        difficulty
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      scoresQuizId
      __typename
    }
  }
`;
export const onCreateQuiz = /* GraphQL */ `
  subscription OnCreateQuiz($filter: ModelSubscriptionQuizFilterInput) {
    onCreateQuiz(filter: $filter) {
      id
      difficulty
      Questions {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateQuiz = /* GraphQL */ `
  subscription OnUpdateQuiz($filter: ModelSubscriptionQuizFilterInput) {
    onUpdateQuiz(filter: $filter) {
      id
      difficulty
      Questions {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteQuiz = /* GraphQL */ `
  subscription OnDeleteQuiz($filter: ModelSubscriptionQuizFilterInput) {
    onDeleteQuiz(filter: $filter) {
      id
      difficulty
      Questions {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateAnswers = /* GraphQL */ `
  subscription OnCreateAnswers($filter: ModelSubscriptionAnswersFilterInput) {
    onCreateAnswers(filter: $filter) {
      id
      text
      Questions {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateAnswers = /* GraphQL */ `
  subscription OnUpdateAnswers($filter: ModelSubscriptionAnswersFilterInput) {
    onUpdateAnswers(filter: $filter) {
      id
      text
      Questions {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteAnswers = /* GraphQL */ `
  subscription OnDeleteAnswers($filter: ModelSubscriptionAnswersFilterInput) {
    onDeleteAnswers(filter: $filter) {
      id
      text
      Questions {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateQuestions = /* GraphQL */ `
  subscription OnCreateQuestions(
    $filter: ModelSubscriptionQuestionsFilterInput
  ) {
    onCreateQuestions(filter: $filter) {
      id
      text
      answerss {
        nextToken
        startedAt
        __typename
      }
      AcceptedAnswer {
        id
        text
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      quizID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      questionsAcceptedAnswerId
      __typename
    }
  }
`;
export const onUpdateQuestions = /* GraphQL */ `
  subscription OnUpdateQuestions(
    $filter: ModelSubscriptionQuestionsFilterInput
  ) {
    onUpdateQuestions(filter: $filter) {
      id
      text
      answerss {
        nextToken
        startedAt
        __typename
      }
      AcceptedAnswer {
        id
        text
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      quizID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      questionsAcceptedAnswerId
      __typename
    }
  }
`;
export const onDeleteQuestions = /* GraphQL */ `
  subscription OnDeleteQuestions(
    $filter: ModelSubscriptionQuestionsFilterInput
  ) {
    onDeleteQuestions(filter: $filter) {
      id
      text
      answerss {
        nextToken
        startedAt
        __typename
      }
      AcceptedAnswer {
        id
        text
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      quizID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      questionsAcceptedAnswerId
      __typename
    }
  }
`;
export const onCreateAnswersQuestions = /* GraphQL */ `
  subscription OnCreateAnswersQuestions(
    $filter: ModelSubscriptionAnswersQuestionsFilterInput
  ) {
    onCreateAnswersQuestions(filter: $filter) {
      id
      answersId
      questionsId
      answers {
        id
        text
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      questions {
        id
        text
        quizID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        questionsAcceptedAnswerId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateAnswersQuestions = /* GraphQL */ `
  subscription OnUpdateAnswersQuestions(
    $filter: ModelSubscriptionAnswersQuestionsFilterInput
  ) {
    onUpdateAnswersQuestions(filter: $filter) {
      id
      answersId
      questionsId
      answers {
        id
        text
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      questions {
        id
        text
        quizID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        questionsAcceptedAnswerId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteAnswersQuestions = /* GraphQL */ `
  subscription OnDeleteAnswersQuestions(
    $filter: ModelSubscriptionAnswersQuestionsFilterInput
  ) {
    onDeleteAnswersQuestions(filter: $filter) {
      id
      answersId
      questionsId
      answers {
        id
        text
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      questions {
        id
        text
        quizID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        questionsAcceptedAnswerId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;

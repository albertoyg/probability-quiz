/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createScores = /* GraphQL */ `
  mutation CreateScores(
    $input: CreateScoresInput!
    $condition: ModelScoresConditionInput
  ) {
    createScores(input: $input, condition: $condition) {
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
export const updateScores = /* GraphQL */ `
  mutation UpdateScores(
    $input: UpdateScoresInput!
    $condition: ModelScoresConditionInput
  ) {
    updateScores(input: $input, condition: $condition) {
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
export const deleteScores = /* GraphQL */ `
  mutation DeleteScores(
    $input: DeleteScoresInput!
    $condition: ModelScoresConditionInput
  ) {
    deleteScores(input: $input, condition: $condition) {
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
export const createQuiz = /* GraphQL */ `
  mutation CreateQuiz(
    $input: CreateQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    createQuiz(input: $input, condition: $condition) {
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
export const updateQuiz = /* GraphQL */ `
  mutation UpdateQuiz(
    $input: UpdateQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    updateQuiz(input: $input, condition: $condition) {
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
export const deleteQuiz = /* GraphQL */ `
  mutation DeleteQuiz(
    $input: DeleteQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    deleteQuiz(input: $input, condition: $condition) {
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
export const createAnswers = /* GraphQL */ `
  mutation CreateAnswers(
    $input: CreateAnswersInput!
    $condition: ModelAnswersConditionInput
  ) {
    createAnswers(input: $input, condition: $condition) {
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
export const updateAnswers = /* GraphQL */ `
  mutation UpdateAnswers(
    $input: UpdateAnswersInput!
    $condition: ModelAnswersConditionInput
  ) {
    updateAnswers(input: $input, condition: $condition) {
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
export const deleteAnswers = /* GraphQL */ `
  mutation DeleteAnswers(
    $input: DeleteAnswersInput!
    $condition: ModelAnswersConditionInput
  ) {
    deleteAnswers(input: $input, condition: $condition) {
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
export const createQuestions = /* GraphQL */ `
  mutation CreateQuestions(
    $input: CreateQuestionsInput!
    $condition: ModelQuestionsConditionInput
  ) {
    createQuestions(input: $input, condition: $condition) {
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
export const updateQuestions = /* GraphQL */ `
  mutation UpdateQuestions(
    $input: UpdateQuestionsInput!
    $condition: ModelQuestionsConditionInput
  ) {
    updateQuestions(input: $input, condition: $condition) {
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
export const deleteQuestions = /* GraphQL */ `
  mutation DeleteQuestions(
    $input: DeleteQuestionsInput!
    $condition: ModelQuestionsConditionInput
  ) {
    deleteQuestions(input: $input, condition: $condition) {
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
export const createAnswersQuestions = /* GraphQL */ `
  mutation CreateAnswersQuestions(
    $input: CreateAnswersQuestionsInput!
    $condition: ModelAnswersQuestionsConditionInput
  ) {
    createAnswersQuestions(input: $input, condition: $condition) {
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
export const updateAnswersQuestions = /* GraphQL */ `
  mutation UpdateAnswersQuestions(
    $input: UpdateAnswersQuestionsInput!
    $condition: ModelAnswersQuestionsConditionInput
  ) {
    updateAnswersQuestions(input: $input, condition: $condition) {
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
export const deleteAnswersQuestions = /* GraphQL */ `
  mutation DeleteAnswersQuestions(
    $input: DeleteAnswersQuestionsInput!
    $condition: ModelAnswersQuestionsConditionInput
  ) {
    deleteAnswersQuestions(input: $input, condition: $condition) {
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

/* eslint-disable */
// this is an auto generated file. This will be overwritten

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

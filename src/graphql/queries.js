/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAnswers = /* GraphQL */ `
  query GetAnswers($id: ID!) {
    getAnswers(id: $id) {
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
export const listAnswers = /* GraphQL */ `
  query ListAnswers(
    $filter: ModelAnswersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnswers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncAnswers = /* GraphQL */ `
  query SyncAnswers(
    $filter: ModelAnswersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAnswers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        text
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getQuestions = /* GraphQL */ `
  query GetQuestions($id: ID!) {
    getQuestions(id: $id) {
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
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncQuestions = /* GraphQL */ `
  query SyncQuestions(
    $filter: ModelQuestionsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncQuestions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getAnswersQuestions = /* GraphQL */ `
  query GetAnswersQuestions($id: ID!) {
    getAnswersQuestions(id: $id) {
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
export const listAnswersQuestions = /* GraphQL */ `
  query ListAnswersQuestions(
    $filter: ModelAnswersQuestionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnswersQuestions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        answersId
        questionsId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncAnswersQuestions = /* GraphQL */ `
  query SyncAnswersQuestions(
    $filter: ModelAnswersQuestionsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAnswersQuestions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        answersId
        questionsId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const answersQuestionsByAnswersId = /* GraphQL */ `
  query AnswersQuestionsByAnswersId(
    $answersId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAnswersQuestionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    answersQuestionsByAnswersId(
      answersId: $answersId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        answersId
        questionsId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const answersQuestionsByQuestionsId = /* GraphQL */ `
  query AnswersQuestionsByQuestionsId(
    $questionsId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAnswersQuestionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    answersQuestionsByQuestionsId(
      questionsId: $questionsId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        answersId
        questionsId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;

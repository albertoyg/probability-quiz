import Quiz from '../components/quiz';
import { Button, Flex, Heading } from '@aws-amplify/ui-react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { GraphQLQuery } from '@aws-amplify/api';
import { useEffect, useState } from 'react';
import { listQuestions } from "@/graphql/queries";
import { API } from 'aws-amplify';
import Head from 'next/head';

export default function Home() {
  const { signOut } = useAuthenticator();
  const [score, setScore] = useState(0);
  const [ questions, setQuestions ] = useState([listQuestions ]);
  useEffect(() => {
    const grabData = async () => {
      const { data } = await API.graphql({ query: listQuestions });
    setQuestions(data.listQuestions.items);
    }
    grabData();
  }, []);

  return (
    <Flex direction={"column"} alignItems={"center"}>
      <Heading level={1}>Probability Game - Current Score: {score}</Heading>
      {questions.map((question, index) => (
        <Quiz
          key={question.id}
          id={question.id}
          question={question.text}
          correctAnswer={question.questionAcceptedAnswerId}
          questionNumber={index + 1}
          setScore={setScore}
          ></Quiz>
      ))}
        <Button onClick={signOut} variation='warning'>Sign Out</Button>
    </Flex>
  )
}
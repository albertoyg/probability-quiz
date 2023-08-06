import { API } from "aws-amplify";
import { listAnswers, listQuestions } from "@/graphql/queries";
import { useState, useEffect } from "react";
import { Button, Grid, Heading } from "@aws-amplify/ui-react";
import question from "../question";

export default function Quiz() {
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const { data } = await API.graphql({ query: listQuestions });
      setQuestions(data.listQuestions.items);
    };
    fetchQuestions();
  }, []);

  const handleAnswerClick = (selectedAnswerId, correctAnswer) => {
    if (selectedAnswerId === correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  return (
    <div>
        <Heading level={1}>Probability Game - Current Score: {score}</Heading>
        {questions.map((question, index) => (
            <Question
                key={question.id}
                id={question.id}
                question={question.text}
                correctAnswer={question.AcceptedAnswer.id}
                questionNumber={index + 1}
                setScore={setScore}
                answerss={question.answerss}
            />
        ))}
    </div>
);
}

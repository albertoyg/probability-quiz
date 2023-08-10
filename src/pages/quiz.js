import { Button as MUIButton } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listQuestions, listQuizzes, questionsByQuizID } from '../graphql/queries';

export default function Quiz() {
  const router = useRouter();
  const { difficulty } = router.query;

  const [questions, setQuestions] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(1);
  
  useEffect(() => {
    if (difficulty) {
      fetchQuizIdByDifficulty(difficulty);
    }
  }, [difficulty]);

  async function fetchQuizIdByDifficulty(difficulty) {
    try {
      const response = await API.graphql(graphqlOperation(listQuizzes, {
        filter: { difficulty: { eq: difficulty.toUpperCase() } },
        limit: 1 // assuming one quiz per difficulty
      }));
      
      const quizId = response.data.listQuizzes.items[0]?.id;
      if (quizId) {
        fetchQuestionsByQuizID(quizId);
      }
    } catch (error) {
      console.error("Error fetching quiz ID:", error);
    }
  }

  async function fetchQuestionsByQuizID(quizId) {
    try {
      const response = await API.graphql(graphqlOperation(questionsByQuizID, {
        quizID: quizId
      }));

      setQuestions(response.data.questionsByQuizID.items);
      console.log("Questions:", response.data.questionsByQuizID.items);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  }

  return (
    <div className='fullScreenContainer'>
      <Link href="/">
        <MUIButton variant="outlined" className='homeButton'>
          Home
        </MUIButton>
      </Link>
      {/* center stage (where compontents go) */}
      <div className='centerStage'>
        {/* title of the page */}
        <h1>Question {questionNumber}: {questions[questionNumber - 1]?.text}</h1>
        {/* button container */}
        <div className='buttonContainer'>
          {/* Check if a question exists for the current index. */}
        </div>
      </div>
    </div>
  )
}

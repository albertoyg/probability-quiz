import { API } from "aws-amplify"
import { GraphQLQuery } from "@aws-amplify/api"
// import { ListAnswersQuery, QuestionAnswersByAnswerIdQuery } from "@/API"
import { listAnswers } from "@/graphql/queries"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Button, Flex, Grid, Heading, View } from "@aws-amplify/ui-react"
import { isDesignToken } from "@aws-amplify/ui"
 
export default function ({
    question,
    id,
    correctAnswer,
    questionNumber,
    setScore,
  }) {
    const [answers, setAnswers] = useState([]);
    const [disabled, setDisabled] = useState(false);
  
    useEffect(() => {
      const grabData = async () => {
        const { data } = await API.graphql({ query: listAnswers, questionId: id });
        console.log(data);
        setAnswers(data.listAnswers.items);
      };
      grabData();
    }, [id]);
  
    const onClick = (selectedAnswerId) => {
      const isCorrect = selectedAnswerId === correctAnswer;
      setDisabled(true);
      if (isCorrect) {
        setScore((prev) => prev + 1);
      }
    };
  
    return (
      <Grid gap="5" isDisabled={disabled} className="answer-grid">
        <Heading level={3}>
            Question {questionNumber}: {question}
        </Heading>
        <div>Select the Correct Answer</div>
        {/* You can map over the answers and render them here */}
        {answers.map((answer, index) => (
          <Button key={index} onClick={() => onClick(answer.id)}>
            {answer.text}
          </Button>
        ))}
      </Grid>
    );
  }
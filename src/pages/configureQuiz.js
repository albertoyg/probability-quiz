import { useAuthenticator } from '@aws-amplify/ui-react';
import { Button as MUIButton } from '@mui/material';
import Link from 'next/link';

export default function configureQuiz() {
  const { signOut } = useAuthenticator();

  return (
    <div className='fullScreenContainer'>
      {/* Home button, press it and it takes you to home page */}
      <Link href="/">
        <MUIButton variant="outlined" className='homeButton'>
          Home
        </MUIButton>
      </Link>
      {/* signOut button */}
      <MUIButton variant="outlined" color="error" onClick={signOut} className='signOutButton'>
        Sign Out
      </MUIButton>
      {/* center stage (where compontents go) */}
      <div className='centerStage'>
        {/* title of the page */}
        <h1>Choose a difficulty</h1>
        {/* button container */}
        <div className='buttonContainer'>
          {/* will contain buttons and format them as a list */}
          <Link href="/quiz?difficulty=easy">
              <MUIButton variant="outlined" className='quizButton'>Easy</MUIButton>
          </Link>
          <Link href="/quiz?difficulty=medium">
              <MUIButton variant="outlined" className='quizButton'>Medium</MUIButton>
          </Link>
          <Link href="/quiz?difficulty=hard">
              <MUIButton variant="outlined" className='quizButton'>Hard</MUIButton>
          </Link>
        </div>
      </div>
    </div>
  )
}

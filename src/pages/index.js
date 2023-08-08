import { useAuthenticator } from '@aws-amplify/ui-react';
import { Button as MUIButton } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  const { signOut } = useAuthenticator();

  return (
    <div className='fullScreenContainer'>
      {/* signOut button */}
      <MUIButton variant="outlined" color="error" onClick={signOut} className='signOutButton'>
        Sign Out
      </MUIButton>
      {/* center stage (where compontents go) */}
      <div className='centerStage'>
        {/* title of the page */}
        <h1>Probability Quiz</h1>
        {/* button container */}
        <div className='buttonContainer'>
          {/* will contain buttons and format them as a list */}
          <Link href="/configureQuiz">
              <MUIButton variant="outlined">Start quiz</MUIButton>
          </Link>
          <MUIButton variant="outlined">scores</MUIButton>
        </div>
      </div>
    </div>
  )
}

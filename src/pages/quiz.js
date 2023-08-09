import { useAuthenticator } from '@aws-amplify/ui-react';
import { Button as MUIButton } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  const { signOut } = useAuthenticator();

  return (
    <div className='fullScreenContainer'>
      {/* signOut button */}
      <Link href="/">
        <MUIButton variant="outlined" className='homeButton'>
          Home
        </MUIButton>
      </Link>
      {/* center stage (where compontents go) */}
      <div className='centerStage'>
        {/* title of the page */}
        <h1>Quiz</h1>
        {/* button container */}
        <div className='buttonContainer'>
          {/* will contain buttons and format them as a list */}
          
        </div>
      </div>
    </div>
  )
}

import ChooseDifficulty from '@/components/difficulty';
import { Button } from '@aws-amplify/ui-react';
import { useAuthenticator } from '@aws-amplify/ui-react';


export default function Home() {
  const { signOut } = useAuthenticator();

  return (
    // adding difficulty
    <div>
      <ChooseDifficulty />
      <Button onClick={signOut} variation='warning'>Sign Out</Button>
    </div>

  )
}

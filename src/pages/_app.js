import '@/styles/globals.css'
import { Amplify } from 'aws-amplify'
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsExports from "../../src/aws-exports.js";
Amplify.configure(awsExports);

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default withAuthenticator(App);
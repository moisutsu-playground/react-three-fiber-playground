import 'sanitize.css';
import 'src/styles/global.css';

import Layout from 'src/components/Layout';

import { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default App;

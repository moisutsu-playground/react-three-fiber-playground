import 'sanitize.css';
import 'src/styles/global.css';

import { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps): JSX.Element => <Component {...pageProps} />;

export default App;

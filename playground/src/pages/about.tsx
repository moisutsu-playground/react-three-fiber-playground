import Link from 'next/link';
import { NextPage } from 'next';

import Layout from 'src/components/Layout';

const AboutPage: NextPage = () => (
  <Layout title='About | Next.js + TypeScript Example'>
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href='/'>
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export default AboutPage;

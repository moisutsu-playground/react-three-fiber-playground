import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout: React.FCX = ({ children, title }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
      </nav>
      <h1>Hello react-three-fiber Playground!</h1>
    </header>
    {children}
    <footer>
      <span>© 2020 moisutsu</span>
    </footer>
  </div>
);

export default Layout;

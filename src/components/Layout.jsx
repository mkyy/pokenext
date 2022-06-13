import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';
import Head from 'next/head';

const Main = styled.main`
  height: calc(100vh - 120px);
  width: 100%;
  overflow: scroll;
`;

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel='shortcut icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap'
          rel='stylesheet'
        />
        <title>PokeNext</title>
      </Head>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

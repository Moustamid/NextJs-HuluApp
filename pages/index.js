import Head from 'next/head';
//.Component :
import { Header, Navbar } from '../components';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Hulu </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Navbar />

      {/* results */}
    </div>
  );
};

export default Home;

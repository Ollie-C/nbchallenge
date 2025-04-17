import Episodes from '@/components/Episodes/Episodes';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>TV Bland - TV Show Database</title>
      </Head>
      <main className='main'>
        <Episodes />
      </main>
    </>
  );
};

export default Home;

import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link'

function Index() {
  const [date, setDate] = useState([]);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.json();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <Head>
        <title>Co-learnings</title>
      </Head>
      <h1>Co-learnings</h1>
      <p>
        <form>
        Username: <input /><br />
        Password: <input /><br />
        <input val="submit" type="submit" />
        </form>
      </p>
      <br />
      <style jsx>{`
        main {
        
        }
      `}</style>
    </main>
  );
}

export default Index;

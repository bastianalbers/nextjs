import { useEffect, useState } from 'react';
import Head from 'next/head';

function Login() {
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

export default Login;

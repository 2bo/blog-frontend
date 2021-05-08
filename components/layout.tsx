import Head from 'next/head';
import styles from './layout.module.css';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>2bo blog</title>
        <meta name="description" content="tech blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <header>
          <h1 className={styles.title}>2bo blog</h1>
        </header>
        <div className={styles.content}>{children}</div>
        <footer className={styles.footer}>contact</footer>
      </div>
    </>
  );
}


import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Image from 'next/image';

const name = "Arthur Lozano";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Next.js blog demo"
        />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              src="/images/headerImage.jpg"
              alt={name}
              className={styles.headerImage}
            />
            <h1>{name}'s Blog</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  src="/images/headerImage.jpg"
                  alt={name}
                  className={styles.headerImage}
                />
              </a>
            </Link>
            <h2>
              <Link href="/">
                <a>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
      )}
    </div>
  );
}

import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>WILKOMMEN</h1>
        <p className={styles.text}>
          Twenty-five years Dana had been waiting. She tried to be patient
          during that time but she hadn't always managed to be as patient as
          she'd like. But today the opportunity had finally come.
        </p>
        <p className={styles.text}>
          The thing she always imagined would make her the happiest person in
          the world was about to happen. She didn't know why at this specific
          time she all of a sudden felt sick inside.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}

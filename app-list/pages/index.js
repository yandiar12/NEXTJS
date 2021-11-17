import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe officia, ea iure odio explicabo voluptatibus, molestiae numquam dolores quibusdam doloremque itaque cumque fuga aut minus dolore illo deserunt blanditiis tempora?</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe officia, ea iure odio explicabo voluptatibus, molestiae numquam dolores quibusdam doloremque itaque cumque fuga aut minus dolore illo deserunt blanditiis tempora?</p>
        <Link href="/content">
          <a className={styles.btn}>App List Content</a>
        </Link>
      </div>
    </>
  )
}

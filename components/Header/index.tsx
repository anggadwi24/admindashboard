
import Link from 'next/link';
import styles from './Header.module.css';


export default function Home() {
  return (
    
      <header className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.item}><Link href="/">Home</Link></li>
          <li className={styles.item}><Link href="/login">Login</Link></li>
          <li className={styles.item}><Link href="/login">Home</Link></li>

        </ul>
      </header>
    
  )
}

import styles from './page.module.css'
import SignUp from './signup/page'

export default function Home() {
  return (
    <main className={styles.main} >
      <SignUp />
    </main>
  )
}

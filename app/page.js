import Image from 'next/image'
import styles from './page.module.css'
import { Heading } from '@chakra-ui/react'
import SignUp from './signup/page'
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  return (
    <main className={styles.main} >
      <SignUp />
    </main>
  )
}

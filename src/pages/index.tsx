import { useGetData } from '../hooks/useGetData';
import { Login } from '../components/Login/Form';

import styles from '../styles/home.module.scss'

export default function Home() {
  const { users } = useGetData()

  return (
    <div className={styles.container}>
      <Login
        users={users}
      />
    </div>
  )
}
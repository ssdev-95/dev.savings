import { useHistory } from 'react-router-dom'
import { FaArrowRight/*, FaTrashAlt*/ } from 'react-icons/fa'
import ILogo from 'src/icons/logo.svg'
import styles from './styles.module.scss'

function App() {
  const router = useHistory()

  return (
    <main className={styles.home}>
      <img src={ILogo} alt="Dev.$avings" />
      <section>
        <h2>Studies shows that</h2>
        <p>you'll always have money if..</p>
      </section>
      <button onClick={()=>router.push('/auth0')}>
        <span>Start saving today</span>
        <FaArrowRight />
      </button>
    </main>
  )
}

export default App
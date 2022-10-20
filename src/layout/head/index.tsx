import styles from './index.module.css'
import github from '../../icons/github.svg'
export const Head: React.FC = () => (
  <header className={styles.head}>
    <h1 className={styles.logo}>k-ui</h1>
    <img className={styles.github} src={github} alt=''/>
  </header>
)

import styles from './index.module.css';
import { Link, useLocation } from "react-router-dom";

export const Menu = () => {
  const menuItems = ['button', 'input']
  const location = useLocation();
  return (
    <ul className={styles.menu}>
      {menuItems.map((item) => <Link
        key={item}
        className={`${location.pathname.slice(1, location.pathname.length) === item && styles.actived} ${styles.item}`}
        to={item}>{item}
      </Link>)}
    </ul>
  )
}
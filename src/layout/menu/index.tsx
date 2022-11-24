import styles from "./index.module.css";
import { Link, useLocation } from "react-router-dom";
import { menuOptions } from "../../router";

export const Menu: React.FC = () => {
  const location = useLocation();
  return (
    <ul className={styles.menu}>
      {Object.keys(menuOptions).map((item) => (
        <Link
          key={item}
          className={`${
            location.pathname.slice(1, location.pathname.length) === item
              ? styles.active
              : ""
          } ${styles.item}`}
          to={item}
        >
          {item}
        </Link>
      ))}
    </ul>
  );
};

import styles from "./index.module.css";
import { Outlet } from "react-router-dom";

export const Content: React.FC = () => (
  <main className={styles.content}>
    <Outlet />
  </main>
);

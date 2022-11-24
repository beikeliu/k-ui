import { Head } from "./layout/head";
import { Menu } from "./layout/menu";
import { Content } from "./layout/content";
export const App: React.FC = () => (
  <>
    <Head />
    <div style={{ display: "flex" }}>
      <Menu />
      <Content />
    </div>
  </>
);

import { KButton } from "../../lib/components/k-button";

export const KButtonDoc: React.FC = () => (
  <>
    <KButton>确 定</KButton>
    <KButton type="danger">删 除</KButton>
    <KButton type="cool">查 找</KButton>
    <KButton type="link">链 接</KButton>
  </>
);

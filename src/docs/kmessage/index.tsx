import { message } from "../../lib/components/k-message";

export const KMessage: React.FC = () => {
  const openMessage = (): void => {
    message.success("成功调用");
  };
  return (
    <>
      <button onClick={openMessage}>message</button>
    </>
  );
};

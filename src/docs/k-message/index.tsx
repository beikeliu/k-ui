import { KButton } from "../../lib/components/k-button";
import { message } from "../../lib/components/k-message";

export const KMessage: React.FC = () => {
  const openMessage = (): void => {
    message.success("success");
  };
  return (
    <>
      <KButton onClick={openMessage}>message</KButton>
    </>
  );
};

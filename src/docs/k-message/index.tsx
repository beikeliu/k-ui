import { KButton } from "../../lib/components/k-button";
import { message } from "../../lib/components/k-message";

export const KMessageDoc: React.FC = () => {
  const openSuccess = (): void => {
    message.success("恭喜你，请求成功！");
  };
  const openError = (): void => {
    message.error("出错了，请求失败！");
  };
  const openWarning = (): void => {
    message.warning("参数有误，请重新检查！");
  };
  return (
    <>
      <KButton onClick={openSuccess}>success</KButton>
      &nbsp;
      <KButton onClick={openError}>error</KButton>
      &nbsp;
      <KButton onClick={openWarning}>warning</KButton>
    </>
  );
};

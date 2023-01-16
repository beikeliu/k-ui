import "./index.css";
export interface Props {
  children?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "cool" | "danger" | "link";
}

export const KButton: React.FC<Props> = ({
  children,
  onClick,
  type,
}: Props) => {
  console.log(type);

  return (
    <>
      <button
        className={`k-button ${type ? `k-button-${type}` : ""}`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

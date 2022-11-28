import "./index.css";
export interface Props {
  children?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const KButton: React.FC<Props> = ({ children, onClick }: Props) => (
  <>
    <button className="k-button" onClick={onClick}>
      {children}
    </button>
  </>
);

import "./index.css";
export interface Props {
  children?: string;
}

export const KButton: React.FC<Props> = ({ children }: Props) => (
  <>
    <button className="k-button">{children}</button>
  </>
);

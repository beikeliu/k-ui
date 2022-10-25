export interface Props {
  value: string;
  options: Array<{
    label: string;
    value: string;
  }>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

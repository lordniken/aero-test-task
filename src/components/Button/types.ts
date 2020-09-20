export interface ButtonProps {
  title?: string;
  icon?: React.ReactElement<any>;
  filled?: boolean;
  fullWidth?: boolean;
  color?: string;
  disabled?: boolean;
  onClick?: () => void;
}

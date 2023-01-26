import "./botonesStyles.css";

interface BotonesProps {
  value: string;
  className?: string,
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void;
  onChange?: () => void;
  [x: string] : any
}

export const BotonSubmit = ({ value, className, type, onClick, onChange, ...props }: BotonesProps) => {

  return (
    <button
      className={`${className} button`}
      type={type ? `submit` : type}
      onClick={onClick}
      onChange={onChange}
      { ...props }
    >
      {value}
    </button>
  );
};


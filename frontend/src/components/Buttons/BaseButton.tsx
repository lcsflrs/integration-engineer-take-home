import { twMerge } from "tailwind-merge";

interface BaseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick: () => void;
  className?: string;
}
const BaseButton = ({ onClick, text, className, ...rest }: BaseButtonProps) => {
  return (
    <button
      className={twMerge(
        "hover:bg-brand-purple transition-all hover:shadow-purple rounded-lg py-2 px-4 bg-brand-purple text-white font-semibold",
        className
      )}
      onClick={onClick}
      {...rest}
    >
      {text}
    </button>
  );
};

export default BaseButton;

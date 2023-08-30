import { twMerge } from "tailwind-merge";

interface TextButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}
const TextButton = ({ onClick, text, className }: TextButtonProps) => {
  return (
    <button
      className={twMerge(
        "hover:text-brand-purple  transition-all  rounded-lg py-2 px-4 bg-transparent text-white font-semibold",
        className
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default TextButton;

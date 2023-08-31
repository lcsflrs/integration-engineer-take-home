import { twMerge } from "tailwind-merge";

interface TextButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}
const TextButton = ({ onClick, text, className }: TextButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    onClick();
  };

  return (
    <a
      href=""
      className={twMerge(
        "hover:text-brand-purple flex items-center transition-all rounded-lg py-2 px-4 bg-transparent text-white font-semibold",
        className
      )}
      onClick={handleClick}
    >
      {text}
    </a>
  );
};

export default TextButton;

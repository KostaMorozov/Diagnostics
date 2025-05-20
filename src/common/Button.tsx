import type { ButtonProps } from "../types/types";

export default function Button({ text, className, onClick }: ButtonProps) {
  return (
    <button className={`${className}`} onClick={onClick}>
      {text}
    </button>
  );
}

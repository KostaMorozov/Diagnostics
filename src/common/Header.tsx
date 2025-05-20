import type { HeaderProps } from "../types/types";

export default function Header({ text, className }: HeaderProps) {
  return <h1 className={className}>{text}</h1>;
}

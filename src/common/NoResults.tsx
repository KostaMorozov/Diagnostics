import type { NoResultsProps } from "../types/types";

export default function NoResults({ text, className }: NoResultsProps) {
  return <div className={className}>{text}</div>;
}

import { FiArrowUpRight } from "react-icons/fi";

export default function ExternalLink({
  href,
  children,
  className = "text-link",
}) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <FiArrowUpRight aria-hidden="true" />
      <span className="sr-only"> (opens in new tab)</span>
    </a>
  );
}

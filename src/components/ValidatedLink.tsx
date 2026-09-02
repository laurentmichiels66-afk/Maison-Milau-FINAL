import React from 'react';
import { validateLink } from '../config/site.config';

interface ValidatedLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  title?: string;
  id?: string;
}

/**
 * ValidatedLink:
 * Strictly enforces that every link rendered in the website maps to an approved,
 * existing route from the sitemap. If a link points to an unapproved or missing route,
 * it renders an explicit error badge instead of creating an imaginary path.
 */
export const ValidatedLink: React.FC<ValidatedLinkProps> = ({
  href,
  className = "",
  children,
  onClick,
  title,
  id
}) => {
  const validation = validateLink(href);

  if (!validation.isValid) {
    return (
      <span
        id={id || `invalid-link-${Math.random().toString(36).substring(7)}`}
        className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-mono bg-red-100 text-red-800 border border-red-300 cursor-not-allowed"
        title={`[Route Error] ${validation.errorReason}`}
      >
        <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
        <span className="line-through">{children}</span>
        <span className="text-[10px] font-bold uppercase">(Geen Route)</span>
      </span>
    );
  }

  const isExternal = href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:") || href.startsWith("tel:");

  return (
    <a
      id={id}
      href={validation.normalizedPath}
      className={className}
      onClick={onClick}
      title={title}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
};

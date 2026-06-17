import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}

export function getFirstImage(body: string): string | undefined {
  // Posts reference images inline as <img src="/images/…">; fall back to
  // markdown ![](…) syntax. Returns the first match's URL, or undefined.
  const html = body.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (html) return html[1];
  const md = body.match(/!\[[^\]]*\]\(([^)\s]+)/);
  if (md) return md[1];
  return undefined;
}

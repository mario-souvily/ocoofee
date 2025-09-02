import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
// app/api/_utils.ts
export function sanitizeUser<T extends { pass?: string }>(u: T) {
  const { pass: _pass, ...safe } = u as T;
  return safe;
}

export function isEmail(v: string | null) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v || "");
}

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sanitizeUser<T extends { clerkId?: string }>(u: T) {
  const { clerkId: _clerkId, ...safe } = u as T;
  return safe;
}

export function isEmail(v: string | null) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v || "");
}

export function isStrongPass(pass: string) {
  const strongPass =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*_=+\-;]).{8,}$/;
  return strongPass.test(pass);
}

export function formatPrice(price: number): string {
  return price.toFixed(2);
}

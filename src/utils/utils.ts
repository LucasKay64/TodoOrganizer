import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// util function to merge tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

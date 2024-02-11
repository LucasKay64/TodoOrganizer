import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// util function to merge tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const setApiToken = (token: string) => {
  localStorage.setItem("api_token", token);
};

export const getApiToken = () => {
  return localStorage.getItem("api_token");
};

export const removeApiToken = () => {
  localStorage.removeItem("api_token");
};

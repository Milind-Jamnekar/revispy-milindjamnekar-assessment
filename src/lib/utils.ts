import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { faker } from "@faker-js/faker";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateRandmonInterests() {
  const items = [];

  for (let i = 0; i < 25; i++) {
    items.push({
      id: faker.string.uuid(),
      label: faker.commerce.product(),
    });
  }

  return [...new Set(items)];
}

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPrioritySpecs(specifications: Record<string, string>) {
  const keys = Object.keys(specifications);
  const findBy = (matcher: (key: string) => boolean) =>
    keys.find((key) => matcher(key.toLowerCase()));

  const selectedKeys = [
    findBy((key) => key.includes("test force") || key.includes("capacity")),
    findBy((key) => key.includes("accuracy") || key.includes("resolution")),
    findBy((key) => key.includes("standard")),
  ].filter((value): value is string => Boolean(value));

  const uniqueKeys = Array.from(new Set(selectedKeys));
  if (uniqueKeys.length < 3) {
    keys.forEach((key) => {
      if (!uniqueKeys.includes(key) && uniqueKeys.length < 3) {
        uniqueKeys.push(key);
      }
    });
  }

  return uniqueKeys.map((key) => [key, specifications[key]] as const);
}

export function getQuickSpecs(specifications: Record<string, string>, model: string) {
  const entries = Object.entries(specifications);
  const findValue = (matcher: (key: string, value: string) => boolean) =>
    entries.find(([key, value]) => matcher(key.toLowerCase(), value.toLowerCase()))?.[1];

  const testForce =
    findValue((key) => key.includes("test force") || key.includes("capacity") || key.includes("load")) ??
    "On request";
  const accuracy =
    findValue((key) => key.includes("accuracy") || key.includes("resolution")) ?? "On request";
  const standards =
    findValue((key, value) => key.includes("standard") || value.includes("astm") || value.includes("iso")) ??
    "ASTM / ISO compatible";

  return [
    ["Test Force", testForce],
    ["Accuracy", accuracy],
    ["Standards", standards],
    ["Model", model],
  ] as const;
}

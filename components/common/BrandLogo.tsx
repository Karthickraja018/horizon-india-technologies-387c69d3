"use client";

import Image from "next/image";
import logo from "@/assets/logo.png";
import wordmark from "@/assets/image.png";
import { cn } from "@/lib/utils";

type BrandLogoSize = "sm" | "md" | "lg";

type BrandLogoProps = {
  size?: BrandLogoSize;
  className?: string;
};

const sizeClasses: Record<BrandLogoSize, { logo: string; wordmark: string }> = {
  sm: {
    logo: "h-5 w-auto",
    wordmark: "h-[14px] w-auto",
  },
  md: {
    logo: "h-6 w-auto",
    wordmark: "h-4 w-auto",
  },
  lg: {
    logo: "h-7 w-auto",
    wordmark: "h-[18px] w-auto",
  },
};

const BrandLogo = ({ size = "md", className }: BrandLogoProps) => {
  const selectedSize = sizeClasses[size];

  return (
    <span className={cn("inline-flex items-center gap-1.5 select-none", className)}>
      <Image
        src={logo}
        alt="Horizon India Technologies logo"
        className={selectedSize.logo}
        loading="eager"
      />
      <Image
        src={wordmark}
        alt="Horizon India Technologies"
        className={selectedSize.wordmark}
        loading="eager"
      />
    </span>
  );
};

export default BrandLogo;
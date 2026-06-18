"use client";

import { useState } from "react";
import { Workflow } from "lucide-react";

interface TenantLogoProps {
  src: string;
  alt: string;
  className?: string;
}

export default function TenantLogo({
  src,
  alt,
  className = "",
}: TenantLogoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <Workflow
        className={`text-cyan-300 ${className}`}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
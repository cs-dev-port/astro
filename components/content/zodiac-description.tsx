"use client";

import { usePathname } from "next/navigation";
import { zodiacSigns } from "@/lib/data/zodiacData";
import Icon from "@mdi/react";

// logic to match desc with page
export default function zodiacData() {
  const pathname = usePathname();
  const sign = zodiacSigns.find((s) => s.url === pathname);
  if (!sign || !sign.description) return null;

  return (
    <>
      <Icon path={sign.iconPath} size={1.5} className="mb-2 text-white" />
      <p className="text-lg">{sign.description}</p>
    </>
  );
}
// This component retrieves the zodiac sign from the URL path and displays its description.

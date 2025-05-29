// components/ZodiacCard.tsx
import Icon from "@mdi/react";

type ZodiacCardProps = {
  name: string;
  iconPath: string; // updated from string filename to path string from @mdi/js
  url: string;
  description: string;
  onClick?: () => void;
};

export default function ZodiacCard({
  name,
  iconPath,
  url,
  onClick,
}: ZodiacCardProps) {
  return (
    <button
      onClick={onClick}
      className=" flex flex-col p-4 hover:scale-105 transition items-center justify-center"
    >
      <Icon path={iconPath} size={1.5} className="mb-2 text-white" />
      <span className="text-sm select-none font-semibold">{name}</span>
    </button>
  );
}

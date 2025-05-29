import LogoLooper from "@/components/content/logo-looper";

type HeroProps = {
  title: string;
  welcomeMessage: string;
};

export default function Hero({ title, welcomeMessage }: HeroProps) {
  return (
    <>
      <h1 className="">{title}</h1>
      <LogoLooper />
      <h2 className="text-lg animate-pulse mt-2">{welcomeMessage}</h2>
    </>
  );
}

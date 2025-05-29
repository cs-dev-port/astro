import Hero from "@/components/content/hero";
import Nav from "@/components/content/nav";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen bg-black overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-80 z-0"
        >
          <source src="/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 text-white">
          <Nav />
          <div className="flex flex-col items-center justify-center text-white w-full max-w-md mx-auto gap-10 min-h-screen">
            <Hero
              title={"Learn About Your Zodiac"}
              welcomeMessage={"swipe & click"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

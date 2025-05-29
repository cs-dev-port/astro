import Nav from "@/components/content/nav";
import ZodiacData from "@/components/content/zodiac-description";

export default function page() {
  return (
    <>
      <div className=" bg-gradient-to-b from-blue-500 to-blue-950">
        <Nav />
        <div className="flex flex-col items-center justify-center h-screen text-white">
          <ZodiacData />
        </div>
      </div>
    </>
  );
}

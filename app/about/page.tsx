import Nav from "@/components/content/nav";

export default function Page() {
  return (
    <div className="bg-black">
      <Nav />
      <div className="max-w-3xl mx-auto p-8 text-white text-gray-900 rounded-lg shadow ">
        <h1 className="text-3xl font-bold mb-4">Project Overview</h1>
        <p className="mb-2">
          This project was created as part of a 100-day code challenge.
        </p>
        <p className="mb-6">
          <strong>Project ID:</strong> 2
          <br />
          <strong>Completion Date</strong> 5/29/2025
          <br />
          <strong>Days Remaining</strong> 71
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Learning Areas</h2>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>Props</li>
          <li>Component interlacing</li>
          <li>Dynamic rendering</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>React</li>
          <li>Next.js</li>
          <li>Vercel</li>
          <li>Tailwind CSS</li>
          <li>ShadCN</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Personal Statement</h2>
        <p className="mb-6">
          This project reinforced some core concepts and introduced new ones all
          in all a nice progression in my coding journey. I learned how to
        </p>

        <h2 className="text-2xl font-semibold mb-2">Challenges Faced</h2>
        <p className="mb-4">
          Although ShadCN made importing and setting up the image carousel on
          the landing page easy, it introduced several front-end
          issues—specifically with overflow and mobile responsiveness. Parsing
          and adjusting Tailwind styles turned out to be faster than building a
          carousel from scratch.
        </p>
        <p className="mb-4">
          Class names became a bit cumbersome to track. The next project will
          focus on abstracting Tailwind styles and adopting a firm ruleset on
          how to properly leverage them. Simillarly next project will also focus
          on proper documentation and code comments.
        </p>
        <p className="mb-6">
          About a quarter into development, it became apparent that creating 12
          individual pages (one for each astrological sign) was inefficient.
          There had to be a better way to deliver astrology facts.
        </p>
        <p>
          Enter: Dynamic Rendering! I used Next.js’s dynamic router to serve
          each page with the appropriate URL. Each page is hydrated based on the
          selected sign. By leveraging the{" "}
          <code className="bg-gray-100 px-1 rounded text-black">.find()</code>{" "}
          method, I matched the current pathname with relevant data—such as
          descriptions and icons—to dynamically populate elements.
        </p>
      </div>
    </div>
  );
}

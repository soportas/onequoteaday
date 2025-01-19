import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import Image from "next/image";
import { quotes, Quote } from "./quotes.ts";

export default function Home() {
  let currentDayIndex = 0;

  const dots = quotes.map((quote, index) => {
    currentDayIndex++;
    return <Dot key={index} type="quote" quote={quote}></Dot>;
  });

  for (let i = currentDayIndex; i < 365; i++) {
    dots.push(<Dot key={i}></Dot>);
  }

  const daysLeft = 365 - currentDayIndex;

  return (
    <div className="bg-bgColor flex flex-col gap-8 justify-items-center min-h-screen px-12 pb-8 gap-16 sm:p-20 font-[family-name:var(--font-shrikhand)]">
      <h1 className="text-neutral-700/75 text-6xl tracking-wide">
        One Quote a Day
      </h1>

      <div className="bg-neutral-500/25 rounded-2xl w-full max-h-full p-8 flex flex-row flex-wrap gap-2">
        {dots}
      </div>
      <div className="w-full">
        <p>2025</p>
        <p>{daysLeft} days left</p>
      </div>
    </div>
  );
}

interface DotProps {
  type?: string;
  quote?: Quote;
}

const Dot: React.FC<DotProps> = ({ type, quote }) => {
  if (type === "quote" && quote) {
    return (
      <Popover>
        <PopoverTrigger>
          {" "}
          <div className="w-2 h-2 bg-fuchsia-700/75 rounded-full"></div>
        </PopoverTrigger>
        <PopoverContent>
          <div>
            <p className="font-medium">{quote.date.toDateString()}</p>
            <p>{quote.quote}</p>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    return <div className="w-2 h-2 bg-neutral-500/50 rounded-full"></div>;
  }
};

/***
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}

 */

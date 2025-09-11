import { TypewriterEffect } from "./TypewriterEffect";

export function HeroText() {
  return (
    <TypewriterEffect
      className="text-2xl font-bold text-center"
      cursorClassName="text-blue-500"
      words={[
        { text: "The road to freedom starts from here", className: "text-red-500" },
      
      ]}
    />
  );
}



import { useState, useEffect } from "react";

export default function Typewriter({ text, speed = 40 }) {
  const [output, setOutput] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setOutput(text.slice(0, i));
      i++;
      if (i > text.length) {
        clearInterval(interval);
        setDone(true);     // ← typing finished
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <p className={done ? "typewriter done" : "typewriter"}>{output}</p>
  );
}

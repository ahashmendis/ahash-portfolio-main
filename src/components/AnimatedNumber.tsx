import { useEffect, useState, useRef } from "react";

interface AnimatedNumberProps {
  value: string;
}

const AnimatedNumber = ({ value }: AnimatedNumberProps) => {
  // Extract number and suffix from string like "1000+"
  const numericPart = parseInt(value.replace(/[^0-9]/g, "")) || 0;
  const suffixPart = value.replace(/[0-9]/g, "");

  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          const duration = 2000;
          const startTime = performance.now();

          const updateCount = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            if (elapsedTime < duration) {
              const progress = elapsedTime / duration;
              // ease-out cubic
              const currentVal = Math.floor(numericPart * (1 - Math.pow(1 - progress, 3)));
              setCount(currentVal);
              requestAnimationFrame(updateCount);
            } else {
              setCount(numericPart);
            }
          };

          requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [numericPart]);

  return (
    <span ref={ref}>
      {count}
      {suffixPart}
    </span>
  );
};

export default AnimatedNumber;

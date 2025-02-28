import { Chart } from "chart.js";
import { RefObject, useEffect, useState } from "react";

const useChartResize = (chartRef: RefObject<Chart | null>) => {
  const [key, setKey] = useState(0)
  useEffect(() => {
    const handleResize = () => {
      setKey(window.innerWidth); 
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { key }
}

export default useChartResize;

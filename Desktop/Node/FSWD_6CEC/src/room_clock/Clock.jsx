import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // cleanup to avoid memory leak
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock">
      <h1>{time}</h1>
    </div>
  );
};

export default Clock;

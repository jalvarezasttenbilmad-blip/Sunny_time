
import React, { useState, useEffect } from 'react';

const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
  };
  
  const formatDate = (date: Date): string => {
      return date.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  }

  return (
    <div className="flex flex-col items-center justify-center text-center text-slate-800">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight drop-shadow-lg" style={{fontVariantNumeric: 'tabular-nums'}}>
        {formatTime(time)}
      </h1>
      <p className="text-lg md:text-xl font-medium mt-2 text-slate-600 drop-shadow-sm">
        {formatDate(time)}
      </p>
    </div>
  );
};

export default Clock;

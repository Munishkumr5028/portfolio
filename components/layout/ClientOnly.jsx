"use client";  // Client component

import { useState, useEffect } from "react";

export default function Time() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    setTime(Date.now());
  }, []);

  if (!time) return null;

  return <div>Current time: {time}</div>;
}

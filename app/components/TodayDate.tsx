"use client";

import { useEffect, useState } from "react";

export default function TodayDate() {
  const [today, setToday] = useState("");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setToday(new Date().toLocaleDateString("es-AR"));
  }, []);

  return <time>{today}</time>;
}

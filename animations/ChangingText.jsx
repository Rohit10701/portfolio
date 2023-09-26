'use client';
import { useState, useEffect } from 'react';
import { TypingText } from "../components";
export default function ChangingText() {
  const [visible, setVisible] = useState(0);
  const textArray = ["Frontend", "Backend"];

  useEffect(() => {
    console.log('useEffect called');
    const interval = setInterval(() => {
      setVisible((prevCount) => (prevCount + 1) % textArray.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='text-xs'>
      <h1 className={`changing-text flex relative items-center justify-center h-[350px] z-20 text-xs`} >
        {textArray[visible]}
        </h1>
    </div>
  );
}

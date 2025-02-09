'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function AskForDate() {
  const [showSecondImage, setShowSecondImage] = useState(false);
  const [btnNoPosition, setBtnNoPosition] = useState({ top: '80%', left: '60%' });

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function handleMouseOver() {
    const containerHeight = 500; // Approximate container height
    const containerWidth = 500; // Approximate container width

    let newTop, newLeft;
    do {
      newTop = getRandomNumber(0, containerHeight - 50);
    } while (Math.abs(newTop - parseInt(btnNoPosition.top)) < containerHeight / 3);

    do {
      newLeft = getRandomNumber(0, containerWidth - 120);
    } while (Math.abs(newLeft - parseInt(btnNoPosition.left)) < containerWidth / 3);

    setBtnNoPosition({ top: `${newTop}px`, left: `${newLeft}px` });
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-yellow-300 to-orange-400 p-8">
      <Image src="/assets/date.png" alt="date?" width={600} height={200} className="drop-shadow-lg" />
      <div className="relative w-full max-w-3xl flex justify-center items-center mt-10">
        {!showSecondImage ? (
          <Image src="/assets/erm-fingers.gif" alt="please" width={175} height={175} />
        ) : (
          <Image src="/assets/oh-yay.gif" alt="yes" width={250} height={250} />
        )}
      </div>
      <div className="relative w-full max-w-3xl flex justify-center mt-6">
        {!showSecondImage && (
          <>
            <button
              className="absolute bg-white px-6 py-3 rounded shadow-lg text-xl hover:bg-gray-200 transition "
              onClick={() => setShowSecondImage(true)}
              style={{ left: '40%' }}
            >
              <span className='text-black'>
              Yes</span>
            </button>
            <button
              className="absolute bg-white px-6 py-3 rounded shadow-lg text-xl hover:bg-gray-200 transition"
              onMouseOver={handleMouseOver}
              style={{ top: btnNoPosition.top, left: btnNoPosition.left }}
            >
             <span className='text-black'>
             No</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
}

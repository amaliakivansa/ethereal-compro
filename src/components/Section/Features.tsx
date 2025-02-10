'use client';

import React, { useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CardData {
  title: string;
  description: string;
  image: string;
}

const data: CardData[] = [
  {
    title: 'Decentralized Ownership & Security',
    description:
      'Ensure true ownership of digital assets with blockchain-powered transparency and security, eliminating the risk of fraud or third-party control.',
    image: 'features-1',
  },
  {
    title: 'Fair & Transparent Value Exchange',
    description:
      'Empower artists and investors with a fair marketplace, enabling direct transactions without intermediaries, ensuring creators receive rightful value for their work.',
    image: 'features-2',
  },
  {
    title: 'Borderless Financial Freedom',
    description:
      'Break geographical barriers with a global, decentralized ecosystem that provides seamless transactions and investment opportunities, accessible to everyone, anywhere.',
    image: 'features-3',
  },
];

const Features: React.FC = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const setCardRef = useCallback((el: HTMLDivElement | null, index: number) => {
    cardsRef.current[index] = el;
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const cards = cardsRef.current.filter((card) => card !== null);
    if (cards.length === 0) return;

    const lastCardST = ScrollTrigger.create({
      trigger: cards[cards.length - 1],
      start: 'bottom bottom',
    });

    cards.forEach((card, index) => {
      if (!card) return;
      const scale = 1 - index * 0.025;

      const scaleDown = gsap.to(card, {
        scale: scale,
        ease: 'none',
      });

      ScrollTrigger.create({
        trigger: card,
        start: 'center center',
        end: () => lastCardST.start + 200,
        pin: true,
        animation: scaleDown,
        scrub: 2,
      });
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="flex flex-col justify-center w-full py-20 px-2 md:px-0">
      <h2 className="text-title text-center text-black dark:text-white mb-2">
        Our Key Features
      </h2>
      <div className="flex flex-col items-center w-full">
        {data.map((item, index) => (
          <div
            key={index}
            ref={(el) => setCardRef(el, index)}
            className="flex justify-center items-center mt-12 w-full max-w-lg md:max-w-3xl"
          >
            <div className="relative w-full h-[500px] bg-black rounded-xl shadow-lg overflow-hidden">
              <Image
                src={`/images/${item.image}.jpg`}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="absolute opacity-80 rounded-xl"
              />
              <div className="absolute bottom-4 inset-x-4 text-white p-4 bg-black/50 rounded-lg">
                <h1 className="text-2xl font-extrabold">{item.title}</h1>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="spacer w-full h-64"></div>
    </div>
  );
};

export default Features;

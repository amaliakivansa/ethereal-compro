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
    title: 'Seamless Wallet Integration',
    description:
      'Ethereal ensures a frictionless onboarding experience with one-click wallet connections (MetaMask, WalletConnect, etc.), allowing users to dive into the platform instantly.',
    image: 'features-1',
  },
  {
    title: 'Immersive UI & Smooth Animations',
    description:
      'A sleek, futuristic interface with smooth micro-interactions and dynamic motion, creating an elegant and engaging user experience.',
    image: 'features-2',
  },
  {
    title: 'Decentralized & Secure Transactions',
    description:
      'Built on smart contracts, Ethereal guarantees transparency, low fees, and instant transactions for NFT trading, staking, or DeFi operations, ensuring users have full control over their assets.',
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
    <div
      id="features"
      className="flex flex-col justify-center w-full py-20 px-2 md:px-0"
    >
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

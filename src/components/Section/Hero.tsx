'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Button from '../Base/Button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!containerRef.current || !subtitleRef.current) return;

    const words = subtitleRef.current.querySelectorAll('span');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=100%',
        scrub: 2,
        pin: true,
      },
    });

    words.forEach((word, index) => {
      tl.to(
        word,
        {
          color: '#ffcc66',
          duration: 0.3,
        },
        index * 0.15
      );
    });

    ScrollTrigger.refresh();

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const text = `Step into Ethereal, where cutting-edge design meets the power of decentralization. Whether you're an artist, collector, or DeFi enthusiast, our seamless platform empowers you with effortless wallet connectivity, smooth animations, and a futuristic experience. Discover a space where creativity and financial freedom merge like never before.`;

  const words = text.split(' ').map((word, index) => (
    <span key={index} className="text-primary">
      {word}{' '}
    </span>
  ));

  return (
    <section
      ref={containerRef}
      className="w-full h-screen flex items-center justify-center my-20"
    >
      <div className="flex md:flex-row flex-col md:justify-between items-center">
        <Image
          src="/images/hero-img.png"
          width={650}
          height={0}
          alt="background image"
          priority={true}
          className="md:w-1/2"
        />
        <div className='p-2 md:p-0'>
          <h1 className="lg:text-5xl md:text-4xl text-2xl [ text-black dark:text-white font-semibold ]">
            Discover the Future of Decentralized Art & Finance
          </h1>
          <div className="mt-2 md:mt-4">
            <p ref={subtitleRef} className="text-lg leading-relaxed">
              {words}
            </p>
          </div>
          <Button
            size="large"
            color="primary"
            onClick={() => {}}
            className="rounded-full mt-2 text-caption dark:bg-white dark:text-black"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

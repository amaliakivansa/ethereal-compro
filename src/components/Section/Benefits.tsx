'use client';
import React from 'react';
import Image from 'next/image';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';

const Benefits = () => {
  const data = [
    {
      title: 'Multiple chains, one wallet. No more switching',
      description:
        'Manage assets across multiple blockchain networks seamlessly with a single wallet—no need to switch between chains',
      img: 'wallet.svg',
    },
    {
      title: 'Seamlessly access the largest NFT marketplaces',
      description:
        'Easily explore and trade NFTs across the biggest marketplaces with a seamless and intuitive experience',
      img: 'marketplace.svg',
    },
    {
      title: 'Showcase NFT collection',
      description:
        'Highlight and display your exclusive NFT collection with an engaging and visually appealing layout. Present each digital asset with detailed descriptions, ownership history, and interactive features to enhance the viewing experience.',
      img: 'nft.svg',
    },
    {
      title: 'No limits on tokens, balances, or transactions',
      description:
        'Enjoy complete freedom with no restrictions on tokens, balances, or transactions. Manage your assets seamlessly without limits, ensuring full control over your financial activities.',
      img: 'coin.svg',
    },
  ];

  const sliderLeft = () => {
    const slider = document.getElementById('slider');
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - 350;
    }
  };

  const sliderRight = () => {
    const slider = document.getElementById('slider');
    if (slider) {
      slider.scrollLeft = slider.scrollLeft + 350;
    }
  };

  return (
    <div className="w-full h-screen overflow-x-scroll">
      <h1 className="text-title text-center text-black dark:text-white">
        Keep everything in One Place
      </h1>
      <div
        id="slider"
        className="flex overflow-x-scroll pb-10 mt-6 hide-scroll-bar scroll-smooth"
      >
        <div className="flex gap-10 lg:ml-40 md:ml-20 ml-10">
          {data.map((item, index) => (
            <div
              className="card bg-white w-96 shadow-xl mt-24 btn-hover"
              key={index}
            >
              <Image
                src={`images/${item.img}`}
                alt="wallet"
                width={75}
                height={75}
                className="ml-6 mt-6"
              />
              <div className="card-body">
                <h2 className="card-title text-secondary">{item.title}</h2>
                <p className="text-primary">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center gap-8 ">
        <div onClick={sliderLeft} className="cursor-pointer ">
          <FaLongArrowAltLeft size={50} />
        </div>

        <div onClick={sliderRight} className="cursor-pointer ">
          <FaLongArrowAltRight size={50} />
        </div>
      </div>
    </div>
  );
};

export default Benefits;

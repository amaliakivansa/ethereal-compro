import Image from 'next/image';
import React from 'react';

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
  return (
    <div className="h-screen overflow-x-scroll">
      <h1 className="text-title text-center text-black dark:text-white">
        Keep everything in One Place
      </h1>
      <div className="flex overflow-x-scroll pb-10 mt-6 hide-scroll-bar scroll-smooth">
        <div className="flex gap-10">
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
                <h2 className="card-title">{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;

'use client';
import React from 'react';
import Button from '../Base/Button';

const CTA = () => {
  return (
    <div className="flex flex-col items-center pb-16 -mt-16">
      <h1 className="text-title dark:text-white text-black font-semibold">
        Join the Future Today
      </h1>
      <p className="text-subtitle text-primary">
        Connect your wallet and explore the limitless possibilities of Web3.
      </p>
      <Button
        size="large"
        color="primary"
        onClick={() => {}}
        className="rounded-full mt-2 text-caption dark:bg-white dark:text-black dark:shadow-lg"
      >
        Connect
      </Button>
    </div>
  );
};

export default CTA;

import {FC} from 'react';

export const CTAButton: FC = () => {
  return (
    <li>
      <a
        className="
          px-lg py-md 
          font-semibold 
          flex flex-row justify-center items-center 
          bg-primary text-white 
          text-center 
          hover:text-primary rounded-full hover:bg-surface-low-hover 
          tracking-wider transition shadow-button-flat whitespace-nowrap 
          h-full
        "
        rel="noreferrer noopener"
        target="_blank"
        href="http://localhost:3000/signin"
      >
        Start Drawing
      </a>
    </li>
  );
};


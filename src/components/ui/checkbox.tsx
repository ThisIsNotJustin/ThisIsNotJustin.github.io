import React from 'react';

const Checkbox = ({ menuOpen, toggleMenu }: { menuOpen: boolean; toggleMenu: () => void }) => {
  return (
    <label className="flex flex-col gap-2 cursor-pointer relative">
      <input
        className="peer absolute w-full h-full inset-0 opacity-0 cursor-pointer"
        type="checkbox"
        onChange={toggleMenu}
        checked={menuOpen}
      />
      <div className="relative flex flex-col gap-2 w-8 h-8 justify-center">
        <div className={`rounded-2xl h-[3px] w-1/2 bg-white duration-500 ${menuOpen ? 'rotate-[225deg] -translate-x-[12px] -translate-y-[1px] origin-right' : ''}`} />
        <div className={`rounded-2xl h-[3px] w-full bg-white duration-500 ${menuOpen ? '-rotate-45' : ''}`} />
        <div className={`rounded-2xl h-[3px] w-1/2 bg-white duration-500 place-self-end ${menuOpen ? 'rotate-[225deg] translate-x-[12px] translate-y-[1px] origin-left' : ''}`} />
      </div>
      {/* fix the clickable area of the button*/}
      <style jsx>{`
        label::before {
          content: '';
          position: absolute;
          top: -20px;
          bottom: -20px;
          left: -20px;
          right: -20px;
        }
      `}</style>
    </label>
  );
};

export default Checkbox;
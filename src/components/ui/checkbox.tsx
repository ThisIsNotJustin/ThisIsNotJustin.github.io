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
      <div className="relative flex flex-col gap-2 w-8 h-8 justify-center ">
        <div className="rounded-2xl h-[3px] w-1/2 bg-black duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px] opacity-75" />
        <div className="rounded-2xl h-[3px] w-full bg-black duration-500 peer-checked:-rotate-45 opacity-75" />
        <div className="rounded-2xl h-[3px] w-1/2 bg-black duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[12px] peer-checked:translate-y-[1px] opacity-75" />
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
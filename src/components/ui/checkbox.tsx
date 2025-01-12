import React from 'react';

const Checkbox = ({ menuOpen, toggleMenu }: { menuOpen: boolean; toggleMenu: () => void }) => {
  return (
    <label className="flex flex-col gap-2 w-8 cursor-pointer">
      <input
        className="peer hidden"
        type="checkbox"
        onChange={toggleMenu}
        checked={menuOpen}
      />
      <div className="rounded-2xl h-[3px] w-1/2 bg-black duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px]" />
      <div className="rounded-2xl h-[3px] w-full bg-black duration-500 peer-checked:-rotate-45" />
      <div className="rounded-2xl h-[3px] w-1/2 bg-black duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[12px] peer-checked:translate-y-[1px]" />
    </label>
  );
};

export default Checkbox;
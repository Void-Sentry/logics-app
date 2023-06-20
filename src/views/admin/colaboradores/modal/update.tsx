import { Dispatch, memo, SetStateAction, useState } from "react";
import { BsPlus } from "react-icons/bs";
import { ModalCreate } from "./create";
import { Endpoint } from "constants/api";

interface CardMenuProps {
  entries: Record<string, any>;
  isAtt?: boolean;
  setAtt?: Dispatch<SetStateAction<boolean>>;
  endpoint?: Endpoint;
  transparent?: boolean;
}

export const CardMenu = memo<CardMenuProps>(({ endpoint, entries, transparent, isAtt, setAtt }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <button
        className="flex items-center text-xl hover:cursor-pointer bg-lightPrimary p-2 text-brand-500 hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10 linear justify-center rounded-lg font-bold transition duration-200"
        onClick={() => setOpen(!isOpen)}
      >
        <BsPlus className="h-6 w-6" />
      </button>
      {isOpen && <ModalCreate endpoint={endpoint} entries={entries} isActive={isOpen} onActive={setOpen} isAtt={isAtt} setAtt={setAtt} />}
    </>
  );
});

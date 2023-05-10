import React, { Dispatch, SetStateAction, useState } from "react";
import Dropdown from "components/dropdown";
import { AiOutlineUser } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { AiOutlineShop } from "react-icons/ai";
import { TiLightbulb } from "react-icons/ti";
import { Modal } from "components/modal";
import { ModalCreate } from "components/modal/create";

function CardMenu(props: { transparent?: boolean }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <button
        className="flex items-center text-xl hover:cursor-pointer bg-lightPrimary p-2 text-brand-500 hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10 linear justify-center rounded-lg font-bold transition duration-200"
        onClick={() => setOpen(!isOpen)}
      >
        <BsPlus className="h-6 w-6" />
      </button>
      {isOpen && <ModalCreate isActive={isOpen} onActive={setOpen} />}
    </>
  );
}

export default CardMenu;

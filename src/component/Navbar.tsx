import { ListTodo, Menu } from "lucide-react";

import { handleTheme, rootDiv, storegeValue } from "../theme.ts";
import { useEffect } from "react";

export const Navbar = () => {
  const { removeTheme, setTheme } = handleTheme();

  const handleToggle = () => {
    const classOnDiv = rootDiv?.getAttribute("class");
    classOnDiv !== "dark" ? setTheme() : removeTheme();
  };

  useEffect(() => {
    const input = document.getElementById("toogle_check") as HTMLInputElement;

    if (storegeValue === "dark") {
      rootDiv?.setAttribute("class", "dark");
      input && (input.checked = true);
    }
  }, []);

  return (
    <header className="flex items-center justify-between sm:px-16 px-5 pt-6">
      <div className="flex items-center gap-[3px] ">
        <ListTodo className="text-primary-greNew dark:text-primary-light" />
        <p className="text-xl font-monse font-semibold text-primary-greNew dark:text-primary-light">
          TD
        </p>
      </div>
      <div className="flex items-center gap-9">
        <div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              className="sr-only peer"
              value=""
              type="checkbox"
              id="toogle_check"
              onChange={handleToggle}
            />
            <div className="w-16 h-8 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute before:h-7 before:w-7 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full  peer-checked:bg-[#383838] after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[2px] after:right-1 after:translate-y-full after:w-7 after:h-7 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0"></div>
          </label>
        </div>
        <ul className="md:flex hidden items-center gap-9 font-monse text-primary-greNew dark:text-primary-light font-medium">
          <li className="cursor-pointer">TODO</li>
          <li className="cursor-pointer">ABOUT</li>
          <li className="cursor-pointer">CONTACT</li>
        </ul>
        {/* Mobile */}
        <div className="md:hidden">
          <Menu className="cursor-pointer text-primary-greNew dark:text-primary-light" />
        </div>
      </div>
    </header>
  );
};


import Link from "next/link";
import { useContext } from "react";
import { ITEMS_NAVIGATION } from "@/placeholder-data";
import { NavigationContext } from "@/context/navigation-context";

const Sidebar = (): JSX.Element => {
  const { isOpenSidebar, handleCloseSidebar } = useContext(NavigationContext);
  return (
    <>
      <div
        className={`fixed w-full h-full overflow-hidden justify-center bg-primary text-white grid pt-[120px] left-0 z-10 transition-all duration-500 ease-in-out ${
          isOpenSidebar ? "opacity-100 top-0" : "opacity-0 -top-full"
        }`}
      >
        <div className="flex flex-col gap-10 items-center text-2xl justify-between p-10">
          <ul className="flex flex-col gap-3 text-center leading-relaxed">
            {ITEMS_NAVIGATION.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={item.href} onClick={handleCloseSidebar}>
                    <p>{item.text}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
          <h1 className="font-extrabold">LOGIPORT S.R.L.</h1>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

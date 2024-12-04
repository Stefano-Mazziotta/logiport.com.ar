import Link from "next/link";
import { useContext } from "react";
import { ITEMS_NAVIGATION } from "@/placeholder-data";
import { NavigationContext } from "@/context/navigation-context";
import { Camera, Linkedin } from "lucide-react";

const Sidebar = (): JSX.Element => {
  const { isOpenSidebar, handleCloseSidebar } = useContext(NavigationContext);
  return (
    <>
      <div
        className={`fixed left-0 z-40 grid h-full w-full justify-center overflow-hidden bg-foreground pt-[120px] text-white transition-all duration-500 ease-in-out ${
          isOpenSidebar ? "top-0 opacity-100" : "-top-full opacity-0"
        }`}
      >
        <section className="flex flex-col items-center justify-between gap-10 p-10 text-2xl">
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
        </section>
      </div>
    </>
  );
};

export default Sidebar;

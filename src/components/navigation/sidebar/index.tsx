import Link from "next/link";
import { ITEMS_NAVIGATION } from "@/placeholder-data";
import { useContext } from "react";
import { NavigationContext } from "@/context/navigation-context";

const Sidebar = (): JSX.Element => {
  const { isOpenSidebar, handleCloseSidebar } = useContext(NavigationContext);
  return (
    <>
      <div
        className={`sidebar-container fixed w-full h-full overflow-hidden justify-center bg-primary text-white grid pt-[120px] left-0 z-10 transition-all duration-500 ease-in-out ${
          isOpenSidebar ? "opacity-100 top-0" : "opacity-0 -top-full"
        }`}
      >
        <ul className="sidebar-nav text-center leading-relaxed text-xl">
          <li>
            <Link href="#about" onClick={handleCloseSidebar}>
              <p>About Us</p>
            </Link>
          </li>
          <li>
            <Link href="#services" onClick={handleCloseSidebar}>
              <p>Services</p>
            </Link>
          </li>
          <li>
            <Link href="#contacts" onClick={handleCloseSidebar}>
              <p>Contacts</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;

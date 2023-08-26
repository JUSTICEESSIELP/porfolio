import { FC, ReactElement, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { MdClose, MdMenu } from "react-icons/md";
import { useTheme } from "next-themes"; // Import the useTheme hook

type NavItem = {
  label: string;
  pageName: string;
};

const Navbar: FC = (): ReactElement => {
  const navItems: NavItem[] = [
    { label: "Home", pageName: "home" },
    { label: "About", pageName: "about" },
    { label: "Projects", pageName: "projects" },
    { label: "Book Me", pageName: "bookCall" },
    // Add more items as needed
  ];

  const { theme, setTheme } = useTheme(); // Get the current theme and setTheme function
  const [navbar, setNavbar] = useState<boolean>(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const themeClass = theme === "dark" ? "bg-#020617-950 " : "bg-white ";

  const themeIcon = theme === "dark" ? <FiSun /> : <FiMoon />;

  return (
    <header
      className={`${themeClass}  w-full mx-auto p-4 fixed top-0 z-20 shadow`}
    >
      <nav className="md:flex md:items-center justify-between">
        <div className="flex items-center justify-between py-3  md:py-5 md:block">
          <a href="#">
            <h2 className="text-2xl font-bold">Prince Justice</h2>
          </a>
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? <MdClose size={30} /> : <MdMenu size={30} />}
            </button>
          </div>
        </div>

        <div className="md:block flex flex-col  items-center">
          <ul
            className={`md:flex md:space-x-8 md:space-y-0 space-y-6 ${
              navbar ? "block md:p-0  md:p-3" : "hidden"
            } `}
          >
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.pageName}`}
                  className={`text-${themeClass}-link hover:underline`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <div onClick={toggleTheme} className={`cursor-pointer text-xl`}>
              {themeIcon}
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

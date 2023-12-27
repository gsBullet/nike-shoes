import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constant";

function Nav() {
  return (
    <header className="padding-x py-8 absolute w-full z-10">
      <nav className="flex justify-between items-center max-container">
        
          <a href="/">
            <img src={headerLogo} alt="Nike" width={120} height={29} />
          </a>
        
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item, i) => (
              <li key={item.label}>
                <a
                  className="fonts-montserrat leading-normal text-lg text-slate-gray"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt={hamburger} width={25} height={25} />
        </div>
      </nav>
    </header>
  );
}

export default Nav;

import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className=" flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={24}></Image>
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:scale-110 duration-250 hover:text-black"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      <Image
        src="menu.svg"
        width={32}
        height={32}
        alt="menu"
        className="inline-block cursor-pointer lg:hidden"
      ></Image>
    </nav>
  );
};

export default Navbar;

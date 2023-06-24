"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type Props = {
  path: string;
  text: string;
  className?: string;
};

const NavLink = ({ path, text, className, ...props }: Props) => {
  const pathname = usePathname();

  return (
    <>
      <Link
        className={`${
          !className
            ? `${
                pathname == path
                  ? "bg-[#232967] rounded-md w-full "
                  : " border-transparent"
              } py-2.5 transition-all ease-in relative`
            : className
        }`}
        href={path}
        {...props}
      >
        <div 
        className={`${
            !className
              ? `${
                  pathname == path
                    ? "h-[50px] absolute right-0 -top-1.5 w-1 bg-[#FC1818] rounded-sm "
                    : " bg-transparent"
                } absolute`
              : className
          }`}
        />
        <Image
          src={text}
          className="mx-auto"
          alt="lang"
          key={path}
          width={19}
          height={20}
          //   priority
        />
      </Link>
    </>
  );
};

export default NavLink;

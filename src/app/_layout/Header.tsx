"use client";
import LogoSvg from "@public/images/logo.png";
import Menu from "../../../public/svg/menu.svg";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ButtonAnimation } from "../../components/ButtonAnimation";
import cn from "@/utils/tailwind";
import LocationSvg from "@/components/svg/LocationSvg";

const header = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];
const Header = () => {
  const [open, setOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 93) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div
      className={cn(
        "w-full relative z-[1000] bg-blue-900 container-max mx-auto",
        isSticky && " pb-[4rem]"
      )}
    >
      <div className="flex flex-col justify-center ~leading-[0.9rem]/[1.2rem]  ~text-[0.6rem]/[0.9rem] font-medium gap-[1rem] items-center md:flex-row ~py-[0.4rem]/[0.8rem] z-[1000]">
        <div className="flex justify-center gap-[0.625rem] items-center text-white">
          <LocationSvg className="~size-[0.8rem]/[1rem] text-white" />
          Doha, Qatar
        </div>
      </div>
      <div
        className={cn(
          "w-full bg-white sticky top-0 z-[1000] px-[1.62rem] py-[0.35rem] md:px-[7rem] md:py-[0.5rem]",
          isSticky
            ? "fixed top-0 left-0 z-50 shadow-md mb-[5rem] ~pt-0/[2rem]"
            : "relative"
        )}
      >
        <div className="flex items-center justify-between">
          <Link
            prefetch={false}
            className="pr-[4rem] text-white xs:pr-[5rem] md:pr-0"
            href="/"
          >
            <Image src={LogoSvg } alt="image" className=" md:w-[10rem]  h-[4rem] w-[8.8rem] object-cover"/>
            {/* <h2 className=" text-2xl font-bold text-darkBlue pr-[4rem] pt-[0.22rem] md:h-[1.8rem] flex items-center md:pr-0 md:pt-0 lg:h-[4rem]  " >Homez Style</h2> */}
            
          </Link>
          {!open && (
            <ButtonAnimation onClick={toggle}>
              <Menu className="block md:hidden size-[1.8rem]" />
            </ButtonAnimation>
          )}
          <div className="md:flex gap-[3rem] text-white hidden ">
            {header.map((item, i) => (
              <Link key={i} prefetch={false} href={item.link}>
                <ButtonAnimation className="text-darkBlue  font-poppins text-body-large font-medium  text-BlueColor md:block md:py-[0.3rem] lg:py-[0.4rem]">
                  {item.name}
                </ButtonAnimation>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {open && (
        <div className="fixed inset-0  z-[1000] grid grid-cols-4">
          <div onClick={toggle} className="bg-transparent col-span-2"></div>
          <div className="col-span-2 bg-blue-900 md:hidden gap-[1.5rem] text-white flex flex-col text-center pt-[5rem] ">
            {header.map((item, i) => (
              <Link key={i} prefetch={false} href={item.link}>
                <ButtonAnimation
                  onClick={toggle}
                  className="text-white  font-poppins text-body-large font-medium  hover:text-BlueColor md:block md:py-[0.3rem] lg:py-[0.4rem]"
                >
                  {item.name}
                </ButtonAnimation>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

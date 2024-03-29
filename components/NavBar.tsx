import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from 'next-i18next'

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import NavLogo from "../public/images/logo_nav.png";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const navItems = [
  {
    name: "menu.home",
    link: "/",
    active: true,
  },
  {
    name: "menu.about",
    link: "/about",
    active: true,
  },
  {
    name: "menu.projects",
    link: "/projects",
    active: true,
  },
  {
    name: "menu.contact",
    link: "/contact",
    active: true,
  },
  {
    name: "Writing",
    link: "/writing",
    active: false,
  },
];

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [isHoveredList, setIsHoveredList] = useState(
    new Array(navItems.length).fill(false)
  );
  const { t } = useTranslation('common')
  const [currentLink, setCurrentLink] = useState(0);
  const handleNav = () => {
    setNav(!nav);
  };
  const router = useRouter();
  const { locale } = router;
  useEffect(() => {
    const newCurrentLink = navItems.findIndex(
      (item) => item.link === router.pathname
    );
    if (currentLink !== newCurrentLink && newCurrentLink !== -1) {
      setCurrentLink(newCurrentLink);
    }
  }, [router.pathname]);

  const handleLocaleChange = (event: { target: { value: any } }) => {
    const value = event.target.value;

    router.push(router.route, router.asPath, {
      locale: value,
    });
  };
  return (
    <div className="z-20 flex p-2 bg-primary text-tertiary h-[100px]">
      <div className="flex items-center">
        <Image
          src={NavLogo}
          alt="PCL Logo"
          width={75}
          height={75}
          className="mr-4"
        />
        <span className="font-bold text-2xl">Carlos Loja</span>
        <select
          className="ml-4 text-tertiary font-bold px-2 bg-primary rounded py-2 cursor-pointer md:flex hidden"
          onChange={handleLocaleChange}
          value={router.locale}
        >
          <option value="en-US">English</option>
          <option value="es-ES">Español</option>
        </select>
      </div>

      <div className="flex-auto flex justify-end items-center">
        <ul className="md:flex hidden">
          {navItems.map((item, index) => (
            <Link
              onMouseEnter={
                isHoveredList[index]
                  ? () => { }
                  : () => {
                    const newIsHoveredList = [...isHoveredList];
                    newIsHoveredList[index] = true;
                    setIsHoveredList(newIsHoveredList);
                  }
              }
              onMouseLeave={
                isHoveredList[index]
                  ? () => {
                    const newIsHoveredList = [...isHoveredList];
                    newIsHoveredList[index] = false;
                    setIsHoveredList(newIsHoveredList);
                  }
                  : () => { }
              }
              onClick={() => setCurrentLink(index)}
              key={index}
              className={`${!item.active ? "hidden" : ""
                } mr-8 text-xl font-semibold ${isHoveredList[index] || currentLink === index
                  ? "text-secondary"
                  : ""
                }`}
              href={item.link}
            >
              {t(item.name)}
            </Link>
          ))}
        </ul>
        <div
          className="text-secondary font-bold px-8 border-2 rounded py-2 cursor-pointer md:flex hidden"
          onClick={() => {
            if (locale === "en-US") {
              window.open("/resume.pdf", "_blank");
            }
            else {
              window.open("/resume_es.pdf", "_blank");
            }
          }}
        >
          {t("menu.resume")}
        </div>

        {/* Hamburger Icon */}
        <div
          style={{ color: `rgb(var(--color-secondary))` }}
          onClick={handleNav}
          className="md:hidden cursor-pointer"
        >
          <AiOutlineMenu size={30} />
        </div>
      </div>

      <div
        className={
          nav
            ? "z-20 md:hidden fixed left-0 top-0 w-full h-screen backdrop-blur-sm	"
            : ""
        }
      >
        <div
          className={
            nav
              ? "shadow-inner fixed right-0 top-0 w-[65%] text-right sm:w-[60%] md:w-[45%] h-screen bg-primary p-10 ease-in duration-500"
              : "fixed right-[-100%] h-screen top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div
              style={{ color: `rgb(var(--color-secondary))` }}
              onClick={handleNav}
              className="cursor-pointer flex justify-end mb-32"
            >
              <AiOutlineClose size={30} />
            </div>
            <div className="flex flex-col items-end">
              <ul className="flex flex-col items-end">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    onClick={() => setCurrentLink(index)}
                    className={`${!item.active ? "hidden" : ""
                      } mr-8 text-3xl font-semibold mb-8
                    ${isHoveredList[index] || currentLink === index
                        ? "text-secondary"
                        : ""
                      }
                    `}
                  >
                    <div onClick={() => setNav(false)}>{t(item.name)}</div>
                  </Link>
                ))}
              </ul>
              <div className="w-[70%] mt-16">
                <div
                  className="text-secondary font-bold px-4 border-2 rounded py-4 cursor-pointer text-center"
                  onClick={() => {
                    if (locale === "en-US")
                      window.open("/resume.pdf", "_blank");
                    else {
                      window.open("/resume_es.pdf", "_blank");
                    }
                  }}
                >
                  {t("menu.resume")}
                </div>
              </div>
              <select
                className="ml-4 mt-8 text-tertiary font-bold px-2 bg-primary rounded py-2 cursor-pointer flex md:hidden"
                onChange={handleLocaleChange}
                value={router.locale}
              >
                <option value="en-US">English</option>
                <option value="es-ES">Español</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import logo from "../public/assets/logo.png";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkBg, setLinkBg] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (router.asPath === "/netflixUI" || router.asPath === "/quoteMachine") {
      setNavBg("transparent");
      setLinkBg("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkBg("#1f2937");
    }
  }, [router]);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) setShadow(true);
      else setShadow(false);
    };

    window.addEventListener("scroll", handleShadow);
  }, []);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image src={logo} alt="themrdee" width="125" height="50" />
        </Link>
        <div>
          <ul style={{ color: `${linkBg}` }} className="hidden md:flex">
            <Link href="/#home">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div
            onClick={toggleNav}
            className="md:hidden cursor-pointer hover:scale-110 duration-300 ease-in"
          >
            <AiOutlineMenu size={20} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex items-center justify-between">
              <Link href="/">
                <Image
                  onClick={() => setNav(false)}
                  src={logo}
                  alt="themrdee"
                  width="87"
                  height="35"
                />
              </Link>
              <div
                onClick={toggleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ease-in duration-300 hover:scale-105"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's create great things together!
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/#home">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#004aad] font-bold">
                Let's work together
              </p>
              <div className="flex justify-between items-center w-full sm:w-[80%] my-4">
                <a href="https://www.linkedin.com/in/senyo-dedoo/">
                  <div className="text-[#004aad] rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ease-in duration-300 hover:scale-105">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a href="https://github.com/themrdee8">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ease-in duration-300 hover:scale-105">
                    <FaGithub />
                  </div>
                </a>
                <a href="https://x.com/theonemrdee?s=21&t=YPYlECFd-OyBj4g5NUySHQ">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ease-in duration-300 hover:scale-105">
                    <FaXTwitter />
                  </div>
                </a>
                <a href="https://instagram.com/themrdee?igshid=MmVlMjlkMTBhMg%3D%3D&utm_source=qr">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ease-in duration-300 hover:scale-105">
                    <FaInstagram />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import contact from "@/public/assets/contact.jpg";
import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="uppercase font-semibold tracking-widest text-[#004aad] text-lg">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={contact}
                  alt="laptop"
                />
              </div>
              <div>
                <h2 className="py-2">Senyo Dedoo</h2>
                <p>Software Engineer</p>
                <p className="py-4">
                  I am available for part-time and freelance opportunities.
                  Contact me let&apos;s get in touch.
                </p>
              </div>
              <div>
                <p className="pt-12 uppercase text-gray-600 font-semibold">
                  Connect with me
                </p>
                <div className="flex items-center justify-between py-4">
                  <a href="https://www.linkedin.com/in/senyo-dedoo/">
                    <div className="text-[#004aad] rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer ease-in duration-300 hover:scale-105">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a href="https://github.com/themrdee8">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer ease-in duration-300 hover:scale-105">
                      <FaGithub />
                    </div>
                  </a>
                  <a href="https://x.com/theonemrdee?s=21&t=YPYlECFd-OyBj4g5NUySHQ">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer ease-in duration-300 hover:scale-105">
                      <FaXTwitter />
                    </div>
                  </a>
                  <a href="https://instagram.com/themrdee?igshid=MmVlMjlkMTBhMg%3D%3D&utm_source=qr">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer ease-in duration-300 hover:scale-105">
                      <FaInstagram />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-auto shadow-xl shadow-gray-400 col-span-3 rounded-xl lg:p-4">
            <div className="p-4">
              <form
                action="https://getform.io/f/0b7f9cb9-7a44-4562-9a15-9e17e2d9b9e3"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="grid md:grid-cols-2 gap-4 py-2 w-full">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="Name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="Phone Number"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="Email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="Subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    name="Message"
                    cols={30}
                    rows={10}
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-200 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="#home">
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer ease-in duration-300 hover:scale-105">
              <HiOutlineChevronDoubleUp className="text-[#004aad]" size={25} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;

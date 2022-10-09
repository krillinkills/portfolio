import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { IoLocation } from 'react-icons/io5';
import { AiOutlineMail } from 'react-icons/ai';

function Resume() {
  return (
    <div className="w-full h-screen  text-gray-300 flex justify-center shadow-md ">
      <div className="w-[1600px] flex flex-col mt-40 bg-white">
        <div className="h-56 bg-gray-300 text-black">
          <div className="mx-16 mt-10 flex">
            <div>
              <h1 className="text-6xl font-bold ">Vaibhav Shirpurkar</h1>
              <p className="text-4xl mt-5"># Fullstack Developer</p>
              <div className="flex mt-5">
                <FaLinkedin className="mt-1" />
                <p className="ml-2"> @vaibhavshirpurkar</p>
              </div>
            </div>
            <div>
              <div className="flex ml-[650px] mt-24 text-lg">
                <IoLocation className="mt-1" />
                <p className="ml-2 ">Mumbai/Remote</p>
              </div>
              <div className="flex ml-[650px] mt-2 text-lg">
                <AiOutlineMail className="mt-1" />
                <p className="ml-2">beingvaibhav858@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-20 mt-8  text-black">
          <p className="text-xl">
            Hi, I am Full stack Developer and Enthusiast about new technology.
            Currently learning AI and Data Analytics.
          </p>
          <div className="flex mt-8 text-lg">
            <p className="font-bold ">Github:</p>
            <p className="ml-4">github.com/krillinkills</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;

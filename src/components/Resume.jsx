import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

function Resume() {
  return (
    <div className="w-full h-screen  text-gray-300 flex justify-center  ">
      <div className="w-[1600px] flex flex-col mt-40 bg-white">
        <div className="h-56 bg-gray-300 text-black">
          <div className="mx-16 mt-10">
            <h1 className="text-6xl font-bold ">Vaibhav Shirpurkar</h1>
            <p className="text-4xl mt-5"># Fullstack Developer</p>
            <div className="flex mt-5">
              <FaLinkedin className="mt-1" />
              <p className="ml-2"> @vaibhavshirpurkar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;

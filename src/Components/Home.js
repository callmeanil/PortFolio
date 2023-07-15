import React from 'react';
import heroImage from '../assest/heroImage.png';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 >
           
            <TypeAnimation className="text-4xl sm:text-7xl font-bold text-white"
              sequence={[
                // Same substring at the start will only be typed out once, initially
               " I'm a Frontend Developer" ,
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                " I'm a backend Developer",
                1000,
                " I'm a Fullstack Developer",
                1000,
                // 'We produce food for Chinchillas',
                // 1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have knowledge of building and designing software. Currently, I love to work with web applications using technologies like React, Tailwind, and JavaScript.
          </p>

          <div> 
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={heroImage}
            alt="My Profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

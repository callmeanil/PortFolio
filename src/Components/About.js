import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 max-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 mx-20">
            About
          </p>
        </div>

        <p className="text-xl  mt-0 mx-20 ">
          I'm a fourth-year CSE student specializing in full-stack development.
          Proficient in HTML, CSS, JavaScript, React, and Node.js. Experienced
          in collaborative projects, seeking to create impactful applications.
          Passionate about continuous learning and open to collaborations.
        </p>
        <br />
        <p className="text-xl  mt-10 mx-20">
         
        </p>
      </div>
    </div>
  );
};

export default About;

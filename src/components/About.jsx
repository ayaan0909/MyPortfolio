import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I am a fresher developer, I bring a blend of technical proficiency a strong work ethic, a passion for learning, and a collaborative mindset.  My enthusiasm for collaboration shines through as I thrive in team environments. I am an effective communicator, able to convey technical concepts to both technical and non-technical stakeholders. My positive attitude and willingness to learn make me a valuable asset to any development team.
        </p>

        <br />

        <p className="text-xl pt-10">
        My educational background, which  includes a degree in computer science , has provided me with a strong theoretical understanding of software development concepts along with hands-on experience with various programming languages, such as Java, Python, C++, or JavaScript, and I will continue to expand my knowledge by exploring new technologies and frameworks.
        My dedication to excellence, coupled with  natural problem-solving abilities, positions me as a promising talent ready to embark on a successful career in software development.
        </p>
      </div>
    </div>
  );
};

export default About;

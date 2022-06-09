import React from 'react';
import img from '../assets/my-bg.png';

const About = () => {
  return (
    <div className='flex flex-col sm:flex-row mx-40 justify-center items-center text-gray-100'>
      <div className='w-full ml-20' >
        <h4 className='text-xl'>Hello,</h4>
        <h1 className='text-4xl font-robotoslab font-bold my-5'>I am Mohammed Abu Hanifa</h1>
        <p className='text-xl'>
          I am a Jr MERN Stack Web Developer. I have a passion for building
          beautiful and functional web applications. I have a good
          understanding of the React JS and I am always looking to learn
          new technologies.
        </p>
        <a className='btn btn-light my-5'  href="https://drive.google.com/file/d/1UWYCKR3MCUNAMLSDeZpZCc7uNKIb7Ixp/view" target="_blank" rel="noopener noreferrer">Download Resume</a>
      </div>
      <div className='w-full p-40'>
        <img className='object-cover rounded-xl' src={img} alt="" />
      </div>
    </div>
  );
};

export default About;
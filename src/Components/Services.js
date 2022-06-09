import React from 'react';
import html from '../assets/html.png';
import mern from '../assets/mern.png';
import react from '../assets/react.png';


const Services = () => {
    return (
        <>
        <h1 className='text-3xl'>Services</h1>
        <div className='flex justify-center text-white mx-20 items-center p-20'>
            
            <div className='w-80 mx-auto shadow-xl rounded'>
            <img className='w-80 h-80 object-cover rounded' src={ html} alt="" />
            <div className='p-3'>
            <h2 className='text-2xl'>Static Website.</h2>
            <p className='py-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusantium sit labore nulla quas sapiente voluptatem officiis quo. Neque, quisquam exercitationem soluta fuga eaque rem.
            </p>
            <div className='text-xs'>
                <span className='p-1 border mr-2'>HTML</span>
                <span className='p-1 border mr-2'>CSS</span>
                <span className='p-1 border mr-2'>JAVASCRIPT</span>
            </div>
            </div>
            

            </div>
            <div className='w-80 mx-auto rounded'>
            <img className='w-80 h-80 object-cover rounded' src={react} alt="" />
            <div className='p-3'>
            <h2 className='text-2xl'>Single Page Application</h2>
            <p className='py-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusantium sit labore nulla quas sapiente voluptatem officiis quo. Neque, quisquam exercitationem soluta fuga eaque rem.
            </p>
            <div className='text-xs'>
                <span className='p-1 border mr-2'>React</span>
                <span className='p-1 border mr-2'>React-Router</span>
                <span className='p-1 border mr-2'>Firebase</span>
            </div>
            </div>
            

            </div>
            <div className='w-80 mx-auto rounded'>
            <img className='w-80 h-80 object-cover rounded' src={mern} alt="" />
            <div className='p-3'>
            <h2 className='text-2xl'>Web Application</h2>
            <p className='py-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusantium sit labore nulla quas sapiente voluptatem officiis quo. Neque, quisquam exercitationem soluta fuga eaque rem.
            </p>
            <div className='text-xs'>
                <span className='p-1 border mr-2'>MongoDB</span>
                <span className='p-1 border mr-2'>Express JS</span>
                <span className='p-1 border mr-2'>React</span>
                <span className='p-1 border mr-2'>Node JS</span>
            </div>
            </div>
            

            </div>
        </div>
        </>
    );
};

export default Services;
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCross } from "react-icons/im";
const Navbar = () => {
  let [open,setOpen]=useState(false);
    return (
      <div className='shadow-md top-0 left-0 text-gray-100'>
      <div className='md:flex items-center justify-between py-4 md:px-20 px-7'>
      <div className='font-bold text-2xl font-hahmlet'> Mohammed Abu Hanifa</div>
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden transition ease-in-out delay-100'>
      {open?<ImCross/>:<AiOutlineMenu/>}
      </div>
      <div>
          <nav>
          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-500px]'}`}>

      <li className='md:ml-8 text-xl md:my-0 my-7'>
      <a href='/' className='text-gray-100 hover:text-gray-400 duration-500'>Home</a>
      </li>
      <li className='md:ml-8 text-xl md:my-0 my-7'>
      <a href='/' className='text-gray-100 hover:text-gray-400 duration-500'>About</a>
      </li>
      <li className='md:ml-8 text-xl md:my-0 my-7'>
      <a href='/' className='text-gray-100 hover:text-gray-400 duration-500'>Contact</a>
      </li>
  
      </ul>
      </nav>
      </div>
      </div>
  </div>
    );
};

export default Navbar;
// import html from '../assets/html.png';
// import mern from '../assets/mern.png';
// import react from '../assets/react.png';
import { FaServer } from "react-icons/fa";
import { IoIosApps } from "react-icons/io";
import { MdWeb } from "react-icons/md";


const Services = () => {
    return (
        <>
        <h1 className='text-3xl'>Services</h1>
        <div className='flex justify-center text-white mx-20 text-center p-20'>
            
            <div className='w-96  mx-auto shadow-xl rounded p-2'>
            {/* <img className='w-80 h-80 object-cover rounded' src={ html} alt="" /> */}
            <p className="text-[100px] w-96 flex items-center justify-center p-5"><span><MdWeb/></span> </p>
            <div className='p-3'>
            <h2 className='text-2xl'>Static Website.</h2>
            <p className='py-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusantium sit labore nulla quas sapiente voluptatem officiis quo. Neque, quisquam exercitationem soluta fuga eaque rem.
            </p>
            <div className='text-xs font-nanum'>
                <span className='p-2 rounded-lg mr-2 text-[#DD4B25] bg-[#dd4a253f]'># HTML</span>
                <span className='p-2 rounded-lg mr-2 text-[#254BDD] bg-[#254add46]'># CSS</span>
                <span className='p-2 rounded-lg mr-2 text-[#EFD81D] bg-[#efd61d38]'># JAVASCRIPT</span>
            </div>
            </div>
            

            </div>
            <div className='w-96 mx-auto shadow-xl rounded p-2'>
            {/* <img className='w-80 h-80 object-cover rounded' src={react} alt="" /> */}
            <div className="text-[100px] w-96 flex items-center justify-center p-5"><IoIosApps/> </div>
            <div className='p-3'>
            <h2 className='text-2xl'>Single Page Application</h2>
            <p className='py-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusantium sit labore nulla quas sapiente voluptatem officiis quo. Neque, quisquam exercitationem soluta fuga eaque rem.
            </p>
            <div className='text-xs font-nanum'>
                <span className='p-2 rounded-lg mr-2 text-[#5ED3F3] bg-[#5ed3f333]'># REACT</span>
                <span className='p-2 rounded-lg mr-2 text-[#C03F41] bg-[#c03f4131]'># REACT-ROUTER</span>
                <span className='p-2 rounded-lg mr-2 text-[#F2C028] bg-[#f2bf2833]'># FIREBASE</span>
            </div>
            </div>
            

            </div>
            <div className='w-96 mx-auto shadow-xl rounded p-2'>
            {/* <img className='w-80 h-80 object-cover rounded' src={mern} alt="" /> */}
            <div className="text-[100px] w-96 flex items-center justify-center p-5">< FaServer/> </div>
            <div className='p-3'>
            <h2 className='text-2xl'>Web Application</h2>
            <p className='py-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusantium sit labore nulla quas sapiente voluptatem officiis quo. Neque, quisquam exercitationem soluta fuga eaque rem.
            </p>
            <div className='text-xs font-nanum'>
                <span className='p-2 rounded-lg mr-2 text-[#0FA14C] bg-[#0fa14c27]'># MONGODB</span>
                <span className='p-2 rounded-lg mr-2 text-[#2EA1FF] bg-[#2ea1ff27]'># EXPRESS JS</span>
                <span className='p-2 rounded-lg mr-2 text-[#5ED3F3] bg-[#5ed3f336]'># REACT </span>
                <span className='p-2 rounded-lg mr-2 text-[#6FAE54] bg-[#6fae543a]'># NODE JS</span>
            </div>
            </div>
            

            </div>
        </div>
        </>
    );
};

export default Services;
import React from 'react';
import { Link } from 'react-router-dom';

const gradientBackground = "linear-gradient(#6EB3CB, #408BA4)";
const logoImageUrl = "https://imgs.search.brave.com/ugR9DJ3OF2facjPF2tvSXRaH1WxryXB-9ZKqmZuThB0/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vMi8yMy9M/b2dvX0JLX0Jpcmxh/X0luc3RpdHV0ZV9v/Zl9FbmdpbmVlcmlu/Z18lMjZfVGVjaG5v/bG9neV9QaWxhbmku/cG5n";
const userImageUrl = "https://imgs.search.brave.com/dkQi97-rYQhw1wdgsj9nTgGIJr--HpZCsNM7MqBC88Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vZmljL2lt/YWdlcy9pY29ucy82/MS9kcmFnb25fc29m/dC81MTIvdXNlci5w/bmc_Zm10";

export const Header = () => {
  return (
        <div   style={{ background: '#005f99'  }} className=" text-white  p-5 shadow-md flex col justify-between ">
          <ul>
          <li className='flex text-2xl items-center md:items-end lg:items-end xl:items-end font-bold'>
              <Link to="/" className="hover:text-teal-300 transition duration-300">
                <img src={logoImageUrl} alt="Logo" className="mtransform hover:scale-110 transition-transform duration-300 ax-h-11 md:max-h-8 lg:max-h-8 xl:max-h-8" />
              </Link><h1 className='ml-2'> BKBIET PLACEMENT CELL</h1>
            </li>
          </ul>
          <ul className="flex  flex-col md:flex-row lg:flex-row xl:flex-row justify-end gap-20 items-center space-y-4 md:space-y-0 lg:space-y-0 xl:space-y-0  text-3xl md:text-base lg:text-base xl:text-base">        

          <li className=' hover:font-bold relative group text-2xl items-center md:items-end lg:items-end xl:items-end cursor-pointer hover:text-teal-300'>
      Statistics
      <div className='hidden group-hover:block absolute top-full left-1/2 transform -translate-x-1/2 p-2 bg-white border obrder-blue-500 rounded-md w-[300%] text-white '  style={{ background: '#005f99'  }} >
        <ul className='list-none'>
          <li className='hover:text-teal-300 hover:font-bold'>       
             <Link to='/session-2023'>Session 2023</Link>
          </li>
          <li className='hover:text-teal-300 hover:font-bold'>
          <Link to='/session-2022'>Session 2022</Link>            </li>
          <li className='hover:text-teal-300 hover:font-bold'>
          <Link to='/session-2021'>Session 2021</Link>            </li>
        </ul>
      </div>
    </li>

            <li className='flex text-2xl justify-center items-end'>
              <Link to="/students" className="hover:text-teal-300 transition duration-300 hover:font-bold">Students</Link>
            </li>
            <li className='flex text-2xl justify-center items-end'>
              <Link to="/companies" className="hover:text-teal-300 transition duration-300 hover:font-bold">Companies</Link>
            </li>
           
            <li className='flex text-2xl   items-center md:items-end lg:items-end xl:items-end'>
              <Link to="/login" className="hover:text-teal-300 transition duration-300 max-h-11 md:max-h-8 lg:max-h-8 xl:max-h-8">
                <img src={userImageUrl} alt="Logo" className="max-h-11 md:max-h-8 lg:max-h-8 xl:max-h-8" />
              </Link>
            </li>

          </ul>
      </div>
  );
};


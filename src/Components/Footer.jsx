import React from "react";
import { Link } from "react-router-dom";


export const Footer = () => {

  const openBrochureLink = () => {
    window.open("https://bkbiet.ac.in/wp-content/uploads/2022/04/BKBIET-Brochure-2022.pdf", "_blank");
    // "_blank" opens the link in a new tab/window
  };
  return (
    <div style={{ background: '#005f99' }} className="min-w-full text-white py-8 mt-8 p-5 flex justify-between">
 <div className="flex flex-col items-start w-[20%]">
        <h1 className="font-bold text-2xl mt-2">Contact Us</h1>
        <p>BKBIET Pilani</p>
        <p>CSIR CEERI Road ,Pilani</p>
        <p>Pilani - 333031</p>
        <p>Email: placements@bkbiet.ac.in</p>
      </div>

      {/* Left side */}
      <ul className="flex justify-start space-x-4 w-[60%] gap-20">
        <li className="footer-col flex flex-row items-center">
          <img
            src="https://placements.iiitl.ac.in/static/media/ritu.efd58a6e.jpg"
            alt="Ritu"
            className="footer-img"
          />
          <div className="ml-4">
            <h1 className="font-bold text-lg">Name</h1>
            <p>Placement Coordinator</p>
            <p>+91 9403948591</p>
            <p>placement@bkbiet.ac.in</p>
          </div>
        </li>

        <li className="footer-col flex flex-row items-center">
          <img
            src="https://placements.iiitl.ac.in/static/media/ravikanth.7fccf66c.jpeg"
            alt="Ravikanth"
            className="footer-img"
          />
          <div className="ml-4">
            <h1 className="font-bold text-lg">Name</h1>
            <p>Placement Coordinator</p>
            <p>+91 9403948591</p>
            <p>placement@bkbiet.ac.in</p>
          </div>
        </li>

        <li className="footer-col flex flex-row items-center">
          <img
            src="https://placements.iiitl.ac.in/static/media/ravikanth.7fccf66c.jpeg"
            alt="Ravikanth"
            className="footer-img"
          />
          <div className="ml-4">
            <h1 className="font-bold text-lg">Name</h1>
            <p>Placement Coordinator</p>
            <p>+91 9403948591</p>
            <p>placement@bkbiet.ac.in</p>
          </div>
        </li>
      </ul>


      {/* Right side */}
      
        <ul className="flex flex-col items-end gap-2 w-[20%] pr-[6rem]">
          <h1 className="font-bold text-2xl">Links</h1>
          <li>
            <Link
              to="/about-us"
              className="hover:text-teal-300 transition duration-300"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              className="hover:text-teal-300 transition duration-300 "
            >
              Contact Us
            </Link>
          </li>
          <li>
          <h1 onClick={openBrochureLink} className="cursor-pointer hover:text-teal-300 ">Brochure</h1>          </li>
        </ul>
      </div>
  );
};


import React from 'react';
import Logo from '@/images/logo.png';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className=" fixed top-0 left-0 right-0 z-50 bg-opacity-40 bg-black p-2">
            <div className="container mx-auto flex justify-between items-center ">
                <div>
                    <Image
            src={Logo}
            alt=""
            width={30}
            height={30}
            style={{ margin: "0px 20px " }}
          ></Image>
                </div>
                <ul className="flex gap-10">
                    <li><a href="/" className="text-white">Home</a></li>
                    <li><a href="/about" className="text-white">About</a></li>
                    <li><a href="/contact" className="text-white">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

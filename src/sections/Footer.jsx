import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-gray-900 text-white py-6'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
                {/* Brand */}
                <h1 className='text-xl md:text-2xl font-bold'>
                    MS <span className='text-yellow-500 italic'>Structure</span>
                </h1>
                
                {/* Links */}
                <div className='flex gap-6 mt-4 md:mt-0'>
                    <a
                        href='https://github.com/sumu9897'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:text-yellow-500 transition-colors duration-300'
                    >
                        <FaGithub size={24} />
                    </a>
                    <a
                        href='https://linkedin.com/in/md-sumon9897'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:text-yellow-500 transition-colors duration-300'
                    >
                        <FaLinkedin size={24} />
                    </a>
                    <a
                        href='mailto:mohammad.sumon9897@gmail.com'
                        className='hover:text-yellow-500 transition-colors duration-300'
                    >
                        <FaEnvelope size={24} />
                    </a>
                </div>

                {/* Copyright */}
                <p className='text-sm mt-4 md:mt-0'>
                    &copy; {new Date().getFullYear()} MS Structure. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

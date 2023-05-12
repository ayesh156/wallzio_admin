import React, { useState, useEffect, useRef } from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { FaUserAlt, FaUserCog } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { ImImages } from "react-icons/im";
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import Subscribers from './components/Subscribers';
import Wallpapers from './components/Wallpapers';
import Users from './components/Users';
import { wall, logo } from '../assets/index';
import './components/adminStyle.css';

function AdminHome() {

  const [content, setContent] = useState(<Dashboard />);
  const [selectedOption, setSelectedOption] = useState('Dashboard');

  const handleClick = (value) => {
    setSelectedOption(value);

    switch (value) {
      case 'Dashboard':
        setContent(<Dashboard />);
        break;
      case 'Subscribers':
        setContent(<Subscribers />);
        break;
      case 'Wallpapers':
        setContent(<Wallpapers />);
        break;
      case 'Users':
        setContent(<Users />);
        break;
      case 'Settings':
        setContent(<Settings />);
        break;
      default:
        setContent(<Dashboard />);
    }

  };

  return (
    <div className='flex min-h-screen'>
      <aside className="md:px-5 ml-1 text-white p-1 md:p-5 py-12 pr-0">
        <div className='mb-6 justify-center w-10 md:w-28'>
          <a href="/">
          <img src={wall} className='hidden md:block' alt="" />
          <img src={logo} className='pl-1 block md:hidden' alt="" />
          </a>
        </div>
        <nav className="flex flex-col">
          <div
            className={`md:px-4 px-3 py-1 mb-2 flex gap-2 items-center cursor-pointer ${selectedOption === 'Dashboard' ? 'bg-gray-200 text-primary2 rounded-xl rounded-r-none' : 'bg-transparent'
              }`}
            onClick={() => handleClick('Dashboard')}
          >
            <span className="md:text-[18px] text-2xl">
              <AiOutlineHome />
            </span>
            <span className='hidden md:block'>Dashboard</span>
          </div>
          <div
            className={`md:px-4 px-3 mb-2 py-1 flex gap-2 items-center cursor-pointer ${selectedOption === 'Subscribers' ? 'bg-gray-200 text-primary2 rounded-xl rounded-r-none' : 'bg-transparent'
              }`}
            onClick={() => handleClick('Subscribers')}
          >
            <span className="md:text-[14px] text-xl">
              <FaUserAlt />
            </span>
            <span className='hidden md:block'>Subscribers</span>
          </div>
          <div
            className={`md:px-4 px-3 mb-2 py-1 flex gap-2 items-center cursor-pointer ${selectedOption === 'Wallpapers' ? 'bg-gray-200 text-primary2 rounded-xl rounded-r-none' : 'bg-transparent'
              }`}
            onClick={() => handleClick('Wallpapers')}
          >
            <span className="md:text-[14px] text-xl">
              <ImImages />
            </span>
            <span className='hidden md:block'>Wallpapers</span>
          </div>
          <div
            className={`md:px-4 px-3 mb-2 py-1 flex gap-2 items-center cursor-pointer ${selectedOption === 'Users' ? 'bg-gray-200 text-primary2 rounded-xl rounded-r-none' : 'bg-transparent'
              }`}
            onClick={() => handleClick('Users')}
          >
            <span className="md:text-[18px] text-2xl">
              <FaUserCog />
            </span>
            <span className='hidden md:block'>Users</span>
          </div>
          <div
            className={`md:px-4 px-3 mb-2 py-1 flex gap-2 items-center cursor-pointer ${selectedOption === 'Settings' ? 'bg-gray-200 text-primary2 rounded-xl rounded-r-none' : 'bg-transparent'
              }`}
            onClick={() => handleClick('Settings')}
          >
            <span className="md:text-[14px] text-xl">
              <FiSettings />
            </span>
            <span className='hidden md:block'>Settings</span>
          </div>
        </nav>
      </aside>
      {content}
    </div>
  )
}

export default AdminHome
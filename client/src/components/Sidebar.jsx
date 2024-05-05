import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { sidebarItemsData } from '../data/sidebarItemsDat';
import SidebarItem from './SidebarItem';
import Logo from '../assets/image/out.png';

const Sidebar = () => {
  

  return (
    <aside
      className={`fixed left-0 z-50 h-screen transition-all w-40
        `}         
    >
      <nav className='h-full flex flex-col border-r border-gray-300 dark:border-gray-600 shadow-sm bg-white dark:bg-primary-deepDark dark:text-primary-dark'>
        <div className='h-14 overflow-hidden flex justify-around items-center'>
          <img
            className={`w-full h-11 object-fill overflow-hidden transition-all  'w-30' 
              `}
            src={Logo}
            alt='store logo'
          />
          <div>
            <div className='flex items-center'>
              <button
                
                className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition-all hover:text-gray-600 dark:hover:text-white'
              >  
              </button>
            </div>
          </div>
        </div>

        <ul className='flex flex-col gap-2 pt-3 px-3'>
          {
            sidebarItemsData.map((item, idx) => (
              <SidebarItem
                key={idx}
                Icon={item.icon}
                text={item.text}
                path={item.path}
              
              />
            ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
import { Link } from 'react-router-dom';
import { useState } from 'react';

const SidebarItem = ({ Icon, text, active, path, submenu }) => {
    const [showSubmenu, setShowSubmenu] = useState(false);
    const icon = <Icon size={20} />;

    const handleSubmenuToggle = () => {
        setShowSubmenu(!showSubmenu);
    };
    return (
        <div>
        <a href={`${path}`} onClick={handleSubmenuToggle}>
            <li
                className={`relative group flex items-center py-2 px-3 my-1 text-sm font-medium rounded-md cursor-pointer  ${active
                    ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'
                    : 'hover:bg-indigo-50 hover:text-primary-light text-primary-light dark:text-primary-dark hover:dark:text-primary-light'
                    }`}
            >
                {icon}

                <span
                    className={`overflow-hidden transition-all  w-32 ml-3
                        `}
                >
                    {text}
                </span>

                
            </li>
        </a>
         {submenu && showSubmenu && (
            <ul>
                {submenu.map((subItem, index) => (
                    <li key={index}>
                        <a href={`${subItem.path}`}>{subItem.text}</a>
                    </li>
                ))}
            </ul>
        )}</div>

    );
};

export default SidebarItem;
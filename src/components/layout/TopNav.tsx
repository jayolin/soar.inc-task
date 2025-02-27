import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BellIcon, HamburgerIcon, SettingsIcon } from '../Icons';
import Avatar from '../Avatar';
import Input from '../Input';

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow">
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
       <HamburgerIcon />
      </button>
      <h1 className="text-lg">Page Title</h1>
      <div className="flex items-center">
        <Input placeholder="Search for something" />
        <div className="flex items-center ml-4">
          <SettingsIcon />
          <BellIcon />
          <Avatar src="/path/to/avatar" />
        </div>
      </div>
    </div>
  );
};

export default TopNav;

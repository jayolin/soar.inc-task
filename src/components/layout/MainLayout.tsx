import { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopNav from './TopNav';

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className="flex-grow ml-0 md:ml-1/3">
        <TopNav />
        {children}
      </div>
    </div>
  );
};

export default MainLayout;

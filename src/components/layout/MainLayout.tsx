import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import TopNav from "./TopNav";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#f5f7fa]">
      <Sidebar show={show} onRequestClose={() => setShow(false)} />
      <div className="flex-1 flex flex-col">
        <TopNav onRequestToggle={() => setShow((val) => !val)} />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;

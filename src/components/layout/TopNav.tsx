import { useState } from "react";
import { Link } from "react-router-dom";
import { BellIcon, HamburgerIcon, SearchIcon, SettingsIcon } from "../Icons";
import Avatar from "../Avatar/Avatar";
import Input from "../Input/Input";
import IconButton from "../IconButton/IconButton";
import { useApp } from "../../context/AppContext";

interface Props {
  onRequestToggle?: () => void;
}

const TopNav = ({ onRequestToggle }: Props) => {
  const { userData } = useApp();

  if (!userData) {
    return <></>
  }

  return (
    <div className="sticky top-0 bg-white border-b border-[#E6EFF5] px-6 py-3 lg:h-[80px] space-y-3">
      <div className="flex justify-between items-center lg:h-full">
        <div className="lg:hidden">
          <IconButton elevated={false} onClick={() => onRequestToggle?.()}>
            <HamburgerIcon />
          </IconButton>
        </div>

        <h1 className="text-base lg:text-lg font-semibold">Overview</h1>

        <div className="flex items-center space-x-6">
          <Input
            left={<SearchIcon />}
            className="hidden lg:flex"
            variant="gray"
            rounded
            placeholder="Search for something"
          />

          <div className="hidden lg:block">
            <IconButton className="text-[#718EBF]" size="sm" theme="gray">
              <SettingsIcon />
            </IconButton>
          </div>

          <div className="hidden lg:block">
            <IconButton size="sm" theme="gray">
              <BellIcon />
            </IconButton>
          </div>

          <Avatar src={userData.photo} />
        </div>
      </div>

      <div className="block lg:hidden">
        <Input
          left={<SearchIcon />}
          variant="gray"
          rounded
          placeholder="Search for something"
        />
      </div>
    </div>
  );
};

export default TopNav;

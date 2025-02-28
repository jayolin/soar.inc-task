import { useState } from "react";
import EditProfile from "../components/settings/EditProfile";
import TabHeader from "../components/TabHeader/TabHeader";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("edit-profile");

  return (
    <div className="p-6 lg:m-8 m-6 rounded-[25px] bg-white">
      <div className="tabs">
        <TabHeader
          tabs={[
            {
              id: "edit-profile",
              name: "Edit Profile",
            },
            {
              id: "preferences",
              name: "Preferences",
            },
            {
              id: "security",
              name: "Security",
            },
          ]}
          activeTab={activeTab}
          onRequestChangeTab={setActiveTab}
        />
      </div>

      <div
        className={`transition-opacity duration-500 ${
          activeTab === "edit-profile"
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        <EditProfile />
      </div>

      <div
        className={`transition-opacity duration-500 ${
          activeTab === "preferences"
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        <></>
      </div>

      <div
        className={`transition-opacity duration-500 ${
          activeTab === "security"
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        <></>
      </div>
    </div>
  );
};

export default Settings;

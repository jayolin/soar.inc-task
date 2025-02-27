import { useState } from "react";
import EditProfile from "../components/settings/EditProfile";

const Settings = () => {
  const [activeTab, setActiveTab] = useState('Edit Profile');

  return (
    <div className="p-4">
      <div className="tabs">
        {['Edit Profile', 'Preferences', 'Security'].map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)}>
            {tab}
          </button>
        ))}
      </div>
      {activeTab === 'Edit Profile' && <EditProfile />}
      {activeTab === 'Preferences' && <></>}
      {activeTab === 'Security' && <></>}
    </div>
  );
};

export default Settings;

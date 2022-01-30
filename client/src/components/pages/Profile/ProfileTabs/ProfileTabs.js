import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProfileTabs.scss";

const ProfileTabs = ({ currentTab, setCurrentTab }) => {
  const tabs = ["Informations personnelles", "Mes cours", "Cours likés"];

  const previousTab = () => {
    if (currentTab === 0) {
      setCurrentTab(tabs.length - 1);
    } else {
      setCurrentTab(currentTab - 1);
    }
  };

  const nextTab = () => {
    if (currentTab === tabs.length - 1) {
      setCurrentTab(0);
    } else {
      setCurrentTab(currentTab + 1);
    }
  };

  return (
    <div className="profileTabs__container">
      <div className="profileTabs__leftContainer">
        {tabs.map((tab, index) => (
          <div
            onClick={() => {
              setCurrentTab(index);
            }}
            className={
              currentTab === index
                ? "profileTabs__currentTab"
                : "profileTabs__tab"
            }
          >
            {tab}
          </div>
        ))}
      </div>

      <div>
        <button
          className="profileTabs__tabButton"
          onClick={() => {
            previousTab();
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          className="profileTabs__tabButton"
          onClick={() => {
            nextTab();
          }}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default ProfileTabs;

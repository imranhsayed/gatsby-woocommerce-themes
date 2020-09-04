import React, { useState } from "react";
import "./style.scss";
import Dashboard from "./dashboard";
import Orders from "./orders";
import { isUserLoggedIn } from "../../utils/functions";
import Logout from "./logout";
import Addresses from "./addresses";
import AccountDetails from "./account-details";

const auth = isUserLoggedIn();

const tabItems = [
  {
    id: 1,
    title: "Dashboard",
    icon: "tabitem__icon tab-dashboard",
    content: <Dashboard authData={auth} />,
  },
  {
    id: 2,
    title: "Orders",
    icon: "tabitem__icon tab-users",
    content: <Orders authData={auth} />,
  },
  {
    id: 3,
    title: "Addresses",
    icon: "tabitem__icon tab-addresses",
    content: <Addresses authData={auth} />,
  },
  {
    id: 4,
    title: "Account Details",
    icon: "tabitem__icon tab-account-details",
    content: <AccountDetails authData={auth} />,
  },
  {
    id: 5,
    title: "Logout",
    icon: "tabitem__icon tab-logout",
    content: null,
  },
];

const TabItemComponent = ({
  icon = "",
  title = "",
  onItemClicked = () => console.error("You passed no action to the component"),
  isActive = false,
}) => {
  return (
  	<div className={isActive ? "tabitem" : "tabitem tabitem--inactive"}>
	    <button
		    onClick={onItemClicked}
		    style={{ width: '100%' }}
	    >
		    <i className={icon} />
		    <p className="tabitem__title">{title}</p>
	    </button>
    </div>
  );
};

const CustomerAccount = ({ handleLogout }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="row">
      <div className="account-details-menu col-3">
        {tabItems.map(({ id, icon, title }) =>
          5 === id ? (
            <Logout key={title} handleLogout={handleLogout} />
          ) : (
            <TabItemComponent
              key={title}
              icon={icon}
              title={title}
              onItemClicked={() => setActive(id)}
              isActive={active === id}
            />
          )
        )}
      </div>
      <div className="account-details-content card col-9 px-0">
        {tabItems.map(({ id, content }) => {
          return active === id ? <div key={id}>{content}</div> : "";
        })}
      </div>
    </div>
  );
};

export default CustomerAccount;

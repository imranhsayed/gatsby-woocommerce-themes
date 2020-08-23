import React from "react";

const Logout = ({ handleLogout }) => {
  console.log("hey");
  return (
    <div className="tabitem tabitem--inactive">
      <button onClick={handleLogout} className="logout">
        Log out
      </button>
    </div>
  );
};

export default Logout;

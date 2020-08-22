import React from 'react';

const Logout = ( { handleLogout } ) => {
	return(
		<div className="tabitem tabitem--inactive">
			<button onClick={handleLogout}>Log out</button>
		</div>
	)
};

export default Logout;

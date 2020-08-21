import React from 'react';
import Layout from "../../components/layout";

import { siteURL } from "../../../client-config";

const iframe = '<iframe width="100%" height="600" src="' + siteURL + '/my-account" title="iframe Example 1" frameBorder="no"/>';

const MyAccount = () => {
	return (
		<Layout>
			<div
				dangerouslySetInnerHTML={{ __html: iframe }}
			/>
		</Layout>
	)
};

export default MyAccount;

import React from 'react';
import Layout from "../../components/layout";
import Login from "../../components/login";
import Register from "../../components/register";

const MyAccount = () => {
	return (
		<Layout>
			<Login/>
			<Register/>
		</Layout>
	)
};

export default MyAccount;

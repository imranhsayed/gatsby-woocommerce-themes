import React from "react";
import { isEmpty } from "lodash";

const AccountDetails = ({ authData }) => {
  if (isEmpty(authData)) {
    return null;
  }

  const { user } = authData;

  return (
    <div className="card-body">
      {!isEmpty(user.firstName) ? (
        <p>
          First Name: <strong>{user.firstName}</strong>
        </p>
      ) : null}
      {!isEmpty(user.lastName) ? (
        <p>
          Last Name: <strong>{user.lastName}</strong>
        </p>
      ) : null}
      {!isEmpty(user.username) ? (
        <p>
          Username: <strong>{user.username}</strong>
        </p>
      ) : null}
      {!isEmpty(user.email) ? (
        <p>
          Email: <strong>{user.email}</strong>
        </p>
      ) : null}
    </div>
  );
};

export default AccountDetails;

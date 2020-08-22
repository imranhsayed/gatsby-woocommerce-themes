import React from 'react';

const CreateAccount = ( { handleOnChange } ) => {
	return (
		<div className="form-check">
			<label className="form-check-label">
				<input
					onChange={handleOnChange}
					className="form-check-input"
					name="createAccount"
					type="checkbox"
				/>
				Create an account?
			</label>
		</div>
	)
};

export default CreateAccount;

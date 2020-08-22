import React, { useState } from 'react';
import Error from "../error";

const CreateAccount = ( { handleOnChange, input } ) => {

	const [formVisibility, setFormVisibility] = useState( false );

	return (
		<div className="form-check">
			<label className="form-check-label">
				<input
					onChange={ handleOnChange }
					onClick={ () => setFormVisibility( ! formVisibility ) }
					className="form-check-input"
					name="createAccount"
					type="checkbox"
				/>
				Create an account?
			</label>

			{
				formVisibility ? (
					// Create account fields
					<div className="form-row mt-2">

						{/* Username */ }
						<div className="form-group col-md-6">
							<label htmlFor="username">
								Username
								<abbr className="required" title="required">
									*
								</abbr>
							</label>
							<input
								type="text"
								className="form-control woo-next-checkout-input"
								id="username"
								name="username"
								placeholder="Enter username"
								value={ input.username }
								onChange={ handleOnChange }
							/>
							<Error errors={input.errors} fieldName={"username"} />
						</div>

						{/* Password */ }
						<div className="form-group col-md-6">
							<label htmlFor="password">
								Password
								<abbr className="required" title="required">
									*
								</abbr>
							</label>
							<input
								type="password"
								className="form-control woo-next-checkout-input"
								id="password"
								name="password"
								placeholder="Enter password"
								value={ input.password }
								onChange={ handleOnChange }
							/>
							<Error errors={input.errors} fieldName={"password"} />
						</div>
					</div>
				) : null
			}
		</div>
	)
};

export default CreateAccount;

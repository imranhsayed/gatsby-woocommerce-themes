import React from "react";
import countryList from "./../country-list";
import Error from "./../error";
import { isUserLoggedIn } from "../../../utils/functions";
import { isEmpty } from "lodash";

const Billing = ({ input, handleOnChange }) => {

	const auth = isUserLoggedIn();

  return (
    <React.Fragment>
      {/*Name*/}

      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="first-name">
              First Name
              <abbr className="required" title="required">
                *
              </abbr>
            </label>
            <input
              onChange={handleOnChange}
              value={input.firstName}
              type="text"
              name="firstName"
              className="form-control woo-next-checkout-input"
              id="first-name"
            />
            <Error errors={input.errors} fieldName={"firstName"} />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="last-name">
              Last Name
              <abbr className="required" title="required">
                *
              </abbr>
            </label>
            <input
              onChange={handleOnChange}
              value={input.lastName}
              type="text"
              name="lastName"
              className="form-control woo-next-checkout-input"
              id="last-name"
            />
            <Error errors={input.errors} fieldName={"lastName"} />
          </div>
        </div>

        {/* Company Name */}
        <div className="form-group">
          <label htmlFor="first-name">Company Name</label>
          <input
            onChange={handleOnChange}
            value={input.company}
            type="text"
            name="company"
            className="form-control woo-next-checkout-input"
            id="first-name"
          />
          <Error errors={input.errors} fieldName={"company"} />
        </div>
        {/* Country */}
        <div className="form-group">
          <label htmlFor="country-select">
            Country
            <abbr className="required" title="required">
              *
            </abbr>
          </label>
          {/* eslint-disable */}
          <select
            onChange={handleOnChange}
            value={input.country}
            name="country"
            className="form-control woo-next-checkout-input"
            id="country-select"
          >
            <option value="">Select a country...</option>
            {countryList.length &&
              countryList.map((country, index) => (
                <option key={`${country}-${index}`} value={country.countryCode}>
                  {country.countryName}
                </option>
              ))}
          </select>
          <Error errors={input.errors} fieldName={"country"} />
        </div>
        {/* Street Address */}
        <div className="form-group">
          <label htmlFor="street-address">
            Street Address
            <abbr className="required" title="required">
              *
            </abbr>
          </label>
          <input
            type="text"
            onChange={handleOnChange}
            value={input.address1}
            name="address1"
            placeholder="House number and street name"
            className="form-control woo-next-checkout-input"
            id="street-address"
          />
          <Error errors={input.errors} fieldName={"address1"} />
          <br />
          <input
            type="text"
            onChange={handleOnChange}
            value={input.address2}
            name="address2"
            placeholder="Apartment, suite, unit etc.(optional)"
            className="form-control woo-next-checkout-input"
            id="first-name"
          />
        </div>
        {/* Town/City */}
        <div className="form-group">
          <label htmlFor="city">
            Town/City
            <abbr className="required" title="required">
              *
            </abbr>
          </label>
          <input
            onChange={handleOnChange}
            value={input.city}
            type="text"
            name="city"
            className="form-control woo-next-checkout-input"
            id="city"
          />
          <Error errors={input.errors} fieldName={"city"} />
        </div>
        {/* County */}
        <div className="form-group">
          <label htmlFor="state">
            State/County
            <abbr className="required" title="required">
              *
            </abbr>
          </label>
          <input
            onChange={handleOnChange}
            value={input.state}
            type="text"
            name="state"
            className="form-control woo-next-checkout-input"
            id="state"
          />
          <Error errors={input.errors} fieldName={"state"} />
        </div>
        {/* Post Code */}
        <div className="form-group">
          <label htmlFor="post-code">
            Postcode
            <abbr className="required" title="required">
              *
            </abbr>
          </label>
          <input
            onChange={handleOnChange}
            value={input.postcode}
            type="text"
            name="postcode"
            className="form-control woo-next-checkout-input"
            id="post-code"
          />
          <Error errors={input.errors} fieldName={"postcode"} />
        </div>
        {/*Phone & Email*/}
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="phone">
              Phone
              <abbr className="required" title="required">
                *
              </abbr>
            </label>
            <input
              onChange={handleOnChange}
              value={input.phone}
              type="text"
              name="phone"
              className="form-control woo-next-checkout-input"
              id="phone"
            />
            <Error errors={input.errors} fieldName={"phone"} />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="email">
              Email
              <abbr className="required" title="required">
                *
              </abbr>
            </label>
            <input
              onChange={handleOnChange}
              value={input.email}
              type="email"
              name="email"
              className="form-control woo-next-checkout-input"
              id="email"
            />
            <Error errors={input.errors} fieldName={"email"} />
          </div>
        </div>
      </form>

	    { ! isEmpty( auth ) ? (
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
	    ) : null }
      <h2 className="mt-4 mb-4">Additional Information</h2>
      <div className="form-group">
      	<label htmlFor="order-notes">Order Notes</label>
      	<textarea onChange={ handleOnChange } defaultValue={ input.customerNote } name="customerNote" className="form-control woo-next-checkout-textarea" id="order-notes" rows="4"/>
      	<Error errors={ input.errors } fieldName={ 'customerNote' }/>
      </div>
    </React.Fragment>
  );
};

export default Billing;

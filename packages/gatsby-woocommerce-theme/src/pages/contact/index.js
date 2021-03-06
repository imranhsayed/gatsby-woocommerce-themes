import React, { useState } from "react"
import { navigate } from 'gatsby'
import Layout from "../../components/layout"
import NetlifyForm from 'react-ssg-netlify-forms'
import './contact.css'

const ContactPage = () => {

  // Pre-Submit for validations and disabling button
  const [processing, setProcessing] = useState(false)
  const preSubmit = async () => {
    if (formValues.name.length > 0 && formValues.email.length > 0) {
      setProcessing(true)
      // Wait 2 seconds to simulate async delay (maybe user confirmation? or
      // external checks?)
      await (new Promise(resolve => setTimeout(resolve, 2000)))
      return true
    }
    else {
      return false
    }
  }

  // Post-Submit for navigating to 'Thank You' page .. or maybe displaying 'sent!'
  // text; totally up to you!
  const postSubmit = () => {
    console.log('Sent!')
    setProcessing(false)
    navigate('/contact/thanks')
  }

  // Simple controlled form setup
  const handleChange = e => setFormValues({ ...formValues, [e.target.name]: e.target.value })
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: ''
  })

  return (
    <Layout>
      <div className="container my-5">
        <h1 className="mt-5 mb-4">
          Contact Us
        </h1>
      </div>
      <div className="contact-page">
        <div className="contact-form">
          <NetlifyForm
            formName="Contact"
            formValues={formValues}
            preSubmit={preSubmit}
            postSubmit={postSubmit}
            automaticHoneypot={true}
          >
            <div className="field">
              <label className="label" htmlFor={'name'}>
                Your name:
              </label>
              <div className="control">
                <input
                  className="input"
                  type={'text'}
                  name={'name'}
                  onChange={handleChange}
                  value={formValues.name}
                  id={'name'}
                  required={true}
                />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor={'email'}>
                Email:
              </label>
              <div className="control">
                <input
                  className="input"
                  type={'email'}
                  name={'email'}
                  onChange={handleChange}
                  value={formValues.email}
                  id={'email'}
                  required={true}
                />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor={'message'}>
                Message:
              </label>
              <div className="control">
                <textarea
                  className="textarea"
                  name={'message'}
                  onChange={handleChange}
                  value={formValues.message}
                  id={'message'}
                  required={true}
                />
              </div>
            </div>
            <div className="field">
              <button
                className="button is-link"
                type="submit"
                disabled={processing}
              >
                Send
              </button>
            </div>
          </NetlifyForm>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage

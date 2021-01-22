import React from 'react'
import { useFormik } from 'formik'

import { AccountFormTextField } from './AccountFormTextField'
import { ConfirmFooter } from './ConfirmButton'
import { FormContainer } from './FormContainer'

const ChangePasswordForm = () => {
  const {
    handleSubmit,
    handleChange,
    values
  } = useFormik({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: ''
    },
    onSubmit: ({ currentPassword, newPassword, confirmNewPassword }) => {
      // TODO
    }
  })

  return (
    <FormContainer>
      <AccountFormTextField
        id="currentPassword"
        name="currentPassword"
        type="password"
        label="Password"
        variant="outlined"
        value={values.currentPassword}
        onChange={handleChange}
      />
      <AccountFormTextField
        id="newPassword"
        name="newPassword"
        type="password"
        label="New Password"
        variant="outlined"
        value={values.newPassword}
        onChange={handleChange}
      />
      <AccountFormTextField
        id="confirmNewPassword"
        name="confirmNewPassword"
        type="password"
        label="Confirm new Password"
        variant="outlined"
        value={values.confirmNewPassword}
        onChange={handleChange}
      />
      <ConfirmFooter onClick={handleSubmit} />
    </FormContainer>
  )
}

export { ChangePasswordForm }

import React from 'react'
import { useFormik } from 'formik'

import { AccountFormTextField } from './AccountFormTextField'
import { ConfirmFooter } from './ConfirmButton'
import { FormContainer } from './FormContainer'

const ChangeEmailForm = () => {
  const {
    handleSubmit,
    handleChange,
    values
  } = useFormik({
    initialValues: {
      currentEmail: '',
      newEmail: ''
    },
    onSubmit: ({ currentEmail, newEmail }) => {
      // TODO
    }
  })

  return (
    <FormContainer>
      <AccountFormTextField
        id="currentEmail"
        name="currentEmail"
        type="email"
        label="Current E-mail"
        variant="outlined"
        value={values.currentEmail}
        onChange={handleChange}
      />
      <AccountFormTextField
        id="newEmail"
        name="newEmail"
        type="email"
        label="New E-mail"
        variant="outlined"
        value={values.newEmail}
        onChange={handleChange}
      />
      <ConfirmFooter onClick={handleSubmit} />
    </FormContainer>
  )
}

export { ChangeEmailForm }

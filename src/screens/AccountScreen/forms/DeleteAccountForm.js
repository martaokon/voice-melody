import React from 'react'
import { useFormik } from 'formik'

import { AccountFormTextField } from './AccountFormTextField'
import { ConfirmFooter } from './ConfirmButton'
import { FormContainer } from './FormContainer'

const DeleteAccountForm = () => {
  const {
    handleSubmit,
    handleChange,
    values
  } = useFormik({
    initialValues: {
      password: ''
    },
    onSubmit: ({ password }) => {
      // TODO
    }
  })

  return (
    <FormContainer>
      <AccountFormTextField
        name="password"
        type="password"
        label="Confirm with a password"
        variant="outlined"
        value={values.password}
        onChange={handleChange}
      />
      <ConfirmFooter onClick={handleSubmit} />
    </FormContainer>
  )
}

export { DeleteAccountForm }

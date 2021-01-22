import React from 'react'
import { useFormik } from 'formik'

import { AccountFormTextField } from './AccountFormTextField'
import { ConfirmFooter } from './ConfirmButton'
import { FormContainer } from './FormContainer'

const ChangeUsernameForm  = () => {
  const {
    handleSubmit,
    handleChange,
    values
  } = useFormik({
    initialValues: {
      currentUsername: '',
      newUsername: ''
    },
    onSubmit: ({ currentUsername, newUsername }) => {
      // TODO
    }
  })

  return (
    <FormContainer>
      <AccountFormTextField
        id="currentUsername"
        name="currentUsername"
        type="text"
        label="Current Username"
        variant="outlined"
        value={values.currentUsername}
        onChange={handleChange}
      />
      <AccountFormTextField
        id="newUsername"
        name="newUsername"
        type="text"
        label="New Username"
        variant="outlined"
        value={values.newUsername}
        onChange={handleChange}
      />
      <ConfirmFooter onClick={handleSubmit} />
    </FormContainer>
  )
}

export { ChangeUsernameForm  }

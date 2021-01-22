import React from 'react'
import { Typography, Button } from '@material-ui/core'
import styled from 'styled-components'
import { useFormik } from 'formik'
import { Link, useHistory } from 'react-router-dom'

import { CenterScreenWrapper } from 'components/CenterScreenWrapper'
import { WHITE } from 'themes'
import { FormTextField } from 'components/FormTextField'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 340px;
  padding: ${({ theme }) => theme.spacing(6)}px;
  border-radius: ${({ theme }) => theme.spacing(2)}px;
  text-align: center;
  background-color: ${WHITE};
`

const Header = styled(Typography)`
  &.MuiTypography-root {
    font-size: 24px;
    font-weight: 500;
  }
`

const SubheaderLabel = styled.label`
  margin-bottom: ${({ theme }) => theme.spacing(4)}px;
`

const RegisterScreen = () => {
  const history = useHistory()

  const {
    handleSubmit,
    handleChange,
    values
  } = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: ''
    },
    onSubmit: ({ username, email, password }) => {
      // TODO Handle register
      history.push('login')
    }
  })

  return (
    <CenterScreenWrapper>
      <Container>
        <Header component="h1">Register in Voice and Melody</Header>
        <SubheaderLabel>
          <Typography component="span">Do you already have an account? </Typography>
          <Link to="/login">Log in</Link>
        </SubheaderLabel>
        <FormTextField
          id="username"
          name="username"
          type="text"
          label="username"
          variant="outlined"
          value={values.username}
          onChange={handleChange}
        />
        <FormTextField
          id="email"
          name="email"
          type="email"
          label="email"
          variant="outlined"
          value={values.email}
          onChange={handleChange}
        />
        <FormTextField
          id="password"
          name="password"
          type="password"
          label="password"
          variant="outlined"
          value={values.password}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Register
        </Button>
      </Container>
    </CenterScreenWrapper>
  )
}

export { RegisterScreen }

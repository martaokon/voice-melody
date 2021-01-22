import styled from 'styled-components'
import { TextField } from '@material-ui/core'

export const FormTextField = styled(TextField)`
  display: block;
  width: 100%;
  max-width: 370px;

  &.MuiFormControl-root {
    margin-bottom: ${({ theme }) => theme.spacing(2)}px;
  }
`

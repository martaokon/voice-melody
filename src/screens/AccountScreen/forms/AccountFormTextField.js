import { FormTextField } from 'components/FormTextField'
import styled from 'styled-components'

import { WHITE } from 'themes'

export const AccountFormTextField = styled(FormTextField)`
  & .MuiInputLabel-outlined {
    color: ${WHITE};
  }

  & .MuiOutlinedInput-notchedOutline {
    border-color: ${WHITE} !important;
  }

  & .MuiFormLabel-root.Mui-focused {
    color: ${WHITE};
  }
`
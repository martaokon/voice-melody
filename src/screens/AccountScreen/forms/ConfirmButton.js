import { Button } from '@material-ui/core'
import styled from 'styled-components'
import { WHITE } from 'themes'

const ConfirmButton = styled(Button)`
  &.MuiButtonBase-root {
    color: ${WHITE};
  }
`

const Conteiner = styled.div`
  text-align: right;
`

const ConfirmFooter = ({ onClick: handleClick }) => (
  <Conteiner>
    <ConfirmButton onClick={handleClick}>Confirm</ConfirmButton>
  </Conteiner>
)

export { ConfirmFooter }

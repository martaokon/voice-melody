import React from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'

import { WHITE } from 'themes'

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding-top: 200px;
  box-sizing: border-box;
`

const MainColumn = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`

const Header = styled(Typography)`
  &.MuiTypography-h2 {
    margin-bottom: ${({ theme }) => theme.spacing(4)}px;
    color: ${WHITE};
  }
`

const BasicLayout = ({ header, children }) => (
  <Container>
    <MainColumn>
      <Header
        color="textSecondary"
        variant="h2"
        component="h1"
      >
        {header}
      </Header>
      {children}
    </MainColumn>
  </Container>
)

export { BasicLayout }

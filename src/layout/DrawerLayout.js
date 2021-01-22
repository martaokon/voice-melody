import React from 'react'
import styled from 'styled-components'
import { BasicLayout } from './BasicLayout'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 760px;
`

const DrawerWrapper = styled.div`
  flex: 300px;
`

const Content = styled.div`
  padding: ${({ theme }) => theme.spacing(3)}px;
`

const DrawerLayout = ({ header, drawer, children }) => (
  <BasicLayout header={header}>
    <Container>
      <DrawerWrapper>{drawer}</DrawerWrapper>
      <Content>{children}</Content>
    </Container>
  </BasicLayout>
)

export { DrawerLayout }

import React from 'react'
import styled from 'styled-components'
import { BasicLayout } from './BasicLayout'

const Container = styled.div`
  display: flex;
`

const Content = styled.div`
  padding: ${({ theme }) => theme.spacing(3)}px;
`

const DrawerLayout = ({ header, drawer, children }) => (
  <BasicLayout header={header}>
    <Container>
      <div>{drawer}</div>
      <Content>{children}</Content>
    </Container>
  </BasicLayout>
)

export { DrawerLayout }

import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding-top: 200px;
  box-sizing: border-box;
`

const MainColumn = styled.div`
  width: 700px;
  margin: 0 auto;
`

const BasicLayout = ({ children }) => (
  <Container>
    <MainColumn>
      {children}
    </MainColumn>
  </Container>
)

export { BasicLayout }

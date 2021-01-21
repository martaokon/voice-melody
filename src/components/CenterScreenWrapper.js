import React from 'react'
import styled from 'styled-components'

export const Outer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`

const Inner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const CenterScreenWrapper = ({ children }) => (
  <Outer>
    <Inner>
      {children}
    </Inner>
  </Outer>
)

export { CenterScreenWrapper }



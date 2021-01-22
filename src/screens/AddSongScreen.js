import React, { useCallback } from 'react'
import styled from 'styled-components'

import { BasicLayout } from 'layout/BasicLayout'
import { Dropzone } from 'components/Dropzone'
import { Button } from '@material-ui/core'

const Footer = styled.div`
  text-align: right;
  margin-top: ${({ theme }) => theme.spacing(2)}px;
`
const SecondButton = styled(Button)`
  &.MuiButtonBase-root {
    margin-right: ${({ theme }) => theme.spacing(2)}px;
  }
`

const AddSongScreen = () => {
  const handleDrop = useCallback(acceptedFiles => {
    // TODO, Do something with the files
  }, [])

  return (
    <BasicLayout header="Add song to separate music tracks">
      <Dropzone onDrop={handleDrop} />
      <Footer>
        <SecondButton
          color="secondary"
        >
          Separate
        </SecondButton>
        <Button
          color="secondary"
        >
          Upload
        </Button>
      </Footer>
    </BasicLayout>
  )
}

export { AddSongScreen }

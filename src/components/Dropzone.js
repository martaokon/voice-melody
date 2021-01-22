import { Typography } from '@material-ui/core'
import React from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'

import { WHITE } from 'themes'

const Container = styled.div`
  padding: ${({ theme }) => theme.spacing(4)}px;
  color: ${WHITE};
  text-align: center;
  box-sizing: border-box;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='11' ry='11' stroke='white' stroke-width='4' stroke-dasharray='16' stroke-dashoffset='9' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 11px;
  cursor: pointer;
`

const ZoneSpan = styled(Typography)`
  &.MuiTypography-body1 {
    font-size: 26px;
  }
`

const Dropzone = ({ onDrop: handleDrop }) => {
  const {
    getRootProps,
    getInputProps,
    isDragActive
  } = useDropzone({ onDrop: handleDrop })

  return (
    <Container {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <ZoneSpan component="span">Drop the files here ...</ZoneSpan> :
          <ZoneSpan component="span">Drag & drop an audio file here</ZoneSpan>
      }
    </Container>
  )
}

export { Dropzone }

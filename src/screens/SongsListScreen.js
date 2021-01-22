import React from 'react'
import styled from 'styled-components'
import { BasicLayout } from 'layout/BasicLayout'
import { Button } from '@material-ui/core'

import { WHITE, LIGHT_RED } from 'themes'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing(2)}px;
`

const Name = styled.span`
  flex: 1;
  color: ${WHITE};
`

const StyledButton = styled(Button)`
  &.MuiButtonBase-root {
    margin: 0 ${({ theme }) => theme.spacing(1)}px;
  }
`

const DeleteButton = styled(Button)`
  &.MuiButtonBase-root {
    color: ${LIGHT_RED};
  }
`

const SongsListScreen = () => {
  const MOCK_DATA = [
    {
      id: '1',
      name: 'xdxdxd.mp3'
    },
    {
      id: '2',
      name: 'lalala.mp3'
    }
  ]

  const handleDownloadSong = (id) => {
    // TODO
  }

  const handleDownloadVoice = (id) => {
    // TODO
  }
  const handleDownloadMelody = (id) => {
    // TODO
  }

  const handleDelete = (id) => {
    // TODO
  }

  return (
    <BasicLayout header="List of separated music tracks">
      {MOCK_DATA.map(({ name, id }) => (
        <Container key={id}>
          <Name>{name}</Name>
          <StyledButton
            variant="outlined"
            onClick={() => handleDownloadSong(id)}
          >
            Download song
          </StyledButton>
          <StyledButton
            variant="outlined"
            onClick={() => handleDownloadVoice(id)}
          >
            Download voice
          </StyledButton>
          <StyledButton
            variant="outlined"
            onClick={() => handleDownloadMelody(id)}
          >
            Download melody
          </StyledButton>
          <DeleteButton onClick={() => handleDelete(id)}>
            Delete
          </DeleteButton>
        </Container>
      ))}
    </BasicLayout>
  )
}

export { SongsListScreen }

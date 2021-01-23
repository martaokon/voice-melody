import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BasicLayout } from "layout/BasicLayout";
import { Button } from "@material-ui/core";

import { WHITE, LIGHT_RED } from "themes";
import { getSongs } from "utils/apiClient";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing(2)}px;
`;

const Name = styled.span`
  flex: 1;
  color: ${WHITE};
`;

const StyledButton = styled(Button)`
  &.MuiButtonBase-root {
    margin: 0 ${({ theme }) => theme.spacing(1)}px;
  }
`;

const DeleteButton = styled(Button)`
  &.MuiButtonBase-root {
    color: ${LIGHT_RED};
  }
`;

const SongsListScreen = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getSongs().then(({ data }) => setSongs(data));
  }, []);

  const handleDownloadSong = (id) => {
    // TODO
  };

  const handleDownloadVoice = (id) => {
    // TODO
  };
  const handleDownloadMelody = (id) => {
    // TODO
  };

  const handleDelete = (id) => {
    // TODO
  };

  return (
    <BasicLayout header="List of separated music tracks">
      {songs.map(({ title, song }) => (
        <Container key={song}>
          <Name>{title}</Name>
          <StyledButton
            variant="outlined"
            onClick={() => handleDownloadSong(song)}
          >
            Download song
          </StyledButton>
          <StyledButton
            variant="outlined"
            onClick={() => handleDownloadVoice(song)}
          >
            Download voice
          </StyledButton>
          <StyledButton
            variant="outlined"
            onClick={() => handleDownloadMelody(song)}
          >
            Download melody
          </StyledButton>
          <DeleteButton onClick={() => handleDelete(song)}>Delete</DeleteButton>
        </Container>
      ))}
    </BasicLayout>
  );
};

export { SongsListScreen };

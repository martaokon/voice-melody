import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BasicLayout } from "layout/BasicLayout";
import { Button, CircularProgress, Grid } from "@material-ui/core";

import { WHITE, LIGHT_RED } from "themes";
import { deleteSong, getSongs } from "utils/apiClient";
import ReactPlayer from "react-player";

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

const DeleteButton = styled(Button)`
  &.MuiButtonBase-root {
    color: ${LIGHT_RED};
  }
`;

const SongsListScreen = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getSongs().then(setSongs);
  }, []);

  const handleDelete = (id) => {
    deleteSong(id).then(getSongs).then(setSongs);
  };

  return (
    <BasicLayout header="List of separated music tracks">
      <Container>
        <Grid container item xs={2}></Grid>

        <Grid container item xs={3} justify="center">
          <Name>Original Track</Name>
        </Grid>
        <Grid container item xs={3}>
          <Name>Vocal</Name>
        </Grid>
        <Grid container item xs={3}>
          <Name>Melody</Name>
        </Grid>

        <Grid container item xs={1}></Grid>
      </Container>

      {songs.map(
        ({ title, id, songPath, voicePath, melodyPath, is_separating }) => (
          <Container key={id}>
            <Grid container item xs={2}>
              <Name>{title}</Name>
            </Grid>

            <Grid container item xs={3}>
              <ReactPlayer
                url={songPath}
                width="250px"
                height="50px"
                playing={false}
                controls={true}
              />
            </Grid>
            <Grid container item xs={3}>
              {is_separating ? (
                <CircularProgress />
              ) : (
                <ReactPlayer
                  url={voicePath}
                  width="250px"
                  height="50px"
                  playing={false}
                  controls={true}
                />
              )}
            </Grid>
            <Grid container item xs={3}>
              {is_separating ? (
                <CircularProgress />
              ) : (
                <ReactPlayer
                  url={melodyPath}
                  width="250px"
                  height="50px"
                  playing={false}
                  controls={true}
                />
              )}
            </Grid>

            <Grid container item xs={1}>
              <DeleteButton onClick={() => handleDelete(id)}>
                Delete
              </DeleteButton>
            </Grid>
          </Container>
        )
      )}
    </BasicLayout>
  );
};

export { SongsListScreen };
